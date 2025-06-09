# Vino Vibes Landing Page

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/aaronfeingolds-projects/v0-vino-vibes)
[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

## Purpose

This is a **landing page designed for A/B testing** wine experience offerings. The page is built to test different variations of content, design, and user flows to optimize conversion rates and user engagement for wine-related services.

## Live Demo

**Production:** [https://vercel.com/aaronfeingolds-projects/v0-vino-vibes](https://vercel.com/aaronfeingolds-projects/v0-vino-vibes)

## Tech Stack

- **Framework:** Next.js 15.2.4 (App Router)
- **Language:** TypeScript 5.0
- **Styling:** Tailwind CSS 3.4.17
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Package Manager:** pnpm
- **Deployment:** Vercel

## Key Dependencies

- **React 19** - Latest React with concurrent features
- **shadcn/ui** - High-quality accessible UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation

## Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd vino-vibes-landing

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Type checking
npx tsc --noEmit  # Check TypeScript types
```

## A/B Testing Features

This landing page is optimized for A/B testing with:

- **Modular Components** - Easy to swap different variations
- **Clean Architecture** - Simple to modify content and layouts
- **Performance Optimized** - Fast loading for accurate test results
- **Analytics Ready** - Structured for easy tracking integration
- **Responsive Design** - Consistent experience across devices

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page component
├── components/            # Reusable UI components
├── lib/                   # Utility functions
├── public/               # Static assets
│   ├── favicon.png       # Site favicon (128x128)
│   └── sip-owl.png       # Additional assets
├── styles/               # Additional stylesheets
├── next.config.mjs       # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── vercel.json          # Vercel deployment configuration
└── package.json         # Dependencies and scripts
```

## Design System

The project uses **shadcn/ui** components built on **Radix UI** primitives:

- Accessible by default
- Customizable with Tailwind CSS
- Dark/light mode ready
- TypeScript support

## Deployment

### Automatic Deployment

- **Main Branch:** Automatically deploys to production on Vercel
- **Feature Branches:** Create preview deployments

### Manual Deployment

```bash
# Build and deploy to Vercel
pnpm build
vercel --prod
```

## Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add any environment variables here
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

### Vercel Configuration

The project includes a `vercel.json` file optimized for:
- pnpm package manager
- Node.js 20.x runtime
- Optimal build commands
- US East deployment region

## A/B Testing Guidelines

When creating test variations:

1. **Component-Based:** Create variant components in `/components`
2. **Feature Flags:** Use environment variables to control variants
3. **Consistent Tracking:** Maintain analytics event structure
4. **Performance:** Ensure all variants load quickly
5. **Mobile-First:** Test on mobile devices primarily

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

This project is private and proprietary.

## Support

For questions or issues:
- Review Vercel deployment logs
- Contact the development team

---

**Built with love for wine enthusiasts**
