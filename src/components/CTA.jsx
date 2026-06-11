import { PhoneCall, MessageCircle, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#F4F1E6] py-24">
      <div className="max-w-300 mx-auto px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[40px] bg-[#10352F] px-8 py-16 md:px-14 md:py-20 text-center shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#5BB8DE_0%,transparent_35%)] opacity-40"></div>

          <div className="relative">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold tracking-widest text-[#DFF4FF]">
              — GET STARTED
            </span>

            <h2 className="mt-6 text-4xl md:text-6xl font-serif leading-tight text-white">
              Ready to stop water overflow?
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-[#DFF4FF]">
              Book Yukkon Water Level Controller installation and make your
              home water system smarter, safer and automatic.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+919842359234"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-[#10352F] hover:-translate-y-1 transition-all duration-300"
              >
                <PhoneCall size={20} />
                Call Now
              </a>

              <a
                href="https://wa.me/919842359234"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-[#DCE8CF] to-[#DFF4FF] px-8 py-4 font-bold text-[#10352F] hover:-translate-y-1 transition-all duration-300"
              >
                <MessageCircle size={20} />
                WhatsApp Enquiry
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;