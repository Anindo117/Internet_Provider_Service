import RegistrationForm from "@/components/my-account/RegistrationForm";
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
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}
