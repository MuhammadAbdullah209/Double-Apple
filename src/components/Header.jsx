import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "../assets/images/doubleapple.png";
import ShopMegaMenu from "./ShopMegaMenu";

const NAV = [
  { label: "Home", href: "/", active: true },
  { label: "About Us", href: "#about" },
  { label: "Shop", href: "/shop", dropdown: true },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
];

/* ================================
   SEARCH ICON
================================ */

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[17px] w-[17px]"
    >
      <circle
        cx="11"
        cy="11"
        r="6.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M16 16L21 21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ================================
   USER ICON
================================ */

function UserIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[17px] w-[17px]"
    >
      <circle
        cx="12"
        cy="8"
        r="3.2"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M5.5 20C6.2 15.9 8.4 14 12 14C15.6 14 17.8 15.9 18.5 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ================================
   CART ICON
================================ */

function CartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[17px] w-[17px]"
    >
      <path
        d="M3 4H5L7.2 15.2C7.4 16.2 8.3 17 9.4 17H17.5C18.5 17 19.3 16.4 19.6 15.5L21 9H6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx="9.5"
        cy="20"
        r="1.2"
        fill="currentColor"
      />

      <circle
        cx="17.5"
        cy="20"
        r="1.2"
        fill="currentColor"
      />
    </svg>
  );
}

/* ================================
   CHEVRON
================================ */

