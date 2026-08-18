import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ProductCard } from '@/components/product-card'
import { products } from '@/lib/products'

export function Featured() {
  const featured = products.filter((p) => p.featured).slice(0, 4)

  return (
    <section className="mx-auto max-w-7xl px-5 pt-20 md:px-8 md:pt-28">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-accent">
            The collection
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
            Made this season
          </h2>
        </div>
        <Link
          href="/shop"
          className="group hidden items-center gap-2 text-xs uppercase tracking-widest text-foreground sm:inline-flex"
        >
          View all
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
        {featured.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  )
}
