import { useEffect, useState } from 'react'
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
import { getProducts } from '../api/products'
import { getImageForCategory } from '../data/productImages'

function withDisplayFields(product) {
  return {
    ...product,
    image: getImageForCategory(product.category),
    price: product.finalPrice ?? product.price,
    soldOut: (product.stock ?? 0) <= 0,
  }
}

export default function Home() {
  const [kratomProducts, setKratomProducts] = useState([])
  const [refillPodProducts, setRefillPodProducts] = useState([])

  useEffect(() => {
    let cancelled = false
    getProducts({ category: 'Kratom', limit: 6 })
      .then((data) => {
        if (!cancelled) setKratomProducts((data.products || []).map(withDisplayFields))
      })
      .catch(() => {})
    getProducts({ category: 'Refill Pods', limit: 6 })
      .then((data) => {
        if (!cancelled) setRefillPodProducts((data.products || []).map(withDisplayFields))
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <>
      <Hero />
      <Collections />
      {kratomProducts.length > 0 && (
        <ProductSection id="kratom" title="Kratom" products={kratomProducts} />
      )}
      {refillPodProducts.length > 0 && (
        <ProductSection id="refill-pods" title="Refill pods" products={refillPodProducts} />
      )}
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
