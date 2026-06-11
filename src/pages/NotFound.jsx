import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-[#F4F1E6] px-6">
      <div className="text-center">

        <h1 className="text-[120px] md:text-[180px] font-serif text-[#10352F] leading-none">
          404
        </h1>

        <h2 className="text-3xl md:text-5xl font-serif text-[#10352F]">
          Page Not Found
        </h2>

        <p className="mt-6 max-w-lg mx-auto text-[#5A6F67]">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link
          to="/"
          className="inline-flex mt-8 px-8 py-4 rounded-2xl bg-[#2F5D3F] text-white font-semibold hover:scale-105 transition"
        >
          Back To Home
        </Link>

      </div>
    </section>
  );
};

export default NotFound;