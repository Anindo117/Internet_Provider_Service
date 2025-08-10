import RegistrationForm from "@/components/my-account/RegistrationForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - ISP Service Provider",
  description: "Create an account and register for a connection.",
};

export default function RegistrationPage() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Create your account</h1>
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}


