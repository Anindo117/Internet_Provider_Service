# Contact Form Setup Guide

The contact form has been enhanced with comprehensive validation and email functionality. Here's how to configure it:

## Features Added

✅ **Form Validation**
- Name validation (minimum 2 characters)
- Email format validation
- Message validation (minimum 10 characters)
- Real-time error feedback
- Visual error indicators

✅ **User Experience**
- Loading states during submission
- Success/error messages
- Form reset after successful submission
- Disabled form during submission

✅ **Email Functionality**
- Admin notification emails
- User confirmation emails
- Professional HTML email templates
- Configurable email service integration

## Email Service Configuration

### Option 1: SendGrid (Recommended)

1. Install SendGrid:
```bash
npm install @sendgrid/mail
```

2. Add to your `.env.local`:
```
SENDGRID_API_KEY=your_sendgrid_api_key_here
ADMIN_EMAIL=admin@yourcompany.com
FROM_EMAIL=noreply@yourcompany.com
```

3. Uncomment SendGrid code in `lib/email.ts`

### Option 2: Nodemailer (SMTP)

1. Install Nodemailer:
```bash
npm install nodemailer
```

2. Add to your `.env.local`:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password_here
ADMIN_EMAIL=admin@yourcompany.com
FROM_EMAIL=noreply@yourcompany.com
```

3. Uncomment Nodemailer code in `lib/email.ts`

### Option 3: Development Mode

For development, the form will log emails to the console. No additional setup required.

## Environment Variables

Create a `.env.local` file in your project root:

```env
# Admin email to receive contact form submissions
ADMIN_EMAIL=admin@yourcompany.com

# From email address
FROM_EMAIL=noreply@yourcompany.com

# Choose one email service configuration:

# SendGrid
SENDGRID_API_KEY=your_sendgrid_api_key_here

# OR SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password_here
```

## API Endpoint

The contact form submits to `/api/contact` which:
- Validates all form data
- Sends admin notification email
- Sends user confirmation email
- Returns appropriate success/error responses

## Testing

1. Fill out the contact form with valid data
2. Submit the form
3. Check your console for email logs (development mode)
4. Check your admin email for notifications
5. Check the user's email for confirmation

## Customization

### Email Templates
Edit the email templates in `lib/email.ts`:
- `createAdminNotificationEmail()` - Admin notification template
- `createUserConfirmationEmail()` - User confirmation template

### Form Validation
Modify validation rules in `components/contacts/ContactForm.tsx`:
- Name minimum length
- Email validation regex
- Message minimum length

### Styling
The form uses Tailwind CSS classes. Customize colors and styling in the component.

## Troubleshooting

1. **Emails not sending**: Check your email service configuration
2. **Form validation errors**: Check browser console for details
3. **API errors**: Check server logs for detailed error messages
4. **Environment variables**: Ensure `.env.local` is properly configured

## Security Notes

- Always validate email addresses on both client and server
- Use environment variables for sensitive data
- Consider rate limiting for the contact form
- Implement CAPTCHA for production use
- Sanitize user input before sending emails 