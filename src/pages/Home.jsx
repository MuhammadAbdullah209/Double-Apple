import Hero from '../components/Hero'
import Collections from '../components/Collections'
import ProductSection from '../components/ProductSection'
import AboutUs from '../components/AboutUs'
import TopShop from '../components/TopShop'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import AreasWeServe from '../components/AreasWeServe'
import FAQ from '../components/FAQ'
import { KRATOM_PRODUCTS, REFILL_POD_PRODUCTS } from '../data/products'

export default function Home() {
  return (
    <>
      <Hero />
      <Collections />
      <ProductSection id="kratom" title="Kratom" products={KRATOM_PRODUCTS} />
      <ProductSection id="refill-pods" title="Refill pods" products={REFILL_POD_PRODUCTS} />
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
