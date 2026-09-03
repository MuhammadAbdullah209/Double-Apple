import { PinIcon } from './Icons'

const GROUPS = [
  {
    title: 'Central & North Austin',
    areas: [
      'North Lamar',
      'The Domain',
      'North Burnet',
      'Allandale',
      'Crestview',
      'Hyde Park',
      'Brentwood',
      'Georgian Acres',
      'Walnut Creek',
      'Tech Ridge',
    ],
  },
  {
    title: 'North & Northwest',
    areas: ['Round Rock', 'Pflugerville', 'Cedar Park', 'Leander', 'Wells Branch', 'Jollyville', 'Brushy Creek'],
  },
]

export default function AreasWeServeCards() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-16 lg:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-extrabold uppercase tracking-wide text-[#1a1a17] sm:text-3xl">
          Areas We Serve
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[#5c5b53] sm:text-base">
          Proudly serving the greater Austin area with premium smoke shop products and
          exceptional service.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {GROUPS.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-7"
          >
            <p className="text-sm font-extrabold uppercase tracking-wide text-[#1a1a17]">
              {group.title}
            </p>
            <span className="mt-2 block h-0.5 w-9 bg-[#3CA43C]" />

            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {group.areas.map((area) => (
                <span
                  key={area}
                  className="flex items-center justify-center gap-1.5 rounded-full border border-[#3CA43C]/30 bg-[#eef4e9] px-3 py-1.5 text-xs font-semibold text-[#3c6e35]"
                >
                  <PinIcon className="h-3 w-3 shrink-0 text-[#3CA43C]" />
                  {area}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
