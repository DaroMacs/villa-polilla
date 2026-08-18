import Image from 'next/image'
import Link from 'next/link'

export function Story() {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-5 md:mt-32 md:px-8">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
          <Image
            src="/images/story-hands.png"
            alt="An artisan shaping wet clay on a pottery wheel"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="max-w-md">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">
            From the studio
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground text-balance md:text-4xl">
            Every piece carries the mark of the hand that made it.
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Villa Polilla began at a single wheel in a sunlit corner. We work in
            small batches, favouring natural materials and honest processes over
            speed. A little unevenness, a pooling glaze, a knot in the weave —
            these are not flaws but signatures.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We name each piece, wrap it by hand, and send it out to be used
            every day.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-block border-b border-foreground pb-1 text-xs uppercase tracking-widest text-foreground"
          >
            Read our story
          </Link>
        </div>
      </div>
    </section>
  )
}
