import { Link } from 'react-router-dom'
import shopShelves from '../assets/images/shop-shelves.jpg'
import VisitUs from '../components/VisitUs'

export default function AboutUs() {
  return (
    <>
      <section
        className="relative isolate flex min-h-[280px] items-center justify-center overflow-hidden sm:min-h-[340px]"
        style={{ backgroundColor: '#0d0d15' }}
      >
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${shopShelves})` }}
        />
        <div className="absolute inset-0 -z-10" style={{ backgroundColor: 'rgba(10, 8, 22, 0.55)' }} />

        <Link
          to="/shop"
          className="rounded-full bg-white px-7 py-3 text-xs font-bold uppercase tracking-wide text-[#1a1a17] shadow-lg transition hover:bg-[#f2f1ec]"
        >
          Shop Now
        </Link>
      </section>

      <section className="mx-auto max-w-[720px] px-5 py-16 text-center lg:px-10">
        <h1 className="text-3xl font-bold text-[#1a1a17] sm:text-4xl">About Us</h1>
        <p className="mt-5 text-sm leading-relaxed text-[#4a4a43] sm:text-base">
          Welcome to Double Apple Smoke &amp; Vape! We are dedicated to providing Austin and
          Central Texas with a diverse selection of smoke and vape products, top-notch customer
          service, and a unique shopping experience.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-[#4a4a43] sm:text-base">
          We pride ourselves on offering a wide range of products, including vapes, kratom,
          refill pods, and more. Our mission is to cater to the needs of our customers by
          providing customized care and high-quality products.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-[#4a4a43] sm:text-base">
          Whether you&rsquo;re a seasoned user or new to the smoke and vape world, our
          knowledgeable team is here to guide you. Thank you for choosing Double Apple Smoke
          &amp; Vape for a higher standard in smoke shop shopping.
        </p>
      </section>

      <VisitUs />
    </>
  )
}
