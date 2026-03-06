import type { Metadata } from 'next'
import './globals.css'
import TipButton from '@/components/TipButton'
import Cursor from '@/components/Cursor'

export const metadata: Metadata = {
  title: 'Chainrails Tip Demo',
  description: 'A minimal demo showing how to add a crypto tip button using Chainrails',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        {children}
        <TipButton />
      </body>
    </html>
  )
}
