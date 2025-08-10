import RegistrationForm from "@/components/my-account/RegistrationForm";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register for Connection - ISP Service Provider",
  description: "Register for our internet, TV, and mobile services.",
};

export default function MyAccountPage() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Register for Connection</h1>
          <p className="mb-6 text-gray-600">
            Already have an account? <Link className="text-red-600" href="/">Sign in</Link>
          </p>
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}
