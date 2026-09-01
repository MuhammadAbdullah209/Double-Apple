import heroBg from '../assets/images/hero-banner.jpg'
import { ArrowRightIcon } from './Icons'

export default function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[320px] items-center justify-center overflow-hidden px-5 py-12 text-center sm:min-h-[360px]"
      style={{ backgroundColor: '#0d0d15' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Dark overlay — matches the deep navy/black tint in the screenshot */}
      <div className="absolute inset-0 -z-10" style={{ backgroundColor: 'rgba(10, 8, 22, 0.60)' }} />

      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-[640px] flex-col items-center">
        {/* Brand name — small, tracked, bold, all-caps */}
        <p
          className="mb-0.5 text-[13px] font-extrabold uppercase tracking-[0.18em] text-white"
          style={{ letterSpacing: '0.18em' }}
        >
          Lost Mary Geek Bar
        </p>

        {/* Headline — large, bold, tight leading */}
        <h1
          className="mt-0 max-w-[500px] text-[1.6rem] font-extrabold leading-[1.15] text-white sm:text-[2rem]"
          style={{ lineHeight: 1.15 }}
        >
          Sheesha disposable pods E&#8209;Hookah vape
        </h1>

        {/* Subheading — two lines, muted white, small */}
        <p
          className="mt-1.5 max-w-[420px] text-[12px] leading-snug sm:text-[13px]"
          style={{ color: 'rgba(255,255,255,0.78)' }}
        >
          A curated menu, a knowledgeable crew, and a laid-back lounge.
          <br />
          Your search for a better cannabis experience ends here.
        </p>

        {/* CTA buttons */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
          {/* Primary — green */}
          <a
            href="#collections"
            className="flex items-center gap-2  px-5 py-[8px] text-[12.5px] font-semibold text-black"
            style={{ backgroundColor: '#3CA43C' }}
          >
            Shop the Menu
            <ArrowRightIcon className="h-[15px] w-[15px]" />
          </a>

          {/* Secondary — outlined */}
          <a
            href="#about"
            className="flex items-center gap-2  px-5 py-[8px] text-[12.5px] font-semibold text-black "
            style={{
              backgroundColor: '#FFFFFF',
              border: '1.5px solid rgba(255,255,255,0.72)',

            }}
          >
            Learn Our Story
            <ArrowRightIcon className="h-[15px] w-[15px]" />
          </a>
        </div>
      </div>
    </section>
  )
}