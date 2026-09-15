// The site's own category labels (used in the UI, in URLs, and as the
// checkbox/state values) vs. the real category names Lightspeed uses on the
// synced catalogue — pulled from the account's full 93-category list, not
// just casing but sometimes different wording entirely (e.g. "Shisha" here
// vs. "SHISHA AND COAL" on Lightspeed). The backend's category filter is an
// exact single-value match, so every getProducts({ category }) call and the
// client-side re-filter after it must go through CATEGORY_REAL_NAME rather
// than sending/comparing the UI label directly — otherwise POS-synced
// products (which use the real Lightspeed names) never match.
export const CATEGORY_ORDER = [
  'Flower',
  'Vapes',
  'Kratom',
  'Refill Pods',
  'Ash Catcher',
  'Shisha',
  'Disposable Hookah',
  'Hookah Pot',
  'Coils / Pods',
]

export const CATEGORY_REAL_NAME = {
  Flower: 'FLOWER',
  Vapes: 'VAPES',
  Kratom: 'KRATOM',
  'Refill Pods': 'Refill pods',
  'Ash Catcher': 'ASH CATCHER',
  Shisha: 'SHISHA AND COAL',
  'Disposable Hookah': 'DISPOSABLE HOOKAH',
  'Hookah Pot': 'HOOKAH POT',
  'Coils / Pods': 'COIL',
}

