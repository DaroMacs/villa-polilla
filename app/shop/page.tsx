import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CartDrawer } from '@/components/cart-drawer'
import { ShopGrid } from '@/components/shop/shop-grid'

export const metadata: Metadata = {
  title: 'Shop — Villa Polilla',
  description:
    'Browse handmade ceramics, textiles and home goods, each made slowly in small batches.',
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-5 pt-14 md:px-8 md:pt-20">
        <p className="text-xs uppercase tracking-[0.25em] text-accent">
          The shop
        </p>
        <h1 className="mt-3 max-w-2xl font-serif text-4xl leading-tight text-foreground text-balance md:text-5xl">
          Everything, made by hand.
        </h1>
        <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
          A rotating collection of small-batch pieces. When something sells out,
          it means the next batch is already on the wheel.
        </p>

        <ShopGrid initialCategory={category ?? 'All'} />
      </main>
      <SiteFooter />
      <CartDrawer />
    </>
  )
}
