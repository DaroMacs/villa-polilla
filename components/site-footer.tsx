import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl text-foreground">Villa Polilla</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Small-batch handmade ceramics, textiles and home goods. Made
              slowly, by hand, to be lived with.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-foreground">
              Shop
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/shop" className="transition-colors hover:text-foreground">
                  All Goods
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Ceramics" className="transition-colors hover:text-foreground">
                  Ceramics
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Textiles" className="transition-colors hover:text-foreground">
                  Textiles
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-foreground">
              About
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="transition-colors hover:text-foreground">
                  Our Story
                </Link>
              </li>
              <li>
                <a
                  href="https://instagram.com/villa_polilla_"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-foreground">
              The List
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              New drops and studio notes, now and then.
            </p>
            <form className="mt-4 flex border-b border-border pb-2">
              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <button
                type="submit"
                className="text-xs uppercase tracking-widest text-foreground"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Villa Polilla. Made by hand.</p>
          <p>Handcrafted goods, shipped worldwide.</p>
        </div>
      </div>
    </footer>
  )
}
