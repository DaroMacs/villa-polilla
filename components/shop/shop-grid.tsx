'use client'

import { useMemo, useState } from 'react'
import { ProductCard } from '@/components/product-card'
import { categories, products } from '@/lib/products'

export function ShopGrid({ initialCategory }: { initialCategory: string }) {
  const validInitial = categories.includes(initialCategory)
    ? initialCategory
    : 'All'
  const [active, setActive] = useState(validInitial)

  const filtered = useMemo(() => {
    if (active === 'All') return products
    return products.filter((p) => p.category === active)
  }, [active])

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-widest transition-colors ${
              active === cat
                ? 'border-foreground bg-foreground text-background'
                : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-muted-foreground">
          Nothing in this category just yet.
        </p>
      )}
    </>
  )
}
