import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Product", path: "/product" },
  { name: "About", path: "/about" },
  { name: "Service", path: "/service" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#F4F1E6]/95 backdrop-blur-md border-b border-[#D8D2BF]">
      <nav className="max-w-7xl mx-auto h-18 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 min-w-0"
        >
          <img
            src="https://res.cloudinary.com/dkp7rlfq4/image/upload/v1780977340/Yukkon_Water_Level_Controller01_yrcgmj.png"
            alt="Yukkon Logo"
            className="h-8 sm:h-9 w-auto object-contain shrink-0"
          />

          <span className="text-[28px] sm:text-[35px] leading-none font-serif text-[#2F5D3F] truncate">
            Yukkon
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative pb-1 transition-colors duration-300
                after:absolute after:left-0 after:-bottom-1 after:h-0.5
                after:bg-[#2F5D3F] after:transition-all after:duration-300
                ${
                  isActive
                    ? "text-[#2F5D3F] after:w-full"
                    : "text-[#405C54] hover:text-[#2F5D3F] after:w-0 hover:after:w-full"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden md:inline-flex px-5 py-3 rounded-xl bg-[#2F5D3F] text-white text-sm font-bold shadow-lg hover:bg-[#1E8A7A] transition"
        >
          Book Installation
        </Link>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden shrink-0 p-2 rounded-xl border border-[#D8D2BF] text-[#2F5D3F] bg-white/40"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden bg-[#F4F1E6] border-t border-[#D8D2BF]
        transition-all duration-300 ease-in-out
        ${open ? "max-h-105 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 py-5 flex flex-col gap-4 text-sm font-semibold">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-white text-[#2F5D3F]"
                    : "text-[#405C54] hover:bg-white hover:text-[#2F5D3F]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-center px-5 py-3 rounded-xl bg-[#2F5D3F] text-white font-bold shadow-lg"
          >
            Book Installation
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;