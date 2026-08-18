import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CartDrawer } from '@/components/cart-drawer'
import { Hero } from '@/components/home/hero'
import { Featured } from '@/components/home/featured'
import { Story } from '@/components/home/story'
import { Values } from '@/components/home/values'
import { StudioBanner } from '@/components/home/studio-banner'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Featured />
        <Story />
        <StudioBanner />
        <Values />
      </main>
      <SiteFooter />
      <CartDrawer />
    </>
  )
}
