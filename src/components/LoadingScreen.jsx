import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-[#F4F1E6]">
      <div className="text-center animate-pulse">
        <h1 className="text-5xl md:text-7xl font-serif text-[#2F5D3F]">
          Yukkon
        </h1>

        <p className="mt-4 text-sm tracking-[0.35em] font-bold text-[#1E8A7A] uppercase">
          Pure Water. Trusted Innovation.
        </p>

        <div className="mt-8 mx-auto h-1 w-40 overflow-hidden rounded-full bg-[#DCE8CF]">
          <div className="h-full w-1/2 animate-[loading_1.2s_ease-in-out_infinite] rounded-full bg-[#2F5D3F]"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;