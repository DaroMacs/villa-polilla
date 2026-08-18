import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-5 pt-6 md:px-8">
        <div className="relative overflow-hidden rounded-sm">
          <div className="relative aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-[16/8]">
            <Image
              src="/images/hero.png"
              alt="A handmade artisan studio corner with ceramics and textiles"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-foreground/5 to-transparent" />
          </div>

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-12">
            <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/80">
              Handmade in small batches
            </p>
            <h1 className="mt-3 max-w-2xl font-serif text-4xl leading-[1.05] text-primary-foreground text-balance md:text-6xl">
              Objects made slowly, to be lived with.
            </h1>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="rounded-sm bg-background px-7 py-3 text-xs uppercase tracking-widest text-foreground transition-opacity hover:opacity-90"
              >
                Shop the collection
              </Link>
              <Link
                href="/about"
                className="rounded-sm border border-primary-foreground/60 px-7 py-3 text-xs uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Our story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Oversized wordmark, Awaken-style */}
      <div className="mx-auto max-w-7xl overflow-hidden px-5 pt-10 md:px-8 md:pt-16">
        <p className="text-center font-serif text-[18vw] leading-none tracking-tight text-foreground md:text-[13vw]">
          Villa Polilla
        </p>
      </div>
    </section>
  )
}
