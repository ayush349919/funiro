import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

export default function Inspiration() {
  return (
    <>
      <section className="bg-bas min-h-167.5 flex flex-col justify-center font-poppins">
        <div className="flex items-center justify-center  gap-10 ps-20">

          {/* Left Content */}
          <div className="w-[35%]">
            <h2 className="text-[45px] text-base-content font-extrabold">
              50+ Beautiful rooms inspiration
            </h2>

            <p className=" text-base-content max-w-xl">
              Our designer already made a lot of beautiful prototype of rooms that inspire you.
            </p>

            <Link to='/shop'>
            <button className="text-white bg-normal p-2 rounded-md mt-6">
              Explore More
            </button>
            </Link>
          </div>

          {/* Right Swiper */}
          <div className="w-[65%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
            >
              <SwiperSlide className="bg-base-100 h-64 flex items-center justify-center">
                Slide 1
              </SwiperSlide>

              <SwiperSlide className="bg-base-100 h-64 flex items-center justify-center">
                Slide 2
              </SwiperSlide>

              <SwiperSlide className="bg-base-100 h-64 flex items-center justify-center">
                Slide 3
              </SwiperSlide>

              <SwiperSlide className="bg-base-100 h-64 flex items-center justify-center">
                Slide 4
              </SwiperSlide>
            </Swiper>
          </div>

        </div>
      </section>
    </>
  )
}