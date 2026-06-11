import SEO from "../components/SEO";
import { CheckCircle, Wrench, ShieldCheck, PhoneCall } from "lucide-react";

const services = [
  "Water level controller installation",
  "Automatic & manual mode setup",
  "Sensor checking and calibration",
  "Motor dry-run protection setup",
  "Tank overflow prevention setup",
  "Service and maintenance support",
];

const Service = () => {
  return (
    <>
      <SEO
        title="Yukkon Installation & Service | Water Level Controller Support"
        description="Professional installation, setup and maintenance services for Yukkon water level controllers."
        keywords="water level controller installation, controller service, motor protection service"
        image="https://res.cloudinary.com/dkp7rlfq4/image/upload/v1781082650/Yukkon_Brand_Logo_qrpcyf.png"
        url="https://www.yukkon.in/service"
      />
      <main className="bg-[#F4F1E6]">
        <section className="py-20">
          <div className="max-w-350 mx-auto px-6 lg:px-8 text-center">
            <span className="inline-flex rounded-full bg-[#DCE8CF] px-4 py-2 text-xs font-bold tracking-widest text-[#2F5D3F]">
              — OUR SERVICE
            </span>

            <h1 className="mt-6 text-5xl md:text-7xl font-serif text-[#10352F]">
              Installation & support
              <br />
              made simple.
            </h1>

            <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-[#5A6F67]">
              Yukkon provides reliable installation and service support for
              homes, apartments, offices and commercial water tank systems.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-350 mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
            {services.map((item) => (
              <div
                key={item}
                className="rounded-[30px] bg-[#FFFDF4] border border-[#D8D2BF] p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <CheckCircle className="text-[#1E8A7A]" size={32} />
                <h3 className="mt-5 text-2xl font-serif text-[#10352F]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-300 mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-8">
            <Info
              icon={<Wrench size={36} />}
              title="Easy Installation"
              text="Clean and simple installation process for daily use."
            />
            <Info
              icon={<ShieldCheck size={36} />}
              title="Safe Operation"
              text="Designed to protect motor and prevent overflow."
            />
            <Info
              icon={<PhoneCall size={36} />}
              title="Quick Support"
              text="Service support for installation and maintenance needs."
            />
          </div>
        </section>
      </main>
    </>
  );
};

const Info = ({ icon, title, text }) => (
  <div className="rounded-4xl bg-white p-8 border border-[#D8D2BF] text-center">
    <div className="mx-auto w-16 h-16 rounded-2xl bg-linear-to-br from-[#DCE8CF] to-[#DFF4FF] flex items-center justify-center text-[#2F5D3F]">
      {icon}
    </div>
    <h3 className="mt-6 text-2xl font-serif text-[#10352F]">{title}</h3>
    <p className="mt-3 text-[#5A6F67] leading-7">{text}</p>
  </div>
);

export default Service;
