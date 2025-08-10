import { NextRequest, NextResponse } from "next/server";
import { sendEmail, createAdminNotificationEmail, createUserConfirmationEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, timestamp } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create contact form data object
    const contactData = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      timestamp,
    };

    // Send admin notification email
    const adminEmail = createAdminNotificationEmail(contactData);
    const adminResult = await sendEmail(adminEmail);

    // Send user confirmation email
    const userEmail = createUserConfirmationEmail(contactData);
    const userResult = await sendEmail(userEmail);

    if (!adminResult.success || !userResult.success) {
      console.error("Email sending failed:", { adminResult, userResult });
      return NextResponse.json(
        { error: "Failed to send emails" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 