import heroBackground from "../assets/hero-bg.jpg";
import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section
      className="bg-cover bg-center min-h-[500px] md:min-h-[716px] font-poppins flex items-center justify-center md:justify-end px-4 md:px-20 transition-colors duration-300"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* 
          Container: 
          - Added dark:bg-[#1A1A1A] (Deep charcoal) 
          - Added dark:shadow-none (Shadows look weird on dark bg)
      */}
      <div className="bg-[#FFF3E3] dark:bg-[#1A1A1A] p-6 md:p-12 w-full max-w-[90%] md:max-w-xl rounded-md shadow-sm transition-colors duration-300">

        {/* Added dark:text-gray-300 */}
        <p className="text-xs md:text-sm font-semibold tracking-widest text-gray-700 dark:text-gray-300 uppercase">
          New Arrival
        </p>

        {/* Heading: Kept gold as it works well on both, but added dark:text-[#D4A744] for a slightly brighter gold on dark bg */}
        <h1 className="text-3xl md:text-5xl font-bold text-[#B88E2F] dark:text-[#D4A744] leading-tight mt-2 md:mt-3">
          Discover Our <br className="hidden sm:block" />
          New Collection
        </h1>

        {/* Added dark:text-gray-400 */}
        <p className="text-gray-600 dark:text-gray-400 mt-3 md:mt-4 text-sm md:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ut elit tellus, luctus nec ullamcorper mattis.
        </p>

        <Link to="/shop">
          <button className="w-full sm:w-auto rounded-sm md:rounded-md text-xs md:text-sm mt-6 md:mt-8 bg-[#B88E2F] dark:bg-[#D4A744] text-white px-8 md:px-12 py-3 md:py-4 font-semibold hover:bg-[#967324] dark:hover:bg-[#B88E2F] transition-all uppercase tracking-widest">
            BUY NOW
          </button>
        </Link>
      </div>
    </section>
  );
}
