'use client'

import Image from 'next/image'
import { Minus, Plus, X } from 'lucide-react'
import { useCart } from '@/components/cart-provider'
import { formatPrice } from '@/lib/products'

export function CartDrawer() {
  const { isOpen, closeCart, items, subtotal, setQuantity, removeItem } =
    useCart()

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 ${isOpen ? '' : 'pointer-events-none'}`}
    >
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close cart"
        onClick={closeCart}
        className={`absolute inset-0 bg-foreground/30 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-label="Shopping cart"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-card shadow-xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <header className="flex items-center justify-between border-b border-border px-6 py-5">
          <h2 className="font-serif text-xl text-foreground">Your Cart</h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="rounded-full p-1 text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="size-5" />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <p className="font-serif text-lg text-foreground">
              Your cart is empty
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Nothing here yet. Explore our small-batch pieces, each made slowly
              by hand.
            </p>
          </div>
        ) : (
          <ul className="flex-1 divide-y divide-border overflow-y-auto px-6">
            {items.map((item) => (
              <li key={item.slug} className="flex gap-4 py-5">
                <div className="relative size-20 shrink-0 overflow-hidden rounded-sm bg-secondary">
                  <Image
                    src={item.image || '/placeholder.svg'}
                    alt={item.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-serif text-base leading-tight text-foreground">
                        {item.name}
                      </p>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.slug)}
                      aria-label={`Remove ${item.name}`}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <X className="size-4" />
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center rounded-sm border border-border">
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        onClick={() =>
                          setQuantity(item.slug, item.quantity - 1)
                        }
                        className="p-1.5 text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Minus className="size-3.5" />
                      </button>
                      <span className="w-8 text-center text-sm text-foreground">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        aria-label="Increase quantity"
                        onClick={() =>
                          setQuantity(item.slug, item.quantity + 1)
                        }
                        className="p-1.5 text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Plus className="size-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {items.length > 0 && (
          <footer className="border-t border-border px-6 py-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Subtotal</span>
              <span className="font-serif text-lg text-foreground">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
              Shipping and taxes calculated at checkout. Every order is wrapped
              by hand in plastic-free packaging.
            </p>
            <button
              type="button"
              className="w-full rounded-sm bg-primary px-6 py-3.5 text-sm uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
            >
              Checkout
            </button>
          </footer>
        )}
      </aside>
    </div>
  )
}
