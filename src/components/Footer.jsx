import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#10352F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          
          <div>
            <h2 className="text-4xl font-serif">Yukkon</h2>
            <p className="mt-4 text-[#DFF4FF] leading-7">
              Smart water level controllers and water solutions for every home.
            </p>

            <div className="mt-6 flex gap-4">
              <a href="https://www.facebook.com/yukkonindia" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300">
                <FaFacebookF size={18} />
              </a>
              <a href="https://www.instagram.com/yukkon1996/" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 transition-all duration-300">
                <FaInstagram size={18} />
              </a>
              <a href="https://www.linkedin.com/posts/yukkon-water-level-controller_yukkon-waterlevelcontroller-watermanagement-activity-7471487500713230337-_pg2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAhYt08BQObfKWf86DAJsARH8iIACoTHkdo" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0A66C2] transition-all duration-300">
                <FaLinkedinIn size={18} />
              </a>
              <a href="https://www.youtube.com/@YukkonWaterLevelController" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500 transition-all duration-300">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-3 text-[#DFF4FF]">
              <Link to="/" className="block hover:text-white">Home</Link>
              <Link to="/product" className="block hover:text-white">Product</Link>
              <Link to="/about" className="block hover:text-white">About</Link>
              <Link to="/service" className="block hover:text-white">Service</Link>
              <Link to="/contact" className="block hover:text-white">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <div className="space-y-4 text-[#DFF4FF]">
              <p className="flex gap-3">
                <Phone size={18} className="shrink-0 mt-1" />
                <span>+91 98423 59234</span>
              </p>

              <p className="flex gap-3">
                <Mail size={18} className="shrink-0 mt-1" />
                <span className="break-all">YukkonWaterSolutions@gmail.com</span>
              </p>

              <p className="flex gap-3">
                <Globe size={18} className="shrink-0 mt-1" />
                <span>www.yukkon.in</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Corporate Office</h3>
            <p className="flex gap-3 text-[#DFF4FF] leading-6">
              <MapPin size={18} className="shrink-0 mt-1" />
              <span>
                No.41, Trichy Main Road,
                <br />
                Near Nayara Energy,
                <br />
                Salamedu, Villupuram,
                <br />
                Tamil Nadu - 605403
              </span>
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Chennai Office</h3>
            <p className="flex gap-3 text-[#DFF4FF] leading-6">
              <MapPin size={18} className="shrink-0 mt-1" />
              <span>
                Sudagar Nagar,
                <br />
                Saligramam,
                <br />
                Chennai,
                <br />
                Tamil Nadu
              </span>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center text-center">
          <p className="max-w-xl text-[#DFF4FF] leading-7">
            Yukkon Automatic & Manual Water Level Controller designed for
            reliable home water management.
          </p>

          <a
            href="https://wa.me/919842359234"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-[#10352F] font-bold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-[#DFF4FF] active:scale-95"
          >
            WhatsApp Enquiry
          </a>
        </div>

        <div className="mt-4 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-[#DFF4FF]">
          <p>© 2026 Yukkon. All rights reserved.</p>
          <p>Pure Water. Trusted Innovation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;