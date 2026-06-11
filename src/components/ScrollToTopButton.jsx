import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed
        bottom-24
        right-6
        z-50
        h-12
        w-12
        rounded-full
        bg-linear-to-br from-[#10352F] to-[#1E8A7A]
        text-white
        shadow-[0_0_25px_rgba(30,138,122,0.35)]
        transition-all
        duration-300
        hover:scale-110
        hover:bg-[#1E8A7A]
        ${
          showButton
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0 pointer-events-none"
        }
      `}
    >
      <ChevronUp size={22} className="mx-auto" />
    </button>
  );
};

export default ScrollToTopButton;