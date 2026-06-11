import SEO from "../components/SEO";
import FAQSchema from "../components/FAQSchema";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import ControllerModes from "../components/ControllerModes";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <>
      <SEO
        title="Yukkon Water Level Controller | Automatic Water Tank Controller"
        description="Yukkon Water Level Controller with automatic motor control, overflow protection, dry run protection and smart water management."
        keywords="water level controller, automatic water level controller, water tank controller, motor controller"
        image="https://res.cloudinary.com/dkp7rlfq4/image/upload/v1781002350/Yukkon_smart_water_level_controller_mbtnap.png"
        url="https://www.yukkon.in"
      />
      <FAQSchema />
      <Hero />
      <Features />
      <HowItWorks />
      <ControllerModes />
      <Benefits />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
};

export default Home;
