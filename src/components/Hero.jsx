const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F4F1E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 lg:pt-12 lg:pb-20">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col text-left">
          <div className="inline-flex w-fit items-center rounded-full bg-[#DCE8CF] px-4 py-2 text-[10px] sm:text-xs font-bold tracking-widest text-[#2F5D3F]">
            — YUKKON WATER LEVEL CONTROLLER
          </div>

          <h1 className="mt-6 text-[42px] sm:text-[56px] leading-[0.95] font-serif text-[#10352F]">
            Water,
            <br />
            <span className="italic text-[#1E8A7A]">controlled</span>
            <br />
            from anywhere.
          </h1>

          <p className="mt-6 text-base sm:text-lg leading-7 text-[#5A6F67]">
            Smart automatic water level controller for homes, apartments and
            businesses. Prevent overflow, protect your motor and manage water
            with confidence.
          </p>

          <div className="mt-8">
            <ProductCard mobile />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="inline-flex justify-center rounded-2xl bg-[#2F5D3F] px-7 py-4 text-white font-bold shadow-xl hover:bg-[#1E8A7A] transition-all duration-300"
            >
              Book Installation →
            </a>

            <a
              href="/product"
              className="inline-flex justify-center items-center gap-2 rounded-2xl px-7 py-4 font-semibold text-[#10352F] bg-linear-to-r from-white via-[#EEF9FF] to-[#97d4ef] border border-[#CDE5DD] shadow-lg transition-all duration-300"
            >
              View Product
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              ["24/7", "Monitoring"],
              ["Auto", "Motor Control"],
              ["Zero", "Overflow"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl bg-white/50 p-4 border border-[#D8D2BF]"
              >
                <h3 className="text-2xl font-bold text-[#1E8A7A]">{title}</h3>
                <p className="text-xs tracking-widest uppercase text-[#5A6F67]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-14 items-center">
          <div className="text-left">
            <div className="inline-flex items-center rounded-full bg-[#DCE8CF] px-4 py-2 text-xs font-bold tracking-widest text-[#2F5D3F]">
              — YUKKON WATER LEVEL CONTROLLER
            </div>

            <h1 className="mt-8 text-[92px] leading-[0.95] font-serif text-[#10352F]">
              Water,
              <br />
              <span className="italic text-[#1E8A7A]">controlled</span>
              <br />
              from anywhere.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#5A6F67]">
              Smart automatic water level controller for homes, apartments and
              businesses. Prevent overflow, protect your motor and manage water
              with confidence.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="/contact"
                className="inline-flex justify-center rounded-2xl bg-[#2F5D3F] px-8 py-4 text-white font-bold shadow-xl hover:bg-[#1E8A7A] hover:-translate-y-1 transition-all duration-300"
              >
                Book Installation →
              </a>

              <a
                href="/product"
                className="inline-flex justify-center items-center gap-2 rounded-2xl px-8 py-4 font-semibold text-[#10352F] bg-linear-to-r from-white via-[#EEF9FF] to-[#97d4ef] border border-[#CDE5DD] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                View Product
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
              {[
                ["24/7", "Monitoring"],
                ["Auto", "Motor Control"],
                ["Zero", "Overflow"],
              ].map(([title, text]) => (
                <div key={title}>
                  <h3 className="text-3xl font-bold text-[#1E8A7A]">{title}</h3>
                  <p className="text-xs tracking-widest uppercase text-[#5A6F67]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <ProductCard />
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ mobile = false }) => {
  return (
    <div className="relative flex justify-center items-center">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[#5BB8DE]/20 blur-[120px]" />

      <img
        src="https://res.cloudinary.com/dkp7rlfq4/image/upload/v1780979926/Yukkon_Water_Level_contoller_main_image_bklgwy.png"
        alt="Yukkon Water Level Controller"
        className="
          relative
          w-full
          max-w-175
          rounded-4xl
          shadow-[0_30px_80px_rgba(0,0,0,0.18)]
        "
      />
    </div>
  );
};

export default Hero;