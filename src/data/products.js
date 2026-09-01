import kratomBox from '../assets/images/kratom-box.jpg'
import vapePens from '../assets/images/vape-pens.jpg'

export const KRATOM_PRODUCTS = [
  { name: 'OPMS Black Shots', price: '14.99', image: kratomBox, category: 'Kratom' },
  { name: 'OPMS Shots Red 50/Pk', price: '14.99', image: kratomBox, category: 'Kratom' },
  { name: 'OPMS Liquid Kratom Gold', price: '14.99', image: kratomBox, category: 'Kratom' },
  {
    name: '7Tabz 7OH 15mg Tabs 4/Pk Tropical',
    price: '24.99',
    image: kratomBox,
    category: 'Kratom',
    soldOut: true,
  },
  {
    name: "Kream Black Edition Kratom Extract 200mg 4Tab/Pk | Mango",
    price: '65.99',
    image: kratomBox,
    category: 'Kratom',
  },
  {
    name: "Half Bak'd Root'd Kratom 200mg Tabs 4/Pk Fresh Mint",
    price: '24.99',
    image: kratomBox,
    category: 'Kratom',
  },
]

export const REFILL_POD_PRODUCTS = [
  {
    name: 'Lost Mary Nera Pod 70K 2ct/Pk | Sour Apple Ice',
    price: '19.99',
    image: vapePens,
    category: 'Refill Pods',
  },
  {
    name: 'Lost Mary Nera Pod 70K 2ct/Pk | Pink Lemonade',
    price: '19.99',
    image: vapePens,
    category: 'Refill Pods',
  },
  {
    name: 'Lost Mary Nera Pod 70K 2ct/Pk | Watermelon Ice',
    price: '19.99',
    image: vapePens,
    category: 'Refill Pods',
    soldOut: true,
  },
  {
    name: 'Fogger Promax Pod 50K 5ct | Skittles Cupcake',
    price: '18.99',
    image: vapePens,
    category: 'Refill Pods',
  },
  {
    name: 'Fogger Promax Pod 50K 5ct | Watermelon Bubblegum',
    price: '18.99',
    image: vapePens,
    category: 'Refill Pods',
  },
  {
    name: 'Foger 30K Refill Pod Coffee',
    price: '18.99',
    image: vapePens,
    category: 'Refill Pods',
    soldOut: true,
  },
]

export const ALL_PRODUCTS = [...KRATOM_PRODUCTS, ...REFILL_POD_PRODUCTS]

export function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function findProductBySlug(slug) {
  return ALL_PRODUCTS.find((p) => slugify(p.name) === slug)
}
