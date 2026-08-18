import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CartDrawer } from '@/components/cart-drawer'

export const metadata: Metadata = {
  title: 'Our Story — Villa Polilla',
  description:
    'Villa Polilla is a small studio making handmade ceramics, textiles and home goods, slowly and by hand.',
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-3xl px-5 pt-16 text-center md:pt-24">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">
            Our story
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-[1.1] text-foreground text-balance md:text-6xl">
            A small studio for slow, honest objects.
          </h1>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Villa Polilla — the moth&apos;s villa — is named for the quiet
            things that live close to home. We make ceramics, textiles and home
            goods by hand, in small batches, from natural materials.
          </p>
        </section>

        <section className="mx-auto mt-16 max-w-7xl px-5 md:px-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
            <Image
              src="/images/story-studio.png"
              alt="The Villa Polilla studio, filled with handmade ceramics and textiles"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>

        <section className="mx-auto mt-20 grid max-w-5xl gap-12 px-5 md:grid-cols-2 md:px-8">
          <div>
            <h2 className="font-serif text-2xl text-foreground">
              How we work
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Each piece begins at the wheel, the loom or the bench. We favour
              natural materials and honest processes, and we resist the pull to
              make faster or more. When a piece sells out, the next batch is
              simply on its way.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-foreground">
              Made to be used
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              These are not objects for the shelf. A mug wants morning coffee, a
              throw wants a cold evening, a bowl wants the middle of the table.
              We hope our pieces settle into your days and gather their own
              stories.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl px-5 pb-4 text-center md:px-8">
          <blockquote className="font-serif text-2xl leading-snug text-foreground text-balance md:text-3xl">
            &ldquo;A little unevenness is not a flaw. It is proof that a hand was
            here.&rdquo;
          </blockquote>
          <div className="mt-10">
            <Link
              href="/shop"
              className="rounded-sm bg-primary px-8 py-4 text-xs uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explore the collection
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <CartDrawer />
    </>
  )
}