function ChevronDownIcon({ className = "h-[8px] w-[8px]" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ================================
   LOGO
================================ */

function Logo() {
  return (
    <Link
      to="/"
      className="
        flex
        h-[48px]
        w-fit
        shrink-0
        items-center
        overflow-hidden
        rounded-[2px]
        bg-white
        px-[10px]
      "
    >
      <img
        src={logo}
        alt="Double Apple"
        className="h-[38px] w-auto object-contain"
      />
    </Link>
  );
}

/* ================================
   HEADER
================================ */

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopMenuOpen, setShopMenuOpen] = useState(false);
  const { count: cartCount, openCart } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050509]">

      {/* =================================
          MAIN HEADER
      ================================= */}

      <div
        className="
          mx-auto
          flex
          h-[64px]
          w-full
          max-w-[1200px]
          items-center
          px-6
          sm:px-8
          lg:px-10
        "
      >

        {/* LOGO */}

        <Logo />


        {/* =================================
            DESKTOP NAVIGATION
        ================================= */}

        <nav
          className="
            hidden
            h-full
            flex-1
            items-center
            justify-center
            gap-10
            md:flex
          "
        >

          {NAV.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className="relative h-full"
                onMouseEnter={() => setShopMenuOpen(true)}
                onMouseLeave={() => setShopMenuOpen(false)}
              >
                <Link
                  to={item.href}
                  className={`
                    flex
                    h-full
                    items-center
                    gap-[4px]
                    whitespace-nowrap
                    font-sans
                    text-[14px]
                    font-medium
                    leading-none
                    no-underline
                    ${shopMenuOpen ? "text-[#54bd3b]" : "text-white/80"}
                  `}
                >
                  {item.label}
                  <ChevronDownIcon
                    className={`h-[8px] w-[8px] transition-transform ${
                      shopMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                {shopMenuOpen && (
                  <ShopMegaMenu onNavigate={() => setShopMenuOpen(false)} />
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={`
                  flex
                  h-full
                  items-center
                  gap-[4px]
                  whitespace-nowrap
                  font-sans
                  text-[14px]
                  font-medium
                  leading-none
                  no-underline
                  ${
                    item.active
                      ? "text-[#54bd3b]"
                      : "text-white/80"
                  }
                `}
              >
                {item.label}
              </a>
            )
          )}

        </nav>


        {/* =================================
            RIGHT SIDE
        ================================= */}

        <div
          className="
            ml-auto
            hidden
            items-center
            gap-3
            md:flex
          "
        >

          {/* SEARCH */}

          <div
            className="
              flex
              h-[30px]
              w-[230px]
              items-center
              overflow-hidden
              rounded-[3px]
              border
              border-[#dddddd]
              bg-white
            "
          >

            <input
              type="text"
              placeholder="Search..."
              className="
                min-w-0
                flex-1
                border-0
                bg-transparent
                px-3
                py-0
                font-sans
                text-[11px]
                leading-none
                text-[#333]
                outline-none
                placeholder:text-[#999]
              "
            />

            <button
              type="button"
              aria-label="Search"
              className="
                mr-[4px]
                flex
                h-[24px]
                w-[24px]
                shrink-0
                items-center
                justify-center
                border-0
                bg-transparent
                p-0
                text-[#333]
              "
            >
              <SearchIcon />
            </button>

          </div>


          {/* USER */}

          <Link
            to="/sign-in"
            aria-label="Account"
            className="
              flex
              h-[30px]
              w-[26px]
              shrink-0
              items-center
              justify-center
              border-0
              bg-transparent
              p-0
              text-white/80
            "
          >
            <UserIcon />
          </Link>


          {/* CART */}

          <button
            type="button"
            onClick={openCart}
            aria-label="Cart"
            className="
              relative
              flex
              h-[30px]
              w-[26px]
              shrink-0
              items-center
              justify-center
              border-0
              bg-transparent
              p-0
              text-white/80
            "
          >
            <CartIcon />
            {cartCount > 0 && (
              <span
                className="
                  absolute
                  -right-[3px]
                  -top-[3px]
                  grid
                  h-[15px]
                  min-w-[15px]
                  place-items-center
                  rounded-full
                  bg-[#3CA43C]
                  px-[3px]
                  text-[9px]
                  font-bold
                  leading-none
                  text-white
                "
              >
                {cartCount}
              </span>
            )}
          </button>

        </div>


        {/* =================================
            MOBILE MENU
        ================================= */}

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="
            ml-auto
            flex
            flex-col
            gap-[4px]
            border-0
            bg-transparent
            p-1
            md:hidden
          "
        >

          <span
            className={`
              block
              h-[2px]
              w-5
              bg-white
              transition-transform
              ${
                menuOpen
                  ? "translate-y-[6px] rotate-45"
                  : ""
              }
            `}
          />

          <span
            className={`
              block
              h-[2px]
              w-5
              bg-white
              transition-opacity
              ${
                menuOpen
                  ? "opacity-0"
                  : "opacity-100"
              }
            `}
          />

          <span
            className={`
              block
              h-[2px]
              w-5
              bg-white
              transition-transform
              ${
                menuOpen
                  ? "-translate-y-[6px] -rotate-45"
                  : ""
              }
            `}
          />

        </button>

      </div>


      {/* =================================
          MOBILE MENU
      ================================= */}

      {menuOpen && (
        <nav
          className="
            border-t
            border-white/10
            bg-[#050509]
            px-6
            pb-4
            pt-2
            md:hidden
          "
        >

          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`
                block
                py-2
                font-sans
                text-sm
                font-medium
                no-underline
                ${
                  item.active
                    ? "text-[#54bd3b]"
                    : "text-white/80"
                }
              `}
            >
              {item.label}
            </a>
          ))}

          <div
            className="
              mt-2
              flex
              h-9
              items-center
              overflow-hidden
              rounded-md
              bg-white
            "
          >

            <input
              type="text"
              placeholder="Search..."
              className="
                min-w-1
                flex-1
                bg-transparent
                px-4
                text-[13px]
                text-[#333]
                outline-none
                placeholder:text-[#999]
              "
            />

            <button
              type="button"
              aria-label="Search"
              className="
                mr-[3px]
                flex
                h-[30px]
                w-[30px]
                items-center
                justify-center
                rounded-full
                border-0
                bg-[#1a1a17]
                p-0
                text-white
              "
            >
              <SearchIcon />
            </button>

          </div>

        </nav>
      )}

    </header>
  );
}