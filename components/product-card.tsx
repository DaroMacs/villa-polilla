'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { useCart } from '@/components/cart-provider'
import { formatPrice, type Product } from '@/lib/products'

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()

  return (
    <div className="group">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-secondary">
          <Image
            src={product.image || '/placeholder.svg'}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <button
            type="button"
            aria-label={`Add ${product.name} to cart`}
            onClick={(e) => {
              e.preventDefault()
              addItem(product, 1)
            }}
            className="absolute bottom-3 right-3 flex size-10 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-background group-hover:opacity-100"
          >
            <Plus className="size-4" />
          </button>
        </div>
      </Link>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
            {product.category}
          </p>
          <Link href={`/products/${product.slug}`}>
            <h3 className="mt-1 font-serif text-lg leading-tight text-foreground">
              {product.name}
            </h3>
          </Link>
        </div>
        <p className="mt-1 shrink-0 font-serif text-lg text-foreground">
          {formatPrice(product.price)}
        </p>
      </div>
    </div>
  )
}
