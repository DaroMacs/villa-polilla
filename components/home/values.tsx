const values = [
  {
    title: 'Made by hand',
    body: 'Thrown, woven and carved in small batches. No two pieces are identical.',
  },
  {
    title: 'Natural materials',
    body: 'Stoneware clay, European flax linen, solid walnut and food-safe finishes.',
  },
  {
    title: 'Plastic-free',
    body: 'Wrapped by hand in unbleached paper and recycled packaging.',
  },
  {
    title: 'Shipped worldwide',
    body: 'Carefully packed and sent from the studio to your door.',
  },
]

export function Values() {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-5 md:mt-32 md:px-8">
      <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v) => (
          <div key={v.title} className="bg-card p-8">
            <h3 className="font-serif text-xl text-foreground">{v.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {v.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
