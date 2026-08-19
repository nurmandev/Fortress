#!/usr/bin/env bash
set -euo pipefail

VPS_HOST="200.234.32.241"
VPS_USER="root"
APP_DIR="/var/www/fortress-website"

echo ">>> Deploying to $VPS_HOST..."

ssh "$VPS_USER@$VPS_HOST" "bash $APP_DIR/deploy.sh"

echo ">>> Done!"
