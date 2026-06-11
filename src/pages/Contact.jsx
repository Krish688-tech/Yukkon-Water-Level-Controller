import SEO from "../components/SEO";
import { PhoneCall, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Yukkon | Water Level Controller Enquiry"
        description="Contact Yukkon for installation, product enquiries, service support and pricing information."
        keywords="contact yukkon, water level controller enquiry, yukkon support"
        image="https://res.cloudinary.com/dkp7rlfq4/image/upload/v1781082650/Yukkon_Brand_Logo_qrpcyf.png"
        url="https://www.yukkon.in/contact"
      />

      <main className="bg-[#F4F1E6]">
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left sm:text-center">
            <span className="inline-flex rounded-full bg-[#DCE8CF] px-4 py-2 text-[10px] sm:text-xs font-bold tracking-widest text-[#2F5D3F]">
              — CONTACT YUKKON
            </span>

            <h1 className="mt-6 text-[42px] sm:text-5xl md:text-7xl font-serif leading-none text-[#10352F]">
              Need installation?
              <br />
              Let’s talk.
            </h1>

            <p className="mt-6 sm:mt-8 max-w-3xl sm:mx-auto text-base sm:text-lg leading-7 sm:leading-8 text-[#5A6F67]">
              Contact Yukkon for water level controller enquiry, installation,
              service support and product details.
            </p>
          </div>
        </section>

        <section className="pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
            <div className="rounded-[28px] sm:rounded-[36px] bg-white border border-[#D8D2BF] p-5 sm:p-8 shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-serif text-[#10352F]">
                Contact Details
              </h2>

              <div className="mt-6 sm:mt-8 flex flex-col gap-4 sm:gap-5">
                <ContactItem
                  icon={<PhoneCall size={22} />}
                  title="Phone"
                  text="+91 98423 59234"
                  link="tel:+919842359234"
                />

                <ContactItem
                  icon={<MessageCircle size={22} />}
                  title="WhatsApp"
                  text="Chat with Yukkon"
                  link="https://wa.me/919842359234"
                />

                <ContactItem
                  icon={<Mail size={22} />}
                  title="Email"
                  text="YukkonWaterSolutions@gmail.com"
                  link="mailto:YukkonWaterSolutions@gmail.com"
                />

                <ContactItem
                  icon={<MapPin size={22} />}
                  title="Location"
                  text="Tamil Nadu, India"
                />

                <ContactItem
                  icon={<Clock size={22} />}
                  title="Working Hours"
                  text="Monday - Saturday, 9:00 AM - 7:00 PM"
                />
              </div>
            </div>

            <div className="rounded-[28px] sm:rounded-[36px] bg-[#10352F] p-5 sm:p-8 shadow-2xl text-white">
              <h2 className="text-2xl sm:text-3xl font-serif">
                Quick Enquiry
              </h2>

              <p className="mt-4 text-sm sm:text-base text-[#DFF4FF] leading-7">
                Click below to send a ready-made WhatsApp enquiry message.
              </p>

              <a
                href="https://wa.me/919842359234?text=Hi%20Yukkon%2C%20I%20am%20interested%20in%20Yukkon%20Water%20Level%20Controller.%20Please%20share%20price%20and%20installation%20details."
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-full justify-center items-center gap-2 rounded-2xl bg-linear-to-r from-[#DCE8CF] to-[#DFF4FF] px-5 sm:px-8 py-4 font-bold text-[#10352F] hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
              >
                <MessageCircle size={20} />
                Send WhatsApp Enquiry
              </a>

              <div className="mt-8 rounded-3xl sm:rounded-[28px] bg-white/10 p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-serif">
                  Service Areas
                </h3>

                <p className="mt-4 text-sm sm:text-base text-[#DFF4FF] leading-7 sm:leading-8">
                  Homes, apartments, offices and commercial buildings in Tamil
                  Nadu surroundings.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[28px] sm:rounded-[36px] overflow-hidden border border-[#D8D2BF] shadow-2xl bg-white">
              <div className="text-left sm:text-center px-5 sm:px-8 pt-8 sm:pt-10 pb-6">
                <h2 className="text-[32px] sm:text-4xl md:text-5xl font-serif leading-tight text-[#10352F]">
                  Visit Our Main Office
                </h2>

                <p className="mt-4 text-sm sm:text-base leading-7 text-[#5A6F67]">
                  No.41 Trichy Main Road, Near Nayara Energy, Salamedu,
                  Viluppuram, Tamil Nadu 605 403, India
                </p>
              </div>

              <iframe
                title="Yukkon Villupuram Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487.9766599127916!2d79.47701945895085!3d11.9180792165989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53567dc0d3337d%3A0xfcf6e8801819eaf9!2sNayara%20Energy!5e0!3m2!1sen!2sus!4v1781077095546!5m2!1sen!2sus"
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-80 sm:h-105 lg:h-125 border-0"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

const ContactItem = ({ icon, title, text, link }) => {
  const content = (
    <div className="flex gap-4 rounded-2xl border border-[#D8D2BF] bg-[#FFFDF4] p-4 sm:p-5 hover:shadow-md transition">
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-linear-to-br from-[#DCE8CF] to-[#DFF4FF] flex items-center justify-center text-[#2F5D3F] shrink-0">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-sm font-bold text-[#2F5D3F]">{title}</p>
        <p className="mt-1 text-sm sm:text-base text-[#405C54] wrap-break-word">
          {text}
        </p>
      </div>
    </div>
  );

  return link ? (
    <a
      href={link}
      target={link.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="block"
    >
      {content}
    </a>
  ) : (
    content
  );
};

export default Contact;