import PaymentIcons from './PaymentIcons'

const DISCLAIMERS = [
  {
    title: 'FDA Disclaimer',
    body: 'The statements made regarding these products have not been evaluated by the Food and Drug Administration. The efficacy of these products has not been confirmed by FDA-approved research. These products are not intended to diagnose, treat, cure, or prevent any disease. All information presented here is not meant as a substitute for or alternative to information from health care practitioners. Please consult your health care professional about potential interactions or other possible complications before using any product. The Federal Food, Drug and Cosmetic Act require this notice.',
  },
  {
    title: 'THC-A Disclaimer',
    body: 'All products contain less than 0.3% hemp derived Delta 9 THC in compliance with the 2018 Farm Bill. This product is not available for shipment to the following states: Arkansas, Hawaii, Idaho, Kansas, Louisiana, Oklahoma, Oregon, Rhode Island, Utah, Vermont.',
  },
  {
    title: 'Delta-8 Disclaimer',
    body: 'This product is not available for shipment to the following states: Alaska, Arizona, California, Colorado, Connecticut, Delaware, Hawaii, Idaho, Iowa, Massachusetts, Michigan, Minnesota, Mississippi, Montana, Nevada, New Hampshire, New York, North Dakota, Oregon, Rhode Island, Utah, Vermont, Washington, West Virginia.',
  },
  {
    title: 'CBD/Hemp Disclaimer',
    body: 'All CBD/Hemp products must be compliant with the 2018 Farm Bill. Hemp is defined under the 2018 Farm Bill to include any cannabis plant, or derivative thereof, that contains not more than 0.3% Delta-9 content. Note: in the states of Idaho, New Hampshire, and South Dakota – zero (0%) Delta-9 content is allowable by law. Products with any amount of Delta-9 content must not be shipped to these states.',
  },
  {
    title: 'Kratom Disclaimer',
    body: 'This product is not available for shipment to the following states: Alabama, Arkansas, Indiana, Rhode Island, Wisconsin.',
    extra:
      'Or the following counties / municipalities: Sarasota County (Florida), San Diego (California), Oceanside (California), Alton (Illinois), Jerseyville (Illinois), Edwardsville County (Illinois), Columbus (Mississippi), Union County (Mississippi), Ascension (Louisiana), Franklin (Louisiana), Rapides (Louisiana).',
  },
  {
    title: 'Amanita Muscaria Disclaimer',
    body: 'Amanita Muscaria is deemed illegal in the state of Louisiana. Products containing Amanita Muscaria must not be shipped to the state of Louisiana.',
  },
]

export default function FooterDisclaimers() {
  return (
    <div className="border-t border-white/10 bg-[#111310] px-5 py-10 lg:px-10">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6">
        {DISCLAIMERS.map((d) => (
          <div key={d.title} className="text-center">
            <p className="text-xs font-bold uppercase tracking-wide text-[#3CA43C]">{d.title}</p>
            <p className="mx-auto mt-2 max-w-4xl text-[11px] leading-relaxed text-white/45">{d.body}</p>
            {d.extra && (
              <p className="mx-auto mt-1 max-w-4xl text-[11px] leading-relaxed text-white/45">{d.extra}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mx-auto mt-8 flex max-w-[1280px] flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
        <p className="text-xs text-white/40">
          Copyright &copy; 2026 Double Apple Smoke and Vape. All rights reserved.
        </p>
        <PaymentIcons mono />
      </div>
    </div>
  )
}
