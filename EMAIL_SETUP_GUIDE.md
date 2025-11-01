# 📧 Contact Form Email Setup Guide

Your contact form is now configured to send emails to **laghmam.dev@gmail.com**!

## 🚀 Quick Setup (5 minutes)

### Step 1: Create Gmail App Password

Since you're using Gmail, you need to create an **App Password** (not your regular password):

1. **Go to Google Account Security**
   - Visit: https://myaccount.google.com/security
   - Sign in with **laghmam.dev@gmail.com**

2. **Enable 2-Step Verification** (if not already enabled)
   - Click on "2-Step Verification"
   - Follow the setup process
   - This is required for App Passwords

3. **Create App Password**
   - Visit: https://myaccount.google.com/apppasswords
   - Or search for "App passwords" in your Google Account settings
   - Select app: **Mail**
   - Select device: **Other (Custom name)**
   - Name it: **Portfolio Contact Form**
   - Click **Generate**
   - **Copy the 16-character password** (looks like: `abcd efgh ijkl mnop`)

### Step 2: Create .env.local File

1. **Create a new file** in your project root called `.env.local`

2. **Add these lines** (replace with your actual app password):

```env
EMAIL_USER=laghmam.dev@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
```

**Important:** 
- Remove the spaces from the app password
- Example: `abcdefghijklmnop`
- Keep this file secret - never commit it to Git!

### Step 3: Restart Your Dev Server

1. **Stop the current server** (Ctrl+C in terminal)
2. **Start it again**: `npm run dev`
3. The server needs to restart to load the new environment variables

---

## ✅ Testing Your Contact Form

1. **Open your portfolio**: http://localhost:3002
2. **Scroll to the Contact section**
3. **Fill out the form**:
   - Name: Test User
   - Email: test@example.com
   - Message: This is a test message
4. **Click "Send Message"**
5. **Check your inbox**: laghmam.dev@gmail.com

You should receive an email with:
- Subject: "Portfolio Contact from Test User"
- Formatted HTML email with the message content
- Reply-to address of the sender

---

## 🎨 What the Email Looks Like

The email you receive will be beautifully formatted with:

- **Professional header** with blue accent
- **Contact details**: Name and email (clickable)
- **Message content** in a highlighted box
- **Clean, modern design**
- **Mobile-friendly**

---

## 🔧 How It Works

### Frontend (Contact Form)
```typescript
// components/contact-section.tsx
- User fills out form (name, email, message)
- Form submits to /api/contact
- Shows loading state while sending
- Displays success/error message
```

### Backend (API Route)
```typescript
// app/api/contact/route.ts
- Receives form data
- Validates input
- Uses nodemailer to send email via Gmail SMTP
- Returns success/error response
```

### Email Service
```
Gmail SMTP → Your Gmail Account (laghmam.dev@gmail.com)
```

---

## 🛡️ Security Features

✅ **Environment Variables** - Credentials stored securely in .env.local
✅ **Input Validation** - All fields required and validated
✅ **Error Handling** - Graceful error messages
✅ **Rate Limiting** - Consider adding if you get spam
✅ **HTTPS** - Use HTTPS in production

---

## 🐛 Troubleshooting

### Problem: "Failed to send email"

**Solution 1: Check App Password**
- Make sure you created an App Password (not regular password)
- Remove all spaces from the password
- Copy it exactly as shown

**Solution 2: Check 2-Step Verification**
- App Passwords require 2-Step Verification to be enabled
- Go to https://myaccount.google.com/security

**Solution 3: Check .env.local**
- File must be named exactly `.env.local`
- Must be in the project root directory
- Restart dev server after creating it

**Solution 4: Check Gmail Settings**
- Make sure "Less secure app access" is OFF (you don't need it with App Passwords)
- Check if Gmail is blocking the login attempt

### Problem: Email not arriving

**Check Spam Folder**
- Sometimes emails go to spam initially
- Mark as "Not Spam" to train Gmail

**Check Email Address**
- Verify EMAIL_USER in .env.local is correct
- Should be: laghmam.dev@gmail.com

### Problem: "Port already in use"

**Solution:**
- The dev server is running on port 3002
- If you see this error, kill the old process
- Or use the port shown in the terminal

---

## 📝 Example .env.local File

```env
# Email Configuration
EMAIL_USER=laghmam.dev@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop

# Note: Replace 'abcdefghijklmnop' with your actual 16-character App Password
# Get it from: https://myaccount.google.com/apppasswords
```

---

## 🚀 Deployment (Production)

When deploying to Vercel, Netlify, or other platforms:

1. **Add Environment Variables** in your hosting dashboard:
   - `EMAIL_USER` = laghmam.dev@gmail.com
   - `EMAIL_PASSWORD` = your-app-password

2. **Vercel Example**:
   - Go to Project Settings → Environment Variables
   - Add both variables
   - Redeploy your site

3. **Never commit .env.local** to Git:
   - It's already in .gitignore
   - Keep your credentials secret

---

## 🎯 Features Included

✅ **Professional Email Template** - Beautiful HTML design
✅ **Success/Error Messages** - User feedback
✅ **Loading States** - Shows "Sending..." while processing
✅ **Form Validation** - All fields required
✅ **Email Validation** - Checks for valid email format
✅ **Disabled State** - Prevents double submission
✅ **Auto-reset** - Form clears after successful send
✅ **Error Recovery** - User can retry if it fails

---

## 📧 Alternative: Using EmailJS (No Backend Required)

If you have trouble with Gmail App Passwords, you can use EmailJS:

1. Sign up at https://www.emailjs.com/
2. Free tier: 200 emails/month
3. No backend code needed
4. Easier setup

Let me know if you want me to implement EmailJS instead!

---

## ✅ Current Status

- ✅ Contact form UI complete
- ✅ API route created
- ✅ Email template designed
- ✅ Success/error messages added
- ✅ Loading states implemented
- ⚠️ **Action Required**: Create .env.local with your App Password

---

## 🎉 Once Setup is Complete

Your contact form will:
1. ✅ Send emails to laghmam.dev@gmail.com
2. ✅ Show professional success messages
3. ✅ Include sender's name, email, and message
4. ✅ Look beautiful in your inbox
5. ✅ Work on all devices

---

**Need Help?** Let me know if you have any issues with the setup!

