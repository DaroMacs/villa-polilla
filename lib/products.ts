export type Product = {
  slug: string
  name: string
  tagline: string
  price: number
  category: string
  image: string
  materials: string
  dimensions: string
  description: string
  details: string[]
  featured?: boolean
}

export const products: Product[] = [
  {
    slug: 'luna-stoneware-mug',
    name: 'Luna Stoneware Mug',
    tagline: 'Speckled matte glaze, thrown by hand',
    price: 38,
    category: 'Ceramics',
    image: '/images/product-mug.png',
    materials: 'Stoneware clay, food-safe matte glaze',
    dimensions: '9 cm tall · 300 ml',
    description:
      'A quiet companion for slow mornings. Each Luna mug is thrown on the wheel and finished with an oatmeal speckled glaze, so no two are exactly alike. The handle is pulled by hand to sit gently in the palm.',
    details: [
      'Wheel-thrown in small batches',
      'Dishwasher and microwave safe',
      'Slight variations are part of the craft',
    ],
    featured: true,
  },
  {
    slug: 'ember-soy-candle',
    name: 'Ember Soy Candle',
    tagline: 'Cedar, amber & dried fig',
    price: 44,
    category: 'Home',
    image: '/images/product-candle.png',
    materials: 'Soy wax, cotton wick, terracotta vessel',
    dimensions: '8 cm tall · 45 hr burn',
    description:
      'Hand-poured soy wax in a matte terracotta vessel we make ourselves. A warm, grounding blend of cedar, amber and dried fig that settles a room the moment it is lit.',
    details: [
      'Hand-poured natural soy wax',
      'Refillable terracotta vessel',
      'Approximately 45 hours of burn time',
    ],
    featured: true,
  },
  {
    slug: 'oliva-bud-vase',
    name: 'Oliva Bud Vase',
    tagline: 'Organic form, sage-olive glaze',
    price: 52,
    category: 'Ceramics',
    image: '/images/product-vase.png',
    materials: 'Stoneware clay, reactive sage glaze',
    dimensions: '14 cm tall',
    description:
      'An organic, slightly irregular bud vase glazed in soft sage-olive. Made for a single stem or a small gathering of dried grasses. A sculptural piece even when empty.',
    details: [
      'One-of-a-kind organic form',
      'Watertight for fresh or dried stems',
      'Reactive glaze varies piece to piece',
    ],
    featured: true,
  },
  {
    slug: 'campo-linen-throw',
    name: 'Campo Linen Throw',
    tagline: 'Handwoven, stone-washed linen',
    price: 128,
    category: 'Textiles',
    image: '/images/product-textile.png',
    materials: '100% European flax linen',
    dimensions: '130 × 170 cm',
    description:
      'Handwoven on a traditional loom and stone-washed for a lived-in softness. Subtle natural stripes in oatmeal and clay, finished with a hand-knotted fringe.',
    details: [
      'Handwoven from European flax',
      'Stone-washed for softness',
      'Gets better with every wash',
    ],
    featured: true,
  },
  {
    slug: 'nogal-serving-spoons',
    name: 'Nogal Serving Spoons',
    tagline: 'Hand-carved walnut, set of two',
    price: 46,
    category: 'Kitchen',
    image: '/images/product-spoon.png',
    materials: 'Solid walnut, food-safe oil finish',
    dimensions: '30 cm long · set of 2',
    description:
      'Carved from a single piece of walnut and finished with food-safe oil. The grain runs differently through every spoon, a small signature of the tree it came from.',
    details: [
      'Hand-carved from solid walnut',
      'Finished with food-safe oil',
      'Hand wash and re-oil to care',
    ],
  },
  {
    slug: 'rosa-soap-duo',
    name: 'Rosa Soap Duo',
    tagline: 'Cold-pressed with rose clay',
    price: 24,
    category: 'Bath',
    image: '/images/product-soap.png',
    materials: 'Olive oil, shea butter, rose clay',
    dimensions: '2 × 110 g bars',
    description:
      'Cold-pressed and cured for six weeks, these gentle bars are coloured naturally with rose clay and wrapped in unbleached paper. A soft, grounding scent of geranium and cedar.',
    details: [
      'Cold-process, cured six weeks',
      'Naturally coloured with rose clay',
      'Plastic-free packaging',
    ],
  },
  {
    slug: 'tierra-serving-bowl',
    name: 'Tierra Serving Bowl',
    tagline: 'Reactive glaze, generous form',
    price: 68,
    category: 'Ceramics',
    image: '/images/product-bowl.png',
    materials: 'Stoneware clay, reactive glaze',
    dimensions: '24 cm diameter',
    description:
      'A generous stoneware bowl with a reactive glaze that pools cream and soft brown at the edges. Made for shared meals and the centre of the table.',
    details: [
      'Wheel-thrown stoneware',
      'Food-safe reactive glaze',
      'Dishwasher safe',
    ],
    featured: true,
  },
]

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug)
}

export const categories = ['All', 'Ceramics', 'Textiles', 'Home', 'Kitchen', 'Bath']

export function formatPrice(value: number) {
  return `$${value.toFixed(0)}`
}
