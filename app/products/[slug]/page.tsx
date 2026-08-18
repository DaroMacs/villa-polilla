import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CartDrawer } from '@/components/cart-drawer'
import { ProductPurchase } from '@/components/product-purchase'
import { ProductCard } from '@/components/product-card'
import { getProduct, products, formatPrice } from '@/lib/products'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) return { title: 'Not found — Villa Polilla' }
  return {
    title: `${product.name} — Villa Polilla`,
    description: product.tagline,
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4)

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-5 pt-8 md:px-8 md:pt-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1 text-xs uppercase tracking-widest text-muted-foreground">
          <Link href="/shop" className="transition-colors hover:text-foreground">
            Shop
          </Link>
          <ChevronRight className="size-3" />
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-secondary">
            <Image
              src={product.image || '/placeholder.svg'}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="md:pt-6">
            <p className="text-xs uppercase tracking-[0.25em] text-accent">
              {product.category}
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground text-balance md:text-5xl">
              {product.name}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              {product.tagline}
            </p>
            <p className="mt-6 font-serif text-2xl text-foreground">
              {formatPrice(product.price)}
            </p>

            <p className="mt-6 leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            <ProductPurchase product={product} />

            <dl className="mt-10 divide-y divide-border border-t border-border">
              <div className="flex justify-between gap-4 py-3 text-sm">
                <dt className="text-muted-foreground">Materials</dt>
                <dd className="text-right text-foreground">
                  {product.materials}
                </dd>
              </div>
              <div className="flex justify-between gap-4 py-3 text-sm">
                <dt className="text-muted-foreground">Dimensions</dt>
                <dd className="text-right text-foreground">
                  {product.dimensions}
                </dd>
              </div>
            </dl>

            <ul className="mt-6 space-y-2">
              {product.details.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-24 md:mt-32">
            <h2 className="font-serif text-2xl text-foreground md:text-3xl">
              You may also like
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
      <CartDrawer />
    </>
  )
}
