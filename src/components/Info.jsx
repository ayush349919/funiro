import React from 'react';
import aboutImage from "../assets/hero-bg.jpg"; // Aap apni koi bhi achhi image use kar sakte hain
import { Link } from 'react-router-dom';

export default function Info() {
  return (
    <section className="font-poppins overflow-hidden">
      {/* --- Main Banner Section --- */}
      <div className="bg-[#F9F1E7] py-16 md:py-24 px-6 md:px-20 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h4 className="text-[#B88E2F] font-bold tracking-[0.2em] uppercase text-sm">Our Story</h4>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Crafting Elegance <br /> For Your Home
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
            Furniro has been a leader in the furniture industry for over a decade. 
            We believe that every piece of furniture should tell a story of comfort, 
            quality, and timeless design. Our mission is to transform houses into homes.
          </p>
          <div className="pt-4">
             <Link to="/shop">
                <button className="bg-[#B88E2F] text-white px-10 py-4 font-semibold rounded-sm hover:bg-[#967324] transition-all shadow-lg">
                    View Collections
                </button>
             </Link>
          </div>
        </div>

        {/* Right Side: Image with Decorative Border */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={aboutImage} 
              alt="About Furniro" 
              className="w-full h-[300px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Decorative Square (Furniro style) */}
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#B88E2F] opacity-20 -z-0 hidden md:block rounded-2xl"></div>
        </div>
      </div>

      {/* --- Stats / Features Section --- */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center space-y-3 p-8 border border-gray-100 rounded-3xl hover:shadow-xl transition-all">
            <h3 className="text-4xl font-black text-[#B88E2F]">10+</h3>
            <p className="font-bold text-gray-800">Years Experience</p>
            <p className="text-sm text-gray-500">Delivering quality furniture worldwide with excellence.</p>
          </div>
          <div className="text-center space-y-3 p-8 border border-gray-100 rounded-3xl hover:shadow-xl transition-all">
            <h3 className="text-4xl font-black text-[#B88E2F]">50k+</h3>
            <p className="font-bold text-gray-800">Happy Customers</p>
            <p className="text-sm text-gray-500">Trusted by thousands of families for their interior needs.</p>
          </div>
          <div className="text-center space-y-3 p-8 border border-gray-100 rounded-3xl hover:shadow-xl transition-all">
            <h3 className="text-4xl font-black text-[#B88E2F]">15+</h3>
            <p className="font-bold text-gray-800">Global Outlets</p>
            <p className="text-sm text-gray-500">Physical stores across major cities for direct experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
