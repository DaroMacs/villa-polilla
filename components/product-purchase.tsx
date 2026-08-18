'use client'

import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { useCart } from '@/components/cart-provider'
import type { Product } from '@/lib/products'

export function ProductPurchase({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)

  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
      <div className="flex items-center self-start rounded-sm border border-border">
        <button
          type="button"
          aria-label="Decrease quantity"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="p-3 text-muted-foreground transition-colors hover:text-foreground"
        >
          <Minus className="size-4" />
        </button>
        <span className="w-10 text-center text-foreground">{qty}</span>
        <button
          type="button"
          aria-label="Increase quantity"
          onClick={() => setQty((q) => q + 1)}
          className="p-3 text-muted-foreground transition-colors hover:text-foreground"
        >
          <Plus className="size-4" />
        </button>
      </div>
      <button
        type="button"
        onClick={() => addItem(product, qty)}
        className="flex-1 rounded-sm bg-primary px-8 py-4 text-xs uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
      >
        Add to cart · {`$${(product.price * qty).toFixed(0)}`}
      </button>
    </div>
  )
}
