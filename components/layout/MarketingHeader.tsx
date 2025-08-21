import Link from 'next/link'

const navigationItems = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Screenshots', href: '#screenshots' },
  { name: 'Pricing', href: '#pricing' },
]

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-bold text-xl text-emerald-600">ProjectPro</Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          {navigationItems.map(item => (
            <a key={item.name} href={item.href} className="text-slate-600 hover:text-emerald-600">
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}



