import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useWishlist } from "../context/WishlistContext";
import logo from "../assets/images/doubleapple.png";
import ShopMegaMenu from "./ShopMegaMenu";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Shop", href: "/shop", dropdown: true },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
];

function isNavActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}



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



function HeartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[17px] w-[17px]"
    >
      <path
        d="M12 20.5s-7.5-4.6-9.8-9.2C.6 7.7 2.6 4.5 6 4.5c2 0 3.6 1.1 4.5 2.6.9-1.5 2.5-2.6 4.5-2.6 3.4 0 5.4 3.2 3.8 6.8-2.3 4.6-9.8 9.2-9.8 9.2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}



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


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopMenuOpen, setShopMenuOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { count: cartCount, openCart } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const { items: wishlistItems } = useWishlist();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setAccountMenuOpen(false);
    await logout();
    navigate("/");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.trim();
    const base = location.pathname.startsWith("/blog") ? "/blog" : "/shop";
    navigate(query ? `${base}?search=${encodeURIComponent(query)}` : base);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050509]">



      <div
        className="
          mx-auto
          flex
          h-[70px]
          w-full
          max-w-[1200px]
          items-center
          px-6
          sm:px-8
          lg:px-10
        "
      >

        {/* =================================
            MOBILE MENU BUTTON
        ================================= */}

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="
            mr-3
            flex
            flex-col
            gap-[4px]
            border-0
            bg-transparent
            p-1
            lg:hidden
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


        {/* LOGO */}

        <Logo />


        {/* =================================
            DESKTOP NAVIGATION
        ================================= */}

        <nav
          className="
            hidden
            h-full
            flex-2
            items-center
            justify-center
            gap-10
            lg:flex
          "
        >

          {NAV.map((item) => {
            const active = isNavActive(location.pathname, item.href);
            return item.dropdown ? (
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
                    ${shopMenuOpen || active ? "text-[#54bd3b]" : "text-white/80"}
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
              <Link
                key={item.label}
                to={item.href}
                className={`
                  flex
                  h-full
                  items-center
                  gap-[8px]
                  whitespace-nowrap
                  font-sans
                  text-[14px]
                  font-medium
                  leading-none
                  no-underline
                  ${active ? "text-[#54bd3b]" : "text-white/80"}
                `}
              >
                {item.label}
              </Link>
            );
          })}

        </nav>



        <div
          className="
            ml-auto
            hidden
            items-center
            gap-3
            lg:flex
          "
        >

          {/* SEARCH */}

          <form
            onSubmit={handleSearch}
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
              type="submit"
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

          </form>




          {isAuthenticated ? (
            <div
              className="relative flex h-full items-center"
              onMouseEnter={() => setAccountMenuOpen(true)}
              onMouseLeave={() => setAccountMenuOpen(false)}
            >
              <button
                type="button"
                aria-label="Account"
                onClick={() => setAccountMenuOpen((v) => !v)}
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
                  text-[#54bd3b]
                "
              >
                <UserIcon />
              </button>

              {accountMenuOpen && (
                <div
                  className="
                    absolute
                    right-0
                    top-full
                    w-[180px]
                    overflow-hidden
                    rounded-[4px]
                    border
                    border-black/10
                    bg-white
                    py-1
                    shadow-lg
                  "
                >
                  <p className="truncate px-4 py-1.5 text-[12px] font-semibold text-[#1a1a17]">
                    {user?.firstname ? `Hi, ${user.firstname}` : "My Account"}
                  </p>
                  <Link
                    to="/profile"
                    onClick={() => setAccountMenuOpen(false)}
                    className="block px-4 py-1.5 text-[13px] text-[#4a4a43] no-underline hover:bg-black/5"
                  >
                    Profile
                  </Link>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="block w-full border-0 bg-transparent px-4 py-1.5 text-left text-[13px] text-[#4a4a43] hover:bg-black/5"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
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
          )}



          <Link
            to="/wishlist"
            aria-label="Wishlist"
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
            <HeartIcon />
            {wishlistItems.length > 0 && (
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
                {wishlistItems.length}
              </span>
            )}
          </Link>


         

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
            lg:hidden
          "
        >

          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setMenuOpen(false)}
              className={`
                block
                py-2
                font-sans
                text-sm
                font-medium
                no-underline
                ${
                  isNavActive(location.pathname, item.href)
                    ? "text-[#54bd3b]"
                    : "text-white/80"
                }
              `}
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/wishlist"
            onClick={() => setMenuOpen(false)}
            className="block py-2 font-sans text-sm font-medium text-white/80 no-underline"
          >
            Wishlist{wishlistItems.length > 0 ? ` (${wishlistItems.length})` : ""}
          </Link>

          {isAuthenticated ? (
            <>
              <Link
                to="/profile"
                onClick={() => setMenuOpen(false)}
                className="block py-2 font-sans text-sm font-medium text-white/80 no-underline"
              >
                Profile
              </Link>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  handleLogout();
                }}
                className="block w-full border-0 bg-transparent py-2 text-left font-sans text-sm font-medium text-white/80"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/sign-in"
              onClick={() => setMenuOpen(false)}
              className="block py-2 font-sans text-sm font-medium text-white/80 no-underline"
            >
              Sign In
            </Link>
          )}

          <form
            onSubmit={handleSearch}
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
              type="submit"
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

          </form>

        </nav>
      )}

    </header>
  );
}