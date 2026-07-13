"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Shield, Eye, EyeOff, Lock, User } from "lucide-react";
import Image from "next/image";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      router.push("/admin");
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-fortress-navy flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Image
            src="/large-logo.png"
            alt="Fortress Investment Holdings"
            width={260}
            height={72}
            className="h-14 w-auto mx-auto mb-6"
          />
          <div className="flex items-center justify-center gap-2 text-fortress-gold mb-2">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-medium tracking-[3px] uppercase">Admin Portal</span>
          </div>
          <h1 className="text-2xl font-bold text-fortress-ivory">Sign In</h1>
          <p className="text-fortress-silver text-sm mt-1">
            Authorized personnel only
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-fortress-deep border border-white/5 p-8 space-y-5"
        >
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3">
              {error}
            </div>
          )}

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-fortress-silver mb-1.5"
            >
              Username
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-fortress-silver/50" />
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                required
                className="w-full bg-fortress-charcoal border border-white/10 text-fortress-ivory text-sm pl-10 pr-4 py-3 focus:outline-none focus:border-fortress-gold/50 focus:ring-1 focus:ring-fortress-gold/20 transition-colors placeholder:text-fortress-silver/40"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-fortress-silver mb-1.5"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-fortress-silver/50" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                className="w-full bg-fortress-charcoal border border-white/10 text-fortress-ivory text-sm pl-10 pr-10 py-3 focus:outline-none focus:border-fortress-gold/50 focus:ring-1 focus:ring-fortress-gold/20 transition-colors placeholder:text-fortress-silver/40"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-fortress-silver/50 hover:text-fortress-silver transition-colors"
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-fortress-gold text-fortress-navy font-bold text-sm py-3 hover:bg-fortress-champagne transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <p className="text-center text-fortress-silver/50 text-xs mt-6">
          &copy; {new Date().getFullYear()} Fortress Investment Holdings. All rights reserved.
        </p>
      </div>
    </main>
  );
}
