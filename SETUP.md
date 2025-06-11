# SIP Beta Signup Setup Guide

## Environment Variables Setup

### 1. Copy Environment Template
```bash
cp env.template .env.local
```

### 2. Configure Required Variables

#### Database (Neon PostgreSQL)
1. Go to [neon.tech](https://neon.tech) and create a free account
2. Create a new project
3. Copy the connection string and add to `.env.local`:
```bash
NEON_DATABASE_URL=postgresql://username:password@hostname.neon.tech/dbname
```

#### Email Service (Resend)
1. Go to [resend.com](https://resend.com) and create a free account (3,000 emails/month)
2. Get your API key and add to `.env.local`:
```bash
RESEND_API_KEY=re_your_api_key_here
```

#### Domain Configuration
Set your domain for the SIP owl image in emails:
```bash
# For production
NEXT_PUBLIC_DOMAIN=https://your-domain.com

# For development
NEXT_PUBLIC_DOMAIN=http://localhost:3000

# For Vercel deployment
NEXT_PUBLIC_DOMAIN=https://your-app.vercel.app
```

### 3. Database Setup
Run the SQL schema in your Neon database console:
```bash
# Copy the contents of database/schema.sql
# Paste into Neon SQL Editor and execute
```

### 4. Install Dependencies
```bash
npm install @neondatabase/serverless resend
```

### 5. Start Development Server
```bash
npm run dev
```

## Features

### Beta Signup Modal
- Triggered by "Vibe with SIP" button
- Email validation and normalization
- Duplicate detection (handles Gmail aliases like user+1@gmail.com)
- Professional welcome email with SIP branding
- PostgreSQL storage for reliability

### Email Normalization
The system automatically normalizes emails to prevent duplicates:
- `user+anything@gmail.com` → `user@gmail.com`
- `u.s.e.r@gmail.com` → `user@gmail.com`
- `user+test@otherdomain.com` → `user@otherdomain.com`

### Error Handling
- Graceful email service failures (signup still succeeds)
- Proper HTTP status codes
- User-friendly error messages
- Database constraint validation

## Testing

### Local Testing
1. Ensure `.env.local` is configured
2. Test the modal on `http://localhost:3000`
3. Check Neon database for stored signups
4. Verify welcome emails in Resend dashboard

### Production Deployment
1. Add environment variables to your hosting platform (Vercel, etc.)
2. Update `NEXT_PUBLIC_DOMAIN` to your production domain
3. Test the full flow on production

## Troubleshooting

### Common Issues
- **Import errors**: Run `npm install` to ensure packages are installed
- **Database connection**: Verify `NEON_DATABASE_URL` format
- **Email not sending**: Check `RESEND_API_KEY` and domain configuration
- **Image not loading**: Ensure `NEXT_PUBLIC_DOMAIN` points to accessible domain

### Environment Variable Checklist
- ✅ `.env.local` file exists
- ✅ `NEON_DATABASE_URL` is valid PostgreSQL connection string
- ✅ `RESEND_API_KEY` starts with `re_`
- ✅ `NEXT_PUBLIC_DOMAIN` includes protocol (http/https)
- ✅ Database schema has been executed
- ✅ Dependencies are installed
