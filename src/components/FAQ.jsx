import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "../data/faq";

const FAQ = () => {
  const [openId, setOpenId] = useState(1);

  return (
    <section className="bg-white py-24">
      <div className="max-w-275 mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex rounded-full bg-[#DCE8CF] px-4 py-2 text-xs font-bold tracking-widest text-[#2F5D3F]">
            — FAQ
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-serif text-[#10352F]">
            Common questions,
            <br />
            simple answers.
          </h2>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="rounded-3xl border border-[#D8D2BF] bg-[#FFFDF4] overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="text-xl font-serif text-[#10352F]">
                    {item.question}
                  </span>

                  <span
                    className={`shrink-0 w-10 h-10 rounded-full bg-[#DCE8CF] text-[#2F5D3F] flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[#5A6F67] leading-8">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
