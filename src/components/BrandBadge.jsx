import logo from '../assets/images/doubleapple.png'

export default function BrandBadge() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 pt-14 lg:px-10">
      <div className="flex justify-center">
        <span className="flex h-[54px] w-fit shrink-0 items-center overflow-hidden rounded-[3px] bg-white px-[14px] shadow-sm">
          <img src={logo} alt="Double Apple" className="h-[38px] w-auto object-contain" />
        </span>
      </div>
    </section>
  )
}
