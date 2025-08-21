import './globals.css'
import type { Metadata } from 'next'
import { MarketingHeader } from '../components/layout/MarketingHeader'
import { PublicFooter } from '../components/layout/PublicFooter'

export const metadata: Metadata = {
  title: 'ProjectPro',
  description: 'Civil QA marketing site',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col">
          <MarketingHeader />
          <main className="flex-1">{children}</main>
          <PublicFooter />
        </div>
      </body>
    </html>
  )
}



