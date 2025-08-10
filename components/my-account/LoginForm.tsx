"use client";

import { useToast } from "@/hooks/use-toast";
import { useAuthStore } from "@/lib/store";
import { ArrowRight, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface FormData {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSuccess?: () => void;
  onOpenRegister?: () => void;
}

export default function LoginForm({ onSuccess, onOpenRegister }: LoginFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const login = useAuthStore((state) => state.login);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login API call
    setTimeout(() => {
      setIsLoading(false);
      // Update auth state
      login();
      // Show success toast
      toast({
        title: "Welcome back!",
        description: "You have successfully logged in.",
        duration: 3000,
      });
      // Call onSuccess callback if provided (for modal)
      if (onSuccess) {
        onSuccess();
      }
      // Navigate to home page
      router.push("/");
    }, 1500);
  };

  return (
    <div className="min-h-[600px] flex">
      <div className="flex-1 flex flex-col justify-center p-8 bg-white rounded-l-lg shadow-lg">
        <div className="max-w-sm mx-auto w-full">
          <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
          <p className="text-gray-600 mb-8">Please sign in to your account</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="block w-full pl-10 pr-4 py-3 border text-black border-gray-200 rounded-md focus:ring-1 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="block w-full pl-10 pr-4 py-3 border text-black border-gray-200 rounded-md focus:ring-1 focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-red-600 hover:text-red-500"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center px-4 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? (
                "Signing in..."
              ) : (
                <>
                  Sign In
                  <ArrowRight className="ml-2 h-5" />
                </>
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            {onOpenRegister ? (
              <button
                type="button"
                onClick={onOpenRegister}
                className="font-medium text-red-600 hover:text-red-500"
              >
                Sign up now
              </button>
            ) : (
              <Link href="/registration" className="font-medium text-red-600 hover:text-red-500">
                Sign up now
              </Link>
            )}
          </p>
        </div>
      </div>

      <div className="hidden lg:block flex-1 bg-gradient-to-br from-red-500 to-red-600 rounded-r-lg p-12 text-white">
        <div className="h-full flex flex-col justify-center">
          <h3 className="text-3xl font-bold mb-6">
            Connect to Unlimited Possibilities
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 mr-3">
                ✓
              </span>
              High-Speed Internet Access
            </li>
            <li className="flex items-center">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 mr-3">
                ✓
              </span>
              Premium TV Channels
            </li>
            <li className="flex items-center">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 mr-3">
                ✓
              </span>
              24/7 Customer Support
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
