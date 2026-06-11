import {
  ShieldCheck,
  Wallet,
  Clock3,
  Zap,
  Droplets,
  HeartHandshake,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Protects Your Motor",
    desc: "Prevents dry running and extends motor life.",
  },
  {
    icon: Wallet,
    title: "Reduces Maintenance Cost",
    desc: "Avoid costly motor repairs and water wastage.",
  },
  {
    icon: Clock3,
    title: "Saves Your Time",
    desc: "No more climbing stairs to check tank levels.",
  },
  {
    icon: Zap,
    title: "Saves Electricity",
    desc: "Motor runs only when necessary.",
  },
  {
    icon: Droplets,
    title: "No Water Overflow",
    desc: "Stops the motor automatically when the tank is full.",
  },
  {
    icon: HeartHandshake,
    title: "Peace Of Mind",
    desc: "Reliable automation for everyday water management.",
  },
];

const Benefits = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex rounded-full bg-[#DCE8CF] px-4 py-2 text-xs font-bold tracking-widest text-[#2F5D3F]">
            — CUSTOMER BENEFITS
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-serif text-[#10352F]">
            More than a controller.
            <br />
            A smarter lifestyle.
          </h2>

          <p className="mt-6 text-lg text-[#5A6F67] leading-8">
            Yukkon helps homeowners save water, save electricity and enjoy
            worry-free water management every day.
          </p>

        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-[30px] border border-[#D8D2BF] bg-[#FFFDF4] p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#DCE8CF] to-[#DFF4FF] flex items-center justify-center text-[#2F5D3F] group-hover:rotate-6 transition duration-500">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-serif text-[#10352F]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[#5A6F67] leading-7">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Benefits;