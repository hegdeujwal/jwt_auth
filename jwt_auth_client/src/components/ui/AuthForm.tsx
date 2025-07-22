"use client";

import { useState } from "react";
import { Input } from "./input";
import { Button } from "./button";
import { Label } from "./label";
import Link from "next/link";

type Props = {
  type: "login" | "register";
  onSubmit: (email: string, password: string) => void;
};

export default function AuthForm({ type, onSubmit }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 w-full max-w-md mx-auto rounded-2xl shadow-xl bg-[#E9E3DF] dark:bg-[#1a1a1a] p-8 border border-zinc-200 dark:border-zinc-700 transition-all"
    >
      <h2 className="text-3xl font-extrabold text-center text-[#000000] dark:text-[#E9E3DF]">
        {type === "login" ? "Welcome Back 👋" : "Let’s Get Started 🚀"}
      </h2>

      <div className="space-y-4">
        <div>
          <Label htmlFor="email" className="text-[#465C88] dark:text-[#E9E3DF]">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white dark:bg-[#2a2a2a] text-black dark:text-white border border-[#FF7A30] focus-visible:ring-[#FF7A30] placeholder:text-gray-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <Label
            htmlFor="password"
            className="text-[#465C88] dark:text-[#E9E3DF]"
          >
            Password
          </Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-white dark:bg-[#2a2a2a] text-black dark:text-white border border-[#FF7A30] focus-visible:ring-[#FF7A30] placeholder:text-gray-500"
            placeholder="••••••••"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-[#FF7A30] text-white hover:bg-[#e56b20] transition-colors font-semibold"
      >
        {type === "login" ? "Login" : "Register"}
      </Button>

      <p className="text-center text-sm text-[#465C88] dark:text-[#E9E3DF] mt-4">
        {type === "login" ? (
          <>
            Don’t have an account?{" "}
            <Link
              href="/register"
              className="underline text-[#FF7A30] font-medium"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link
              href="/login"
              className="underline text-[#FF7A30] font-medium"
            >
              Login
            </Link>
          </>
        )}
      </p>
    </form>
  );
}
