# SIP Beta Signup Setup Guide

## Environment Variables Setup

### 1. Copy Environment Template
```bash
cp env.template .env
```

**Important**: Use `.env` (not `.env.local`) because drizzle-kit only reads `.env` files by default. Next.js will automatically load `.env` files, so this works for both Next.js and drizzle-kit commands.

### 2. Configure Required Variables

#### Database (Neon PostgreSQL)
1. Go to [neon.tech](https://neon.tech) and create a free account
2. Create a new project
3. Copy the connection string and add to `.env`:
```bash
NEON_DATABASE_URL=postgresql://username:password@hostname.neon.tech/dbname
```

#### Email Service (Resend)
1. Go to [resend.com](https://resend.com) and create a free account (3,000 emails/month)
2. Get your API key and add to `.env`:
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

#### Venmo Integration
Set your Venmo username for donation links:
```bash
NEXT_PUBLIC_VENMO_USERNAME=siptheowl
```

#### Analytics (Optional)
Enable tracking with Google Analytics:
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ANALYTICS_ENABLED=true
```

### 3. Database Setup
Use Drizzle ORM migrations (recommended):
```bash
# Generate migrations from schema
pnpm db:generate

# Apply migrations to database
pnpm db:migrate
```

**Alternative**: Run the SQL schema in your Neon database console:
```bash
# Copy the contents of database/schema.sql
# Paste into Neon SQL Editor and execute
```

### 4. Install Dependencies
```bash
pnpm install
```

### 5. Start Development Server
```bash
pnpm dev
```

## Features

### Enhanced Beta Signup Flow
- Triggered by "Vibe with SIP" button
- **Enhanced email input** with @gmail.com auto-complete button
- **Zod validation** with real-time email validation
- **Two-step process**: Email validation → Donation modal
- Duplicate detection (handles Gmail aliases like user+1@gmail.com)
- Professional welcome email with SIP branding
- PostgreSQL storage for reliability

### Donation Integration
- **$1 Donation Modal**: After email signup, users can donate $1 for 2 free months
- **Venmo Deep Links**: Smart mobile/desktop Venmo integration
- **Donation tracking**: Database tracks donation intent and modal interactions
- **Seamless UX**: Opens Venmo app on mobile, web on desktop

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
1. Ensure `.env` is configured with all required variables
2. Test the enhanced signup flow on `http://localhost:3000`:
   - Click "Vibe with SIP" button
   - Test @gmail.com auto-complete
   - Test donation modal flow
3. Check Neon database for stored signups and donation tracking
4. Verify welcome emails in Resend dashboard
5. Test Venmo deep links on mobile and desktop

### Production Deployment
1. Add environment variables to your hosting platform (Vercel, etc.):
   - `NEON_DATABASE_URL`
   - `RESEND_API_KEY` 
   - `NEXT_PUBLIC_DOMAIN`
   - `NEXT_PUBLIC_VENMO_USERNAME`
   - `NEXT_PUBLIC_GA_ID` (optional)
2. Run migrations during build (happens automatically)
3. Test the full flow on production

## Troubleshooting

### Common Issues
- **Import errors**: Run `pnpm install` to ensure packages are installed
- **Database connection**: Verify `NEON_DATABASE_URL` format
- **Migration errors**: Ensure using `.env` (not `.env.local`) for drizzle-kit compatibility
- **Email not sending**: Check `RESEND_API_KEY` and domain configuration
- **Image not loading**: Ensure `NEXT_PUBLIC_DOMAIN` points to accessible domain
- **Venmo links not working**: Verify `NEXT_PUBLIC_VENMO_USERNAME` is set correctly

### Environment Variable Checklist
- `.env` file exists (not `.env.local`)
- `NEON_DATABASE_URL` is valid PostgreSQL connection string
- `RESEND_API_KEY` starts with `re_`
- `NEXT_PUBLIC_DOMAIN` includes protocol (http/https)
- `NEXT_PUBLIC_VENMO_USERNAME` is your actual Venmo username
- `NEXT_PUBLIC_GA_ID` set for analytics (optional)
- Database migrations have been run (`pnpm db:migrate`)
- Dependencies are installed (`pnpm install`)
