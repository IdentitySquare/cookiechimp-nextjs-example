This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and integrated with [CookieChimp](https://cookiechimp.com) for GDPR-compliant cookie consent management.

## 🍪 CookieChimp Integration

This example demonstrates how to integrate CookieChimp with a Next.js application using the App Router. The implementation includes:

- **CookieChimp Script**: Loads with `beforeInteractive` strategy for proper consent management
- **Consent Logger**: Real-time consent status checking and logging
- **Event Listeners**: Responds to user consent changes
- **Service-level Control**: Granular consent checking for specific services

### Quick Setup

1. **Get your CookieChimp Site ID**:
   - Sign up at [CookieChimp](https://cookiechimp.com)
   - Create a new site in your dashboard
   - Copy your Site ID
   - If you are running locally, ensure to have `localhost` as one of the allowed domains on the CookieChimp settings.

2. **Replace the placeholder**:
   - Open `src/app/layout.tsx`
   - Replace `YOUR_SITE_ID` with your actual Site ID

3. **Test the integration**:
   - Run the development server (see below)
   - Open browser DevTools → Console
   - Interact with the cookie banner to see consent logs

For detailed setup instructions, see [COOKIECHIMP_SETUP.md](./COOKIECHIMP_SETUP.md).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

### CookieChimp Resources
- [CookieChimp Documentation](https://docs.cookiechimp.com) - complete integration guide
- [Next.js Integration Guide](https://docs.cookiechimp.com/docs/installation/nextjs) - specific Next.js setup instructions
- [CookieChimp Dashboard](https://cookiechimp.com) - manage your cookie consent settings

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
