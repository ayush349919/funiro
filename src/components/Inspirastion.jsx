import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

import dining from "../assets/bg-1.jpg";
import living from "../assets/bg-2.jpg";
import bedroom from "../assets/bg-3.jpg";

export default function Inspiration() {
  const slides = [
    { id: 1, img: bedroom, title: "Inner Peace", category: "Bed Room" },
    { id: 2, img: living, title: "Modern Style", category: "Living Room" },
    { id: 3, img: dining, title: "Fine Dining", category: "Dining Room" },
    { id: 4, img: living, title: "Cozy Corner", category: "Lounge" },
  ];

  return (
    // Added dark:bg-[#121212] and transition
    <section className="bg-[#FCF8F3] dark:bg-[#121212] font-poppins py-10 md:py-16 overflow-hidden transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-end gap-10 lg:gap-0">

        {/* Left Content */}
        <div className="w-full lg:w-[35%] text-center lg:text-left px-6 md:px-10 lg:pl-20 lg:pr-10">
          {/* Added dark:text-white */}
          <h2 className="text-[24px] md:text-[32px] text-gray-800 dark:text-white font-extrabold leading-tight">
            50+ Beautiful rooms inspiration
          </h2>
          {/* Added dark:text-gray-400 */}
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
            Our designer already made a lot of beautiful prototype of rooms that inspire you.
          </p>
          <Link to='/shop'>
            <button className="text-white bg-[#B88E2F] px-6 py-2 rounded-sm mt-6 hover:bg-[#967324] transition-all font-semibold text-xs">
              Explore More
            </button>
          </Link>
        </div>

        {/* Right Swiper */}
        <div className="w-full lg:w-[65%] inspiration-slider translate-x-4 md:translate-x-10 lg:translate-x-20">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1.3}
            navigation={true}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 2.8 },
            }}
            className="h-[350px] md:h-[450px] pb-10"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className="relative group overflow-hidden rounded-md bg-white dark:bg-zinc-900">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                {/* Updated Overlay: bg-white/80 dark:bg-black/70 */}
                <div className="absolute bottom-10 left-3 bg-white/80 dark:bg-black/70 backdrop-blur-sm p-4 min-w-[150px] transition-colors">
                  <p className="text-gray-600 dark:text-gray-300 text-[12px] flex items-center gap-1">
                    0{slide.id} <span className="w-6 h-[1px] bg-gray-600 dark:bg-gray-400"></span> {slide.category}
                  </p>
                  <h3 className="text-sm md:text-lg font-bold text-gray-800 dark:text-white mt-1">{slide.title}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>{`
        /* Updated Swiper Buttons for Dark Mode */
        .inspiration-slider .swiper-button-next, 
        .inspiration-slider .swiper-button-prev {
          right: 10% !important;
          width: 40px;
          height: 40px;
          padding : 8px;
          background: white;
          border-radius: 50%;
          color: #B88E2F !important; /* Changed to match your theme gold */
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        } 

        /* Dark mode button adjustment via the data-theme attribute */
        [data-theme="dark"] .inspiration-slider .swiper-button-next,
        [data-theme="dark"] .inspiration-slider .swiper-button-prev {
          background: #333;
          color: #B88E2F !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.5);
        }

        .inspiration-slider .swiper-button-next:after,
        .inspiration-slider .swiper-button-prev:after {
          font-size: 16px;
          font-weight: bold;
        }

        .inspiration-slider .swiper-pagination-bullet {
          background: #d1d5db !important;
          opacity: 1;
          width: 10px;
          height: 10px;
        }

        .inspiration-slider .swiper-pagination-bullet-active {
          background: #B88E2F !important; /* Changed to match theme */
          outline: 1px solid #B88E2F;
          outline-offset: 4px;
        }

        @media (max-width: 1024px) {
            .inspiration-slider { transform: translateX(0); }
            .inspiration-slider .swiper-button-next { right: 5% !important; }
        }
      `}</style>
    </section>
  );
}
