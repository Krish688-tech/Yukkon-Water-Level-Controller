import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data/testimonials";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-[#F4F1E6] py-24">
      <div className="max-w-350 mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex rounded-full bg-[#DCE8CF] px-4 py-2 text-xs font-bold tracking-widest text-[#2F5D3F]">
            — CUSTOMER REVIEWS
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-serif text-[#10352F]">
            Trusted by homeowners.
          </h2>

          <p className="mt-6 text-lg text-[#5A6F67] leading-8">
            Real feedback from customers using Yukkon Water Level Controller.
          </p>
        </div>

        <div className="relative mt-16">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".review-prev",
              nextEl: ".review-next",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="h-full group rounded-[30px] border border-[#D8D2BF] bg-[#FFFDF4] p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <Quote className="text-[#DCE8CF]" size={42} />

                  <div className="mt-6 flex gap-1">
                    {[...Array(item.rating)].map((_, index) => (
                      <Star
                        key={index}
                        size={18}
                        className="fill-[#C8DC78] text-[#C8DC78]"
                      />
                    ))}
                  </div>

                  <p className="mt-6 text-[#405C54] leading-8">
                    “{item.review}”
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full bg-[#DCE8CF] px-3 py-1 text-xs font-bold text-[#2F5D3F]">
                      {item.product}
                    </span>

                    <span className="rounded-full bg-[#DFF4FF] px-3 py-1 text-xs font-bold text-[#1E8A7A]">
                      {item.date}
                    </span>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#D8D2BF]">
                    <h3 className="text-xl font-serif text-[#10352F]">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-sm text-[#5A6F67]">
                      {item.location}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="review-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-4 w-11 h-11 rounded-full bg-[#2F5D3F] text-white flex items-center justify-center shadow-xl hover:bg-[#1E8A7A] transition">
            <ChevronLeft size={22} />
          </button>

          <button className="review-next absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 w-11 h-11 rounded-full bg-[#2F5D3F] text-white flex items-center justify-center shadow-xl hover:bg-[#1E8A7A] transition">
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;