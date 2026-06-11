import {
  Droplets,
  ShieldCheck,
  Zap,
  Power,
  Gauge,
  Wrench,
} from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Prevents Tank Overflow",
    desc: "Automatically stops the motor when the overhead tank becomes full.",
  },
  {
    icon: ShieldCheck,
    title: "Protects Motor",
    desc: "Helps avoid dry-run damage by controlling motor operation safely.",
  },
  {
    icon: Zap,
    title: "Power Saving",
    desc: "Reduces unnecessary motor running and saves electricity.",
  },
  {
    icon: Power,
    title: "Automatic Operation",
    desc: "No need to manually switch the motor on and off every day.",
  },
  {
    icon: Gauge,
    title: "Water Level Monitoring",
    desc: "Designed to manage water levels smoothly and reliably.",
  },
  {
    icon: Wrench,
    title: "Easy Installation",
    desc: "Simple installation support for homes, apartments and businesses.",
  },
];

const Features = () => {
  return (
    <section className="bg-[#F4F1E6] py-14 sm:py-16 lg:py-20">
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-[#DCE8CF] px-4 py-2 text-[10px] sm:text-xs font-bold tracking-widest text-[#2F5D3F]">
            — WHY CHOOSE YUKKON
          </span>

          <h2 className="mt-6 text-[34px] sm:text-4xl md:text-6xl font-serif leading-tight text-[#10352F]">
            Smart protection for every water tank.
          </h2>

          <p className="mt-5 text-base sm:text-lg leading-7 sm:leading-8 text-[#5A6F67]">
            Yukkon Water Level Controller is built to make water management
            simple, safe and automatic for daily use.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl sm:rounded-[28px] border border-[#D8D2BF] bg-[#FFFDF4] p-6 sm:p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-linear-to-br from-[#DCE8CF] to-[#DFF4FF] flex items-center justify-center text-[#2F5D3F] group-hover:scale-110 transition-transform duration-300">
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 sm:mt-7 text-[22px] sm:text-2xl font-serif text-[#10352F]">
                  {feature.title}
                </h3>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#5A6F67] leading-7">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;