import SEO from "../components/SEO";
import { Award, Lightbulb, ShieldCheck, Droplets } from "lucide-react";

const About = () => {
  return (
    <>
      <SEO
        title="About Yukkon | Water Management Solutions Since 1996"
        description="Learn about Yukkon, our journey since 1996, our mission, vision and commitment to smart water management solutions."
        keywords="about yukkon, yukkon company, water management company, yukkon water solutions"
        image="https://res.cloudinary.com/dkp7rlfq4/image/upload/v1781082650/Yukkon_Brand_Logo_qrpcyf.png"
        url="https://www.yukkon.in/about"
      />
      <main className="bg-[#F4F1E6]">
        {/* Hero */}
        <section className="py-20">
          <div className="max-w-350 mx-auto px-6 lg:px-8 text-center">
            <span className="inline-flex rounded-full bg-[#DCE8CF] px-4 py-2 text-xs font-bold tracking-widest text-[#2F5D3F]">
              — ABOUT YUKKON
            </span>

            <h1 className="mt-6 text-5xl md:text-7xl font-serif text-[#10352F]">
              Pure Water.
              <br />
              Trusted Innovation.
            </h1>

            <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-[#5A6F67]">
              Yukkon is committed to delivering reliable water management
              solutions that make everyday life easier, safer and smarter.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="bg-white py-20">
          <div className="max-w-350 mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#10352F]">
                Our Story
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#5A6F67]">
                Since 1996, Yukkon has been involved in water treatment and
                water management solutions. What started as a dealership and
                supplier business gradually evolved into an innovation-driven
                company with a focus on developing reliable products for Indian
                homes and businesses.
              </p>

              <p className="mt-6 text-lg leading-8 text-[#5A6F67]">
                Today, Yukkon continues to build products that help customers
                manage water efficiently while protecting motors, reducing
                wastage and improving convenience.
              </p>
            </div>

            <div className="rounded-[40px] bg-linear-to-br from-[#DCE8CF] to-[#DFF4FF] p-10">
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-serif text-[#10352F]">1996</h3>
                  <p className="mt-2 text-[#405C54]">
                    Started as dealership & supplier.
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-serif text-[#10352F]">2005+</h3>
                  <p className="mt-2 text-[#405C54]">
                    Expanded technical expertise and service network.
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-serif text-[#10352F]">Today</h3>
                  <p className="mt-2 text-[#405C54]">
                    Developing Yukkon branded water solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Vision */}
        <section className="py-20">
          <div className="max-w-350 mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-8">
            <div className="rounded-4xl bg-white p-10 border border-[#D8D2BF]">
              <Lightbulb className="text-[#1E8A7A]" size={40} />

              <h2 className="mt-6 text-3xl font-serif text-[#10352F]">
                Our Mission
              </h2>

              <p className="mt-4 text-[#5A6F67] leading-8">
                To create reliable water management solutions that improve daily
                life while conserving water and energy.
              </p>
            </div>

            <div className="rounded-4xl bg-white p-10 border border-[#D8D2BF]">
              <Award className="text-[#1E8A7A]" size={40} />

              <h2 className="mt-6 text-3xl font-serif text-[#10352F]">
                Our Vision
              </h2>

              <p className="mt-4 text-[#5A6F67] leading-8">
                To become one of India's most trusted brands in smart water
                management and purification solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="bg-white py-20">
          <div className="max-w-350 mx-auto px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-serif text-[#10352F]">
                Why Choose Yukkon?
              </h2>
            </div>

            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card
                icon={<ShieldCheck size={32} />}
                title="Reliable Products"
                text="Built for long-term performance."
              />

              <Card
                icon={<Droplets size={32} />}
                title="Water Saving"
                text="Designed to reduce water wastage."
              />

              <Card
                icon={<Award size={32} />}
                title="Industry Experience"
                text="Decades of practical expertise."
              />

              <Card
                icon={<Lightbulb size={32} />}
                title="Innovation"
                text="Continuous product improvement."
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

const Card = ({ icon, title, text }) => {
  return (
    <div className="rounded-[28px] bg-[#FFFDF4] border border-[#D8D2BF] p-8 hover:shadow-xl transition">
      <div className="text-[#1E8A7A]">{icon}</div>

      <h3 className="mt-5 text-2xl font-serif text-[#10352F]">{title}</h3>

      <p className="mt-3 text-[#5A6F67]">{text}</p>
    </div>
  );
};

export default About;
