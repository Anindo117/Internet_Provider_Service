// Email utility functions for contact form
// Configure with your preferred email service (SendGrid, Nodemailer, etc.)

export interface EmailData {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

// SendGrid provider (used only if SENDGRID_API_KEY is present)
import sgMail from '@sendgrid/mail';

let isSendgridConfigured = false;
try {
  if (process.env.SENDGRID_API_KEY && process.env.SENDGRID_API_KEY.startsWith('SG.')) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    isSendgridConfigured = true;
  }
} catch (e) {
  isSendgridConfigured = false;
}

export async function sendEmail(emailData: EmailData) {
  // If SendGrid is configured, send real emails
  if (isSendgridConfigured) {
    try {
      await sgMail.send({
        to: emailData.to,
        from: emailData.from || (process.env.FROM_EMAIL || 'noreply@yourcompany.com'),
        subject: emailData.subject,
        html: emailData.html,
      });
      return { success: true };
    } catch (error) {
      console.error('SendGrid error:', error);
      return { success: false, error };
    }
  }

  // Development fallback: log the email and report success
  console.log('DEV email (no provider configured):', {
    to: emailData.to,
    subject: emailData.subject,
    from: emailData.from || (process.env.FROM_EMAIL || 'noreply@yourcompany.com'),
  });
  return { success: true };
}


// Example with Nodemailer (uncomment and configure)
/*
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEmail(emailData: EmailData) {
  try {
    await transporter.sendMail({
      from: emailData.from || 'noreply@yourcompany.com',
      to: emailData.to,
      subject: emailData.subject,
      html: emailData.html,
    });
    return { success: true };
  } catch (error) {
    console.error('Nodemailer error:', error);
    return { success: false, error };
  }
}
*/

// Default implementation (logs to console for development)
// export async function sendEmail(emailData: EmailData) {
//   console.log('Email would be sent:', emailData);
//   return { success: true };
// }

// Helper function to create admin notification email
export function createAdminNotificationEmail(data: ContactFormData): EmailData {
  return {
    to: process.env.ADMIN_EMAIL || 'admin@yourcompany.com',
    subject: 'New Contact Form Submission',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #709D06;">New Contact Form Submission</h2>
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Submitted:</strong> ${new Date(data.timestamp).toLocaleString()}</p>
        </div>
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #709D06; margin: 20px 0;">
          <h3 style="margin-top: 0;">Message:</h3>
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
        <div style="text-align: center; margin-top: 30px; color: #666;">
          <p>This message was sent from your website contact form.</p>
        </div>
      </div>
    `,
  };
}

// Helper function to create user confirmation email
export function createUserConfirmationEmail(data: ContactFormData): EmailData {
  return {
    to: data.email,
    subject: 'Thank you for contacting us',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #709D06;">Thank you for contacting us!</h2>
        <p>Dear ${data.name},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Your message:</h3>
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
        <p>If you have any urgent questions, please don't hesitate to call us directly.</p>
        <div style="text-align: center; margin-top: 30px; color: #666;">
          <p>Best regards,<br>Your Company Team</p>
        </div>
      </div>
    `,
  };
} 