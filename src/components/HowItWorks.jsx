import { Droplets, Cpu, Power, Home, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Droplets,
    title: "Sump Tank",
    desc: "Water availability is detected from the sump tank.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Yukkon Controller",
    desc: "The controller reads tank level signals automatically.",
  },
  {
    number: "03",
    icon: Power,
    title: "Motor Starts",
    desc: "Motor turns ON when the overhead tank needs water.",
  },
  {
    number: "04",
    icon: Home,
    title: "Overhead Tank",
    desc: "Water fills safely without daily manual checking.",
  },
  {
    number: "05",
    icon: CheckCircle,
    title: "Motor Stops",
    desc: "Motor turns OFF once the tank reaches full level.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#DFF4FF_0%,transparent_35%)]"></div>

      <div className="relative max-w-350 mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex rounded-full bg-[#DCE8CF] px-4 py-2 text-xs font-bold tracking-widest text-[#2F5D3F]">
            — HOW IT WORKS
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-serif text-[#10352F]">
            From sump to tank, fully automatic.
          </h2>

          <p className="mt-5 text-lg text-[#5A6F67] leading-8">
            Yukkon connects the sump tank, controller, motor and overhead tank
            into one smooth automatic water management system.
          </p>
        </div>

        <div className="relative mt-20">
          <svg
            className="hidden lg:block absolute top-24 left-0 w-full h-24 pointer-events-none"
            viewBox="0 0 1200 120"
            fill="none"
          >
            <path
              d="M90 60 C220 10, 300 110, 430 60 S650 10, 780 60 S1000 110, 1110 60"
              stroke="#BFD8CF"
              strokeWidth="3"
              strokeDasharray="10 12"
              className="animate-pulse"
            />
          </svg>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative rounded-[30px] border border-[#D8D2BF] bg-[#FFFDF4] p-7 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="absolute -top-5 left-7 rounded-full bg-[#2F5D3F] px-4 py-2 text-xs font-bold text-white shadow-lg">
                    {step.number}
                  </div>

                  <div className="mt-5 w-16 h-16 rounded-2xl bg-linear-to-br from-[#DCE8CF] to-[#DFF4FF] flex items-center justify-center text-[#2F5D3F] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-7 text-2xl font-serif text-[#10352F]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#5A6F67]">
                    {step.desc}
                  </p>

                  <div className="mt-6 h-1 w-12 rounded-full bg-linear-to-r from-[#2F5D3F] to-[#5BB8DE] group-hover:w-24 transition-all duration-500"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;