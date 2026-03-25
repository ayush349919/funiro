import heroBackground from "../assets/hero-bg.jpg";
import {Link} from "react-router-dom"
export default function Hero() {
  return (
    <section
      className="bg-cover bg-center min-h-190 font-poppins flex items-center justify-end px-20"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="bg-[#FFF3E3] p-12 max-w-xl">

        <p className="text-sm font-semibold tracking-widest text-gray-700 uppercase">
          New Arrival
        </p>

        <h1 className="text-5xl font-bold text-normal leading-tight mt-3">
          Discover Our <br />
          New Collection
        </h1>

        <p className="text-gray-600 mt-4 text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ut elit tellus, luctus nec ullamcorper mattis.
        </p>

        <Link to="/shop">
        <button className="btn btn-lg text-sm mt-8 bg-normal text-white px-8 py-4 font-semibold">
          BUY NOW
        </button>
        </Link>

      </div>
    </section>
  );
}