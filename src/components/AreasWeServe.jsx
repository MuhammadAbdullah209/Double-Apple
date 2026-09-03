function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 text-[#3CA43C]">
      <path
        d="M19 19L5 5M5 5H15M5 5V15"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

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

export default function AreasWeServe() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-16 lg:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-[#1a1a17] sm:text-3xl">Areas We Serve</h2>
        <p className="mt-4 text-sm leading-relaxed text-[#5c5b53] sm:text-base">
          Proudly serving the greater Austin area with premium smoke shop products and
          exceptional service.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-8">
        {GROUPS.map((group) => (
          <div key={group.title} className="text-center">
            <p className="mb-4 text-base font-bold text-[#1a1a17]">{group.title}</p>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
              {group.areas.map((area, i) => (
                <div key={area} className="flex items-center gap-2">
                  {i !== 0 && <span className="text-[#c9c8c0]">|</span>}
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-sm text-[#4a4a43] transition hover:text-[#3c6e35]"
                  >
                    <ArrowIcon />
                    {area}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