// Shop page's "{title} – {subtitle}" heading plus a few keyword-rich
// paragraphs, keyed by the same UI labels as CATEGORY_ORDER above — swaps in
// for the default copy whenever exactly one category is selected (see
// Shop.jsx). `description` entries are static HTML we wrote ourselves (safe
// to render with dangerouslySetInnerHTML) so a couple of phrases per category
// can be bolded inline.
export const CATEGORY_PAGE_COPY = {
  Flower: {
    title: 'Flower Shop Austin',
    subtitle: 'Premium THCA Flower & Pre-Rolls',
    description: [
      'Shop premium <strong>THCA flower and pre-rolls</strong> at Double Apple, your trusted <strong>flower shop in Austin, TX</strong>. Every batch is lab-tested and compliant with the 2018 Farm Bill.',
      'Browse hand-trimmed buds and ready-to-smoke pre-rolls across a rotating lineup of strains, from uplifting sativas to relaxing indicas.',
      'We keep our shelves stocked with fresh drops, so you always have access to the latest strains and best-selling flower at competitive prices.',
      'Visit Double Apple at 11220 N Lamar Blvd B202 in Austin or order online for fast local pickup. Searching for the best <strong>THCA flower near me</strong> or <strong>pre-rolls in Austin</strong>? We&rsquo;re here to help you find the perfect match.',
    ],
  },
  Vapes: {
    title: 'Vape Shop Austin',
    subtitle: 'Disposable Vapes, Mods & E-Juice',
    description: [
      'Shop premium <strong>vapes and mods</strong> at Double Apple, your trusted <strong>vape shop in Austin, TX</strong>. We carry a carefully selected range of disposable vapes, pod systems, and e-juice for both new and experienced vapers.',
      'Explore leading brands like <strong>Geek Bar, Lost Mary, Elf Bar,</strong> and <strong>Off Stamp</strong>. From smooth nicotine salts to bold flavor profiles, there&rsquo;s something for every taste.',
      'We keep our shelves stocked with fresh arrivals, giving you access to the latest vape hardware and best-selling disposables at competitive prices.',
      'Visit Double Apple at 11220 N Lamar Blvd B202 in Austin or order online for fast local pickup. Searching for the best <strong>vape shop in Austin</strong>, <strong>disposable vapes near me</strong>, or premium <strong>e-juice</strong>? We&rsquo;re here to help you find the perfect match.',
    ],
  },
  Kratom: {
    title: 'Kratom Shop Austin',
    subtitle: 'Kratom Extracts & Wellness Products',
    description: [
      'Find trusted <strong>kratom extracts</strong> at Double Apple, your <strong>kratom shop in Austin, TX</strong>. We carry a curated selection across every strain to fit your routine.',
      'Shop <strong>Maeng Da, Red Vein, Green Vein,</strong> and <strong>White Vein</strong> kratom, alongside other wellness essentials our staff can help you choose between.',
      'Shelves are restocked often so you always have access to fresh, quality product at fair prices.',
      'Stop by our Austin location on N Lamar Blvd or order online for local pickup. Looking for the best <strong>kratom shop in Austin</strong> or <strong>kratom near me</strong>? We&rsquo;ve got you covered.',
    ],
  },
  'Refill Pods': {
    title: 'Refill Pods Shop Austin',
    subtitle: 'Pod Systems & Replacement Cartridges',
    description: [
      'Shop <strong>refill pods and cartridges</strong> at Double Apple, your <strong>smoke shop in Austin, TX</strong> for every pod system on the market.',
      'We stock replacement pods and cartridges compatible with the top devices, so keeping your setup running is quick and easy.',
      'New flavors and formats arrive regularly, with our best-selling pods always kept in stock.',
      'Visit us at 11220 N Lamar Blvd B202 in Austin or order online for local pickup. Looking for <strong>refill pods near me</strong>? We&rsquo;re here to help.',
    ],
  },
  'Ash Catcher': {
    title: 'Ash Catcher Shop Austin',
    subtitle: 'Glass Ash Catchers & Bong Accessories',
    description: [
      'Browse our lineup of <strong>ash catchers and bong accessories</strong> at Double Apple, a trusted <strong>smoke shop in Austin, TX</strong>.',
      'From simple straight-tube designs to intricate percolators, we carry glass built to keep your setup cleaner and smoother.',
      'New glass arrives regularly, so you&rsquo;ll always find fresh pieces alongside our best-selling staples.',
      'Stop by our Austin location or shop online for local pickup. Searching for <strong>ash catchers near me</strong> or quality <strong>glass accessories</strong>? We&rsquo;ve got you covered.',
    ],
  },
  Shisha: {
    title: 'Shisha Shop Austin',
    subtitle: 'Premium Hookah Tobacco & Charcoal',
    description: [
      'Enjoy a better hookah experience with premium <strong>shisha tobacco and charcoal</strong> from Double Apple, your trusted <strong>shisha shop in Austin, TX</strong>.',
      'From fruity and cool mint to rich dessert and bold exotic flavors, our shisha selection covers every taste, plus the coal to keep your session going.',
      'We keep our shelves stocked with fresh arrivals, giving you access to the latest shisha flavors and best-selling hookah gear at competitive prices.',
      'Visit Double Apple at 11220 N Lamar Blvd B202 in Austin or order online for fast local pickup. Searching for the best <strong>shisha shop in Austin</strong> or <strong>hookah tobacco near me</strong>? We&rsquo;re here to help you find the perfect match.',
    ],
  },
  'Disposable Hookah': {
    title: 'Disposable Hookah Shop Austin',
    subtitle: 'Ready-to-Use Hookah Pens',
    description: [
      'Shop <strong>disposable hookahs</strong> at Double Apple, your <strong>smoke shop in Austin, TX</strong> for a ready-to-go hookah session with no setup required.',
      'We carry a rotating lineup of flavors and puff counts, so there&rsquo;s always something new to try alongside our best-sellers.',
      'Visit us at 11220 N Lamar Blvd B202 in Austin or order online for local pickup. Looking for <strong>disposable hookah near me</strong>? We&rsquo;ve got you covered.',
    ],
  },
  'Hookah Pot': {
    title: 'Hookah Shop Austin',
    subtitle: 'Hookah Pots, Bowls & Setups',
    description: [
      'Shop full <strong>hookah setups</strong> at Double Apple, your trusted <strong>hookah shop in Austin, TX</strong> — from starter pots to premium multi-hose rigs.',
      'We carry a range of bowls and pots built for smoother draws and longer sessions, with parts and accessories to match.',
      'New arrivals land regularly, so you&rsquo;ll always find fresh styles alongside our best-selling setups.',
      'Visit Double Apple at 11220 N Lamar Blvd B202 in Austin or order online for local pickup. Searching for the best <strong>hookah shop in Austin</strong> or <strong>hookah pots near me</strong>? We&rsquo;re here to help.',
    ],
  },
  'Coils / Pods': {
    title: 'Coils & Pods Shop Austin',
    subtitle: 'Replacement Coils for Every Device',
    description: [
      'Shop <strong>replacement coils</strong> at Double Apple, your <strong>vape shop in Austin, TX</strong> for keeping every device running smoothly.',
      'We stock coils and pods across the most popular systems, so swapping out a worn coil for a fresh one is quick and simple.',
      'New stock arrives regularly, with our best-selling resistances and pod types always on hand.',
      'Visit us at 11220 N Lamar Blvd B202 in Austin or order online for local pickup. Looking for <strong>replacement coils near me</strong>? We&rsquo;re here to help.',
    ],
  },
}

export const DEFAULT_SHOP_PAGE_COPY = {
  title: 'Smoke Shop Austin',
  subtitle: 'Vapes, THCA, Hookah & Kratom',
  description: [
    'Welcome to Double Apple, Austin&rsquo;s go-to <strong>smoke shop</strong>. Browse our full catalog of vapes, THCA flower, hookah, kratom, and smoking accessories — all in one place.',
    'We carry trusted brands across every category, with new arrivals added regularly and fresh stock on our best-sellers.',
    'Visit us at 11220 N Lamar Blvd B202, Austin, TX 78753, or shop online for fast local pickup. Searching for the best <strong>smoke shop near me</strong>? You&rsquo;ve found it.',
  ],
}
