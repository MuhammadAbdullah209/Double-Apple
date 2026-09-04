import storeInterior from '../assets/images/store-interior.jpg'

export default function AboutUs() {
  return (
    <section id="about" className="mx-auto max-w-[1280px] border-t border-black/10 px-5 py-16 lg:px-10">
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-extrabold leading-snug text-[#5f8c3e] sm:text-3xl">
            Double Apple &ndash; Your #1 Smoke Shop in Austin, TX Since 2018
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#1a1a17] sm:text-base">
            Double Apple is a trusted smoke shop in Austin, TX. We opened our doors in 2018.
            You&rsquo;ll find us at 11220 N Lamar Blvd B202, Austin, TX 78753.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#1a1a17] sm:text-base">
            We sell vapes, THCA, hookah, kratom, and CBD. Thousands of customers across
            Austin and Central Texas shop with us every day. They choose Double Apple for three
            reasons: a large selection, low prices, and a friendly team.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#1a1a17] sm:text-base">
            Searching for a smoke shop near you Austin or a vape shop in Austin, TX? Double
            Apple is your answer. We keep one of the largest product ranges in the city under
            one roof:
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[#1a1a17] sm:text-base">
            <li>Disposable vapes and THC vapes</li>
            <li>THCA flower and pre-rolls</li>
            <li>Hookah and shisha</li>
            <li>Kratom and CBD gummies</li>
            <li>THC drinks</li>
            <li>Glass pipes, hand pipes, and grinders</li>
            <li>Rolling papers, e-hookah, refill pods, and accessories</li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-[#1a1a17] sm:text-base">
            Our team knows these products well. We help you find the right product at the right
            price. Stop by today and see why locals call us the best smoke shop in Austin.
          </p>
        </div>
        <img
          src={storeInterior}
          alt="Double Apple store interior shelves"
          className="aspect-[3/4] w-full rounded-2xl object-cover"
        />
      </div>
    </section>
  )
}
