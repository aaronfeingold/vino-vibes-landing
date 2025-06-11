# Database Setup

This project uses **Drizzle ORM** with **Neon PostgreSQL** for database management.

## Quick Start

### Development
```bash
# Generate migrations from schema changes
pnpm db:generate

# Apply migrations to database
pnpm db:migrate

# Open Drizzle Studio (database GUI)
pnpm db:studio

# Push schema directly to database (for prototyping)
pnpm db:push
```

### Production
Migrations run automatically during the build process via the `scripts/migrate.js` script.

## Schema Management

- **Schema Definition**: `src/lib/db/schema.ts`
- **Database Connection**: `src/lib/db/index.ts`
- **Migrations**: `database/migrations/`
- **Legacy Schema**: `database/schema.sql` (kept for reference)

## Environment Variables

Ensure `NEON_DATABASE_URL` is set in your environment:

```bash
NEON_DATABASE_URL="postgresql://username:password@host/database?sslmode=require"
```

## Current Tables

### beta_signups
- `id` (serial, primary key)
- `email` (varchar, not null)
- `normalized_email` (varchar, unique, not null) 
- `created_at` (timestamp with timezone, default now)
- `ip_address` (inet, optional)
- `user_agent` (text, optional)

## Deployment

The build process automatically runs migrations:
1. `node scripts/migrate.js` - Applies pending migrations
2. `next build` - Builds the application

This ensures the database is always up-to-date in production deployments. 
