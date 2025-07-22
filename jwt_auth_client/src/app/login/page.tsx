"use client";

import AuthForm from "@/components/ui/AuthForm";
import { toast } from "sonner";

export default function LoginPage() {
  const handleLogin = (email: string, password: string) => {
    // Example: check credentials (fake check here)
    if (email === "test@example.com" && password === "password") {
      toast.success("Logged in successfully 🎉");
    } else {
      toast.error("Invalid credentials ❌");
    }
  };

  return <AuthForm type="login" onSubmit={handleLogin} />;
}
