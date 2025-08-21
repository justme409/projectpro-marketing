import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ProjectPro',
  description: 'Civil QA marketing site',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}



