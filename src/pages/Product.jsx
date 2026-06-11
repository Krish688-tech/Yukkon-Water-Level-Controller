import SEO from "../components/SEO";
import ProductSchema from "../components/ProductSchema";
import FAQSchema from "../components/FAQSchema";
import { product } from "../data/product";
import { CheckCircle, PhoneCall, MessageCircle } from "lucide-react";

const Product = () => {
  return (
    <>
      <SEO
        title="Yukkon Water Level Controller | Overflow & Dry Run Protection"
        description="Automatic water level controller with dry run protection, overflow protection and automatic pump control."
        keywords="automatic water level controller, overflow controller, pump controller, motor protection controller"
        image={product.image}
        url="https://www.yukkon.in/product"
      />

      <ProductSchema />
      <FAQSchema />

      <main className="bg-[#F4F1E6]">
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Mobile Layout */}
            <div className="lg:hidden text-left">
              <span className="inline-flex rounded-full bg-[#DCE8CF] px-4 py-2 text-[10px] font-bold tracking-widest text-[#2F5D3F]">
                — PRODUCT
              </span>

              <h1 className="mt-6 text-[42px] sm:text-5xl font-serif leading-tight text-[#10352F]">
                {product.name}
              </h1>

              <ProductImage />

              <p className="mt-8 text-base sm:text-lg text-[#5A6F67] leading-7">
                {product.tagline}
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4">
                {product.highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-[#405C54] font-semibold leading-7"
                  >
                    <CheckCircle
                      size={20}
                      className="text-[#1E8A7A] shrink-0 mt-1"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4">
                <a
                  href="tel:+919842359234"
                  className="inline-flex justify-center items-center gap-2 rounded-2xl bg-[#2F5D3F] px-8 py-4 text-white font-bold shadow-xl active:scale-95 transition-all duration-300"
                >
                  <PhoneCall size={20} />
                  Call for Price
                </a>

                <a
                  href="https://wa.me/919842359234"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center items-center gap-2 rounded-2xl bg-linear-to-r from-white to-[#DFF4FF] px-8 py-4 text-[#10352F] font-bold border border-[#BFD8CF] shadow-lg active:scale-95 transition-all duration-300"
                >
                  <MessageCircle size={20} />
                  WhatsApp Enquiry
                </a>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-flex rounded-full bg-[#DCE8CF] px-4 py-2 text-xs font-bold tracking-widest text-[#2F5D3F]">
                  — PRODUCT
                </span>

                <h1 className="mt-6 text-7xl font-serif leading-tight text-[#10352F]">
                  {product.name}
                </h1>

                <p className="mt-6 text-xl text-[#5A6F67] leading-8">
                  {product.tagline}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {product.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-[#405C54] font-semibold"
                    >
                      <CheckCircle size={20} className="text-[#1E8A7A]" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex gap-4">
                  <a
                    href="tel:+919842359234"
                    className="inline-flex justify-center items-center gap-2 rounded-2xl bg-[#2F5D3F] px-8 py-4 text-white font-bold shadow-xl hover:bg-[#1E8A7A] hover:-translate-y-1 transition-all duration-300"
                  >
                    <PhoneCall size={20} />
                    Call for Price
                  </a>

                  <a
                    href="https://wa.me/919842359234"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex justify-center items-center gap-2 rounded-2xl bg-linear-to-r from-white to-[#DFF4FF] px-8 py-4 text-[#10352F] font-bold border border-[#BFD8CF] shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <MessageCircle size={20} />
                    WhatsApp Enquiry
                  </a>
                </div>
              </div>

              <ProductImage />
            </div>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <InfoCard title="Key Features" items={product.features} />
            <SpecCard />
            <InfoCard title="Applications" items={product.applications} />
          </div>
        </section>
      </main>
    </>
  );
};

const ProductImage = () => {
  return (
    <div className="relative mt-8 lg:mt-0 flex justify-center items-center">
      <div className="absolute w-[75%] h-[75%] bg-[#5BB8DE]/40 blur-[90px] rounded-full" />

      <img
        src={product.image}
        alt={product.name}
        className="relative w-full max-w-130 sm:max-w-2xl lg:max-w-3xl object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.22)]"
      />
    </div>
  );
};

const InfoCard = ({ title, items }) => (
  <div className="rounded-3xl sm:rounded-[30px] bg-[#FFFDF4] border border-[#D8D2BF] p-6 sm:p-8 shadow-sm">
    <h2 className="text-2xl sm:text-3xl font-serif text-[#10352F]">
      {title}
    </h2>

    <div className="mt-6 space-y-4">
      {items.map((item) => (
        <p key={item} className="flex gap-3 text-[#405C54] leading-7">
          <CheckCircle size={18} className="mt-1 text-[#1E8A7A] shrink-0" />
          {item}
        </p>
      ))}
    </div>
  </div>
);

const SpecCard = () => (
  <div className="rounded-3xl sm:rounded-[30px] bg-[#10352F] text-white p-6 sm:p-8 shadow-xl">
    <h2 className="text-2xl sm:text-3xl font-serif">Specifications</h2>

    <div className="mt-6 space-y-5">
      {product.specs.map((spec) => (
        <div key={spec.label} className="border-b border-white/10 pb-4">
          <p className="text-sm text-[#DFF4FF]">{spec.label}</p>
          <p className="mt-1 font-semibold">{spec.value}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Product;