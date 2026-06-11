import { Bot, Hand, ShieldCheck, Zap } from "lucide-react";

const modes = [
  {
    icon: Bot,
    title: "Automatic Mode",
    desc: "The controller automatically switches the motor ON and OFF based on sump and overhead tank water levels.",
    points: ["No daily manual checking", "Prevents overflow", "Protects motor"],
  },
  {
    icon: Hand,
    title: "Manual Mode",
    desc: "Manual switch option allows users to control the motor whenever needed.",
    points: ["Easy override control", "Useful during maintenance", "Simple operation"],
  },
];

const ControllerModes = () => {
  return (
    <section className="relative overflow-hidden bg-[#F4F1E6] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#DFF4FF_0%,transparent_35%)]"></div>

      <div className="relative max-w-350 mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-flex rounded-full bg-[#DCE8CF] px-4 py-2 text-xs font-bold tracking-widest text-[#2F5D3F]">
              — CONTROLLER MODES
            </span>

            <h2 className="mt-6 text-4xl md:text-6xl font-serif leading-tight text-[#10352F]">
              Automatic when you need it. Manual when you want it.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#5A6F67] max-w-xl">
              Yukkon Water Level Controller gives users the freedom of automatic
              water control with a manual override option for extra convenience.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {modes.map((mode) => {
                const Icon = mode.icon;

                return (
                  <div
                    key={mode.title}
                    className="rounded-[28px] border border-[#D8D2BF] bg-[#FFFDF4] p-7 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-[#DCE8CF] to-[#DFF4FF] flex items-center justify-center text-[#2F5D3F]">
                      <Icon size={28} />
                    </div>

                    <h3 className="mt-6 text-2xl font-serif text-[#10352F]">
                      {mode.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#5A6F67]">
                      {mode.desc}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {mode.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2 text-sm font-medium text-[#405C54]"
                        >
                          <ShieldCheck size={16} className="text-[#1E8A7A]" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 bg-[#5BB8DE]/20 blur-3xl rounded-full"></div>

            <div className="relative rounded-[36px] border border-[#BFD8CF] bg-[#FFFDF4] p-8 shadow-2xl">
              <div className="absolute top-6 right-6 rounded-full bg-[#DCE8CF] px-4 py-2 text-xs font-bold text-[#2F5D3F]">
                Dual Mode
              </div>

              <div className="rounded-4xl bg-white p-6 border border-[#D8D2BF] shadow-xl overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dkp7rlfq4/image/upload/v1781147595/Yukkon-water-level-controller-automatic-manual-automatic-on-off-dry-run-protection_xzd6zb.png"
                  alt="Yukkon Automatic and Manual Water Level Controller"
                  className="w-full max-w-md mx-auto object-contain drop-shadow-2xl hover:scale-105 transition-all duration-500"
                />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-linear-to-br from-[#DCE8CF] to-[#DFF4FF] p-5">
                  <Bot className="text-[#2F5D3F]" size={26} />
                  <h4 className="mt-3 font-serif text-xl text-[#10352F]">
                    Auto
                  </h4>
                  <p className="mt-1 text-sm text-[#5A6F67]">
                    Smart operation
                  </p>
                </div>

                <div className="rounded-2xl bg-linear-to-br from-white to-[#DFF4FF] p-5 border border-[#D8D2BF]">
                  <Hand className="text-[#2F5D3F]" size={26} />
                  <h4 className="mt-3 font-serif text-xl text-[#10352F]">
                    Manual
                  </h4>
                  <p className="mt-1 text-sm text-[#5A6F67]">
                    Easy control
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-[#D8D2BF] bg-[#FFFDF4] px-5 py-4 text-sm font-semibold text-[#405C54]">
                <Zap size={18} className="text-[#1E8A7A]" />
                Designed for reliable home water management
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ControllerModes;