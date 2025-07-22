// src/app/(auth)/register/page.tsx
"use client";

import AuthForm from "@/components/ui/AuthForm";
import { toast } from "sonner";

export default function RegisterPage() {
  const handleRegister = (email: string, password: string) => {
    // Example check
    if (email && password.length >= 6) {
      toast.success("Registration successful 🎉");
    } else {
      toast.error("Please use a stronger password (min 6 chars) ❗");
    }
  };

  return <AuthForm type="register" onSubmit={handleRegister} />;
}
