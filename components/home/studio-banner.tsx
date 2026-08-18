import Image from 'next/image'
import Link from 'next/link'

export function StudioBanner() {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-5 md:mt-32 md:px-8">
      <div className="relative overflow-hidden rounded-sm">
        <div className="relative aspect-[4/5] w-full sm:aspect-[16/9]">
          <Image
            src="/images/story-studio.png"
            alt="A sunlit artisan workshop shelf filled with handmade ceramics"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/25" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/80">
            Visit the studio
          </p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-primary-foreground text-balance md:text-5xl">
            Where clay, cloth and wood become everyday things.
          </h2>
          <Link
            href="/about"
            className="mt-7 rounded-sm bg-background px-7 py-3 text-xs uppercase tracking-widest text-foreground transition-opacity hover:opacity-90"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  )
}
