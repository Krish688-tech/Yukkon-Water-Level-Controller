import { Outlet } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import ScrollToTopButton from "../components/ScrollToTopButton";


const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F1E6]">
      <LoadingScreen />
      <Navbar />

      <main className="pt-12 flex-1">
        <Outlet />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <ScrollToTopButton />
    </div>
  );
};

export default MainLayout;