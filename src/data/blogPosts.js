import shopShelves from '../assets/images/shop-shelves.jpg'
import vapePens from '../assets/images/vape-pens.jpg'
import kratomBox from '../assets/images/kratom-box.jpg'
import storeInterior from '../assets/images/store-interior.jpg'
import heroBanner from '../assets/images/hero-banner.jpg'
import newsletterBg from '../assets/images/newsletter-bg.jpg'

export function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export const BLOG_POSTS = [
  {
    image: shopShelves,
    title: 'Kick Back With The Best Shisha In Austin At Double Apple Smoke Shop',
    excerpt:
      "If you're looking for great shisha in Austin, Double Apple Smoke Shop is a fantastic place to start. Whether you're a first-timer or a regular, our team can point you...",
    date: '2024-09-23',
    comments: 0,
    author: 'Double Apple Team',
    tag: 'Shisha in Austin',
    sections: [
      {
        paragraphs: [
          "If you're looking for great shisha in Austin, Double Apple Smoke Shop is a fantastic place to start. Whether you're a first-timer or a regular, our team can point you toward flavors and gear you'll actually enjoy — no guesswork required.",
        ],
      },
      {
        heading: 'What Is Shisha?',
        paragraphs: [
          'Shisha is flavored tobacco smoked through a hookah, where the smoke passes through water for a smoother, cooler draw than a cigarette. It\'s a social ritual as much as anything — passing the hose, catching up with friends, and working through a bowl at your own pace.',
          "At Double Apple, we stock shisha from trusted names so you know exactly what you're getting. If you're new to it, think of a hookah session as a low-key way to slow down for an hour or two.",
        ],
      },
      {
        heading: 'A Relaxing Way To Unwind',
        paragraphs: [
          "There's something genuinely calming about a hookah session — on our patio-adjacent seating or at home with friends, it's an easy way to decompress after a long day.",
          'Keep in mind shisha does contain nicotine, so pace yourself. We also carry herbal, nicotine-free blends that deliver the same flavor if you\'d rather skip it entirely — just ask our team.',
        ],
      },
      {
        heading: 'Flavors For Every Taste',
        paragraphs: [
          'Double Apple — our namesake flavor — is the classic starting point: rich, sweet, and smooth. Beyond that, our mint blends run crisp and refreshing, and we carry mango, coconut, and dessert-style flavors for anyone who wants something different.',
          'We rotate seasonal options regularly and carry well-known brands like Al Fakher, Starbuzz, Fumari, Tangiers, and Adalya. Not sure where to start? Tell us what you usually enjoy and we\'ll point you in the right direction.',
        ],
      },
      {
        heading: 'Why Customers Choose Double Apple',
        paragraphs: [
          "We're open from 8:00 AM until midnight, seven days a week — one of the few shops in Austin with hours that long. That means you can swing by whenever it works for you, not just during a narrow window.",
          "We're locally owned, we price-match where we can, and our team actually knows the products. If you have questions about strength, flavor pairing, or gear, we're glad to walk you through it.",
        ],
      },
      {
        heading: 'New To Shisha? Start Here',
        paragraphs: [
          "Getting started is easy — pick a flavor that sounds appealing (double apple or mint are safe first picks), and let us know if you'd rather go nicotine-free. There's no wrong way to try it for the first time.",
        ],
      },
      {
        heading: 'Hosting A Great Shisha Night',
        paragraphs: [
          "Hosting at home? Fill the base with fresh water, pack the bowl loosely so air can flow, and rotate your coals every fifteen minutes or so for an even burn. On hot Texas nights, adding ice to the base makes for a cooler draw.",
          "We carry complete hookah kits with everything you need to get started, plus replacement hoses, bowls, and coals whenever you need a refresh.",
        ],
      },
      {
        heading: 'Stop By Double Apple',
        paragraphs: [
          "Whether you're after something minty and fresh or a bolder fruit blend, Double Apple Smoke Shop is your Austin destination for shisha. Come in, pick a flavor, and let our team help you put together a great session.",
          'We\'re located at 11220 N Lamar Blvd B202, Austin, TX 78753 — open 8:00 AM to midnight, every day.',
        ],
      },
    ],
  },
  {
    image: vapePens,
    title: 'Why Double Apple Smoke Shop Is The Best Vape Shop In Austin',
    excerpt:
      'Looking for a smoke shop in Austin that actually has what you need? Double Apple has been the go-to spot for disposables, pod systems, and refill pods for years...',
    date: '2024-09-18',
    comments: 2,
    author: 'Double Apple Team',
    tag: 'Vapes in Austin',
    sections: [
      {
        paragraphs: [
          'Looking for a smoke shop in Austin that actually has what you need? Double Apple has been the go-to spot for disposables, pod systems, and refill pods for years, and new flavors land on our shelves every week.',
        ],
      },
      {
        heading: 'A Selection That Keeps Up With What\'s New',
        paragraphs: [
          "We stock the disposables and pod systems people are actually asking for — Elf Bar, Lost Mary, Geek Bar, and more — alongside the refill pods and coils to keep your existing setup running.",
          'If a flavor sells out, we restock fast. If you\'re after something specific, ask our team before you make the drive — we\'re happy to check.',
        ],
      },
      {
        heading: 'Straightforward, Friendly Service',
        paragraphs: [
          'Whether you\'re picking your first disposable or restocking pods you already like, our staff will point you toward what actually fits — no upselling, just honest recommendations.',
        ],
      },
    ],
  },
  {
    image: kratomBox,
    title: 'Discover Quality Kratom In Austin At Double Apple',
    excerpt:
      'From Maeng Da to Red Vein, our kratom selection is lab-tested and always in stock. Here is what to know before you pick your first strain at Double Apple...',
    date: '2024-09-10',
    comments: 1,
    author: 'Double Apple Team',
    tag: 'Kratom in Austin',
    sections: [
      {
        paragraphs: [
          'From Maeng Da to Red Vein, our kratom selection is lab-tested and always in stock. Here\'s what to know before you pick your first strain at Double Apple.',
        ],
      },
      {
        heading: 'Trusted Brands, Lab-Tested Products',
        paragraphs: [
          'We carry kratom capsules, powders, extracts, and shots from OPMS Gold, OPMS Silver, Hush, MIT45, Krave, Whole Herbs, and other established brands — nothing on our shelves is a mystery product.',
        ],
      },
      {
        heading: 'New To Kratom? Ask Our Team',
        paragraphs: [
          "Strains vary quite a bit, and what works for one person won't necessarily suit another. Our staff can walk first-time customers through the differences and help you find a reasonable starting point.",
        ],
      },
    ],
  },
  {
    image: storeInterior,
    title: 'Discover The Best Vape Pens In Austin By Double Apple',
    excerpt:
      'When it comes to vaping, quality products and reliable service make all the difference, and that is exactly why so many Austin shoppers choose Double Apple...',
    date: '2024-09-03',
    comments: 0,
    author: 'Double Apple Team',
    tag: 'Vape Pens in Austin',
    sections: [
      {
        paragraphs: [
          'When it comes to vaping, quality products and reliable service make all the difference, and that\'s exactly why so many Austin shoppers choose Double Apple.',
        ],
      },
      {
        heading: 'Built To Last, Priced Fairly',
        paragraphs: [
          "We carry vape pens across a range of price points, all from brands we're comfortable standing behind. If something isn't performing the way it should, our team will help you sort it out.",
        ],
      },
    ],
  },
  {
    image: heroBanner,
    title: 'Best Refill Pods In Austin From Double Apple Smoke Shop',
    excerpt:
      'Double Apple Smoke Shop in Austin offers premium refill pods from trusted brands, smooth hits, and long-lasting sessions. Here are our current customer favorites...',
    date: '2024-08-27',
    comments: 3,
    author: 'Double Apple Team',
    tag: 'Refill Pods in Austin',
    sections: [
      {
        paragraphs: [
          'Double Apple Smoke Shop in Austin offers premium refill pods from trusted brands, smooth hits, and long-lasting sessions. Here are a few current customer favorites.',
        ],
      },
      {
        heading: 'What Our Customers Keep Coming Back For',
        paragraphs: [
          'Lost Mary and Foger pods are consistently popular for their flavor variety and reliable draw. We keep both in stock across multiple flavor lines so you\'re not stuck picking from whatever\'s left.',
        ],
      },
    ],
  },
  {
    image: newsletterBg,
    title: 'Elevate Your Smoking Experience With Double Apple Smoke Shop',
    excerpt:
      'Looking for a place to browse high-quality glass, vape gear, and accessories that make every session better? Double Apple Smoke Shop has you covered...',
    date: '2024-08-20',
    comments: 1,
    author: 'Double Apple Team',
    tag: 'Smoke Shop in Austin',
    sections: [
      {
        paragraphs: [
          'Looking for a place to browse high-quality glass, vape gear, and accessories that make every session better? Double Apple Smoke Shop has you covered.',
        ],
      },
      {
        heading: 'Quality Glass, Curated Carefully',
        paragraphs: [
          "From beginner-friendly hand pipes to heady collector pieces, we carry glass at a range of price points. Stop in and see what's on the shelf — inventory turns over often.",
        ],
      },
    ],
  },
]

export function getPostBySlug(slug) {
  return BLOG_POSTS.find((p) => slugify(p.title) === slug)
}
