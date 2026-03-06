# Chainrails Tip Demo

A minimal Next.js demo showing how to add a crypto "Buy Me a Coffee" tip button using Chainrails.

## What this demos

- Accepting crypto tips from any chain, any token
- Using `@chainrails/react` PaymentModal
- Secure session endpoint pattern (API key never exposed to frontend)

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- @chainrails/react
- @chainrails/sdk

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.local.example .env.local
```

Fill in your values:
```
CHAINRAILS_API_KEY=your_api_key_here
WALLET_ADDRESS=0x...
DESTINATION_CHAIN=BASE
DESTINATION_TOKEN=USDC
```

Get your API key at: https://dashboard.chainrails.io

### 3. Whitelist your domain

Go to your Chainrails dashboard → Settings → Authorized Domains and add:
```
http://localhost:3000
```

### 4. Run the dev server

```bash
npm run dev
```

Open http://localhost:3000 and click the ☕ button.

## Project Structure

```
app/
  api/
    tip-session/
      route.ts        ← backend session endpoint (POST)
  layout.tsx          ← mounts TipButton globally
  page.tsx            ← demo landing page
  globals.css
components/
  TipButton.tsx       ← floating button + payment modal
  Cursor.tsx          ← custom cursor
```

## Key Files

### `app/api/tip-session/route.ts`
The backend endpoint. Accepts POST with `amount`, returns a Chainrails session token.
Your wallet address and API key live here — never in frontend code.

### `components/TipButton.tsx`
The floating button. Uses `usePaymentModal` from `@chainrails/react`.
On click → POSTs to session endpoint → opens Chainrails modal.

## Full Tutorial

Read the complete integration guide on Hashnode:
https://adegbite.hashnode.dev

## Links

- Chainrails docs: https://docs.chainrails.io
- Chainrails dashboard: https://dashboard.chainrails.io
- Demo: https://chainrails.io/demo
