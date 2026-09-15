import heroBg from '../assets/images/bannerimg.jpeg'

export default function Hero() {
  return (
    <section
      className="relative isolate flex aspect-[2738/1133] w-full items-center justify-center overflow-hidden sm:aspect-auto sm:min-h-[440px]"
      style={{ backgroundColor: '#0d0d15' }}
    >
      {/* Background image — the section matches the image's own aspect ratio
          below sm (bannerimg.jpeg is a wide 2738x1133 banner with the logo
          and tagline baked in), so bg-cover fits it exactly instead of
          zooming in and cropping the text off the sides on narrow screens. */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
    </section>
  )
}