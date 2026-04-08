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
    <section className="bg-[#FCF8F3] font-poppins py-10 md:py-16 overflow-hidden">
      {/* Container with justify-end for desktop */}
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-end gap-10 lg:gap-0">

        {/* Left Content - Pushed to left with padding */}
        <div className="w-full lg:w-[35%] text-center lg:text-left px-6 md:px-10 lg:pl-20 lg:pr-10">
          <h2 className="text-[24px] md:text-[32px] text-gray-800 font-extrabold leading-tight">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="text-gray-600 text-sm mt-4">
            Our designer already made a lot of beautiful prototype of rooms that inspire you.
          </p>
          <Link to='/shop'>
            <button className="text-white bg-[#B88E2F] px-6 py-2 rounded-sm mt-6 hover:bg-[#967324] transition-all font-semibold text-xs">
              Explore More
            </button>
          </Link>
        </div>

        {/* Right Swiper - Fixed to the right corner */}
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
              1024: { slidesPerView: 2.8 }, // Smaller images pushed to right
            }}
            className="h-[300px] md:h-[400px]" 
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className="relative group overflow-hidden rounded-md bg-white">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-3 bg-white/80 backdrop-blur-sm p-3 min-w-[120px]">
                  <p className="text-gray-600 text-[10px] flex items-center gap-1">
                    0{slide.id} <span className="w-4 h-[1px] bg-gray-600"></span> {slide.category}
                  </p>
                  <h3 className="text-xs md:text-sm font-bold text-gray-800 mt-1">{slide.title}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>{`
        .inspiration-slider .swiper-button-next {
          right: 15% !important; /* Move button inward from corner */
          width: 35px;
          height: 35px;
          background: white;
          border-radius: 50%;
          color: #B88E2F;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        @media (max-width: 1024px) {
            .inspiration-slider { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
