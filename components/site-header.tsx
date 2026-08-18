'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/components/cart-provider'

const nav = [
  { href: '/shop', label: 'Shop' },
  { href: '/shop?category=Ceramics', label: 'Ceramics' },
  { href: '/shop?category=Textiles', label: 'Textiles' },
  { href: '/about', label: 'Our Story' },
]

export function SiteHeader() {
  const { count, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-border bg-background/90 backdrop-blur-md'
          : 'border-transparent bg-background'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        {/* Left: nav (desktop) */}
        <nav className="hidden flex-1 items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="size-5 text-foreground" />
        </button>

        {/* Center: wordmark */}
        <Link
          href="/"
          className="font-serif text-2xl tracking-tight text-foreground md:text-center md:text-3xl"
        >
          Villa Polilla
        </Link>

        {/* Right: cart */}
        <div className="flex flex-1 items-center justify-end">
          <button
            type="button"
            onClick={openCart}
            aria-label="Open cart"
            className="relative inline-flex items-center gap-2 text-foreground"
          >
            <ShoppingBag className="size-5" />
            <span className="absolute -right-2 -top-2 flex size-4 items-center justify-center rounded-full bg-accent text-[10px] font-medium text-accent-foreground">
              {count}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-serif text-2xl text-foreground">
              Villa Polilla
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <X className="size-6 text-foreground" />
            </button>
          </div>
          <nav className="flex flex-col gap-2 px-5 pt-6">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-border py-4 font-serif text-2xl text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
