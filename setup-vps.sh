#!/bin/bash
set -e

# Fortress Website - VPS Server Setup Script
# Run this ONCE on your VPS as root:
#   bash setup-vps.sh

APP_NAME="fortress"
APP_DIR="/var/www/fortress"
DOMAIN=""  # Set your domain here, e.g., "fortressih.com"
NODE_VERSION="20"

echo "=== Fortress VPS Setup ==="

# --- 1. System Update & Dependencies ---
echo ">>> Updating system..."
apt update && apt upgrade -y
apt install -y curl git ufw build-essential

# --- 2. Install Node.js (via NodeSource) ---
echo ">>> Installing Node.js v${NODE_VERSION}..."
if ! command -v node &> /dev/null; then
  curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash -
  apt install -y nodejs
fi
echo "Node: $(node -v) | npm: $(npm -v)"

# --- 3. Install PM2 ---
echo ">>> Installing PM2..."
npm install -g pm2
pm2 startup systemd -u root --hp /root

# --- 4. Install Nginx ---
echo ">>> Installing Nginx..."
apt install -y nginx
ufw allow 'Nginx Full'

# --- 5. Clone the Repository ---
echo ">>> Cloning repository..."
mkdir -p /var/www
if [ -d "$APP_DIR" ]; then
  cd "$APP_DIR" && git pull origin main
else
  git clone https://github.com/nurmandev/Fortress.git "$APP_DIR"
fi
cd "$APP_DIR"

# --- 6. Install Dependencies & Build ---
echo ">>> Installing dependencies..."
npm ci --production=false

echo ">>> Building..."
npm run build

# --- 7. Create .env if it doesn't exist ---
if [ ! -f "$APP_DIR/.env" ]; then
  echo ">>> Creating .env from template..."
  cp .env.example .env
  echo ""
  echo "!! IMPORTANT: Edit $APP_DIR/.env with your actual secrets !!"
  echo "   nano $APP_DIR/.env"
  echo ""
fi

# --- 8. Start App with PM2 ---
echo ">>> Starting app..."
pm2 delete $APP_NAME 2>/dev/null || true
cd "$APP_DIR"
pm2 start npm --name "$APP_NAME" -- start
pm2 save

# --- 9. Configure Nginx ---
echo ">>> Configuring Nginx..."
if [ -n "$DOMAIN" ]; then
  SERVER_NAME="$DOMAIN www.$DOMAIN"
else
  SERVER_NAME="_"
fi

cat > /etc/nginx/sites-available/$APP_NAME <<NGINX
server {
    listen 80;
    server_name $SERVER_NAME;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
        proxy_read_timeout 600s;
        proxy_send_timeout 600s;
    }
}
NGINX

ln -sf /etc/nginx/sites-available/$APP_NAME /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx

# --- 10. SSL with Certbot (if domain provided) ---
if [ -n "$DOMAIN" ]; then
  echo ">>> Setting up SSL..."
  apt install -y certbot python3-certbot-nginx
  certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" --non-interactive --agree-tos -m "admin@$DOMAIN" || true
fi

echo ""
echo "=== Setup Complete! ==="
echo "App running at: http://$(curl -s ifconfig.me)"
echo ""
echo "Next steps:"
echo "  1. Edit .env: nano $APP_DIR/.env"
echo "  2. Restart:   pm2 restart $APP_NAME"
echo "  3. Logs:      pm2 logs $APP_NAME"
echo ""
echo "To enable auto-deploy via GitHub Actions:"
echo "  1. Add GitHub repo secrets: VPS_HOST, VPS_USER, VPS_SSH_KEY, VPS_SSH_PORT"
echo "  2. Push to main branch triggers deploy"
