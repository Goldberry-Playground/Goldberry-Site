'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav>
      <Link className={pathname === '/' ? 'active' : ''} href="/">
        Home
      </Link>
      <Link className={pathname === '/about' ? 'active' : ''} href="/about">
        About
      </Link>
      <Link className={pathname === '/nursery' ? 'active' : ''} href="/nursery">
        Nursery
      </Link>
      <Link className={pathname === '/blog/' ? 'active' : ''} href="/">
        Blog
      </Link>
    </nav>
  )
}
