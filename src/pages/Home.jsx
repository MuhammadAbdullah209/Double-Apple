import Hero from '../components/Hero'
import Collections from '../components/Collections'
import CategoryShowcase from '../components/CategoryShowcase'
import AboutUs from '../components/AboutUs'
import TopShop from '../components/TopShop'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import AreasWeServe from '../components/AreasWeServe'
import FAQ from '../components/FAQ'

export default function Home() {
  return (
    <>
      <Hero />
      <Collections />
      <CategoryShowcase category="Kratom" />
      <CategoryShowcase category="Disposable Hookah" />
      <CategoryShowcase category="Hookah Pot" />
      <AboutUs />
      <TopShop />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
      <AreasWeServe />
      <FAQ />
    </>
  )
}
