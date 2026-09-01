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
        </div>
        <img
          src={storeInterior}
          alt="Double Apple store interior shelves"
          className="aspect-[4/3] w-full rounded-2xl object-cover"
        />
      </div>
    </section>
  )
}
