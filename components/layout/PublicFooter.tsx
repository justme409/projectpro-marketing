import Link from 'next/link'

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/about' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Use', href: '/terms' },
      { label: 'Security', href: '/security' },
    ],
  },
]

export function PublicFooter() {
  return (
    <footer className="border-t bg-white text-slate-900 py-12 md:py-16">
      <div className="container px-4 md:px-6 xl:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-emerald-600">ProjectPro</span>
            </div>
            <p className="text-sm text-slate-500 mb-6">
              AI-powered document analysis for civil engineering projects. Save hours on every project.
            </p>
          </div>
          {footerLinks.map((category, index) => (
            <div key={index}>
              <h3 className="font-medium text-sm mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-sm text-slate-600 hover:text-emerald-600">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-slate-500 text-center sm:text-left">
              © {new Date().getFullYear()} ProjectPro. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}



