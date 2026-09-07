import heroBg from '../assets/images/bannerimg.jpeg'

export default function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[380px] items-center justify-center overflow-hidden sm:min-h-[440px]"
      style={{ backgroundColor: '#0d0d15' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
    </section>
  )
}