import React from "react";
import {
  Search,
  Calendar,
  Users,
  MapPin,
  ChevronRight,
  Star,
  Coffee,
  Wifi,
  Wind,
  ShieldCheck,
} from "lucide-react";
// Assuming Footer is in the same directory
import Footer from "./footer";

export default function HotelWebsite() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* --- HERO SECTION --- */}
      <header className="relative min-h-[600px] lg:h-[700px] w-full p-2 md:p-4">
        <div className="absolute inset-0 m-2 md:m-4 overflow-hidden rounded-2xl md:rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover brightness-75"
            alt="The Grand Horizon Resort Exterior"
          />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between px-4 md:px-12 py-6 text-white">
          <div className="flex items-center gap-8">
            <h1 className="text-xl md:text-2xl font-bold tracking-tighter">THE GRAND HORIZON</h1>
            <div className="hidden lg:flex gap-6 text-sm font-medium">
              <a href="#rooms" className="hover:opacity-80 transition-opacity">Rooms</a>
              <a href="#dining" className="hover:opacity-80 transition-opacity">Dining</a>
              <a href="#amenities" className="hover:opacity-80 transition-opacity">Amenities</a>
              <a href="#offers" className="hover:opacity-80 transition-opacity">Special Offers</a>
              <a href="#contact" className="hover:opacity-80 transition-opacity">Contact</a>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <button className="bg-white text-black px-6 py-2 rounded-full text-xs md:text-sm font-bold hover:bg-slate-100 transition-colors">
              Book Now
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[500px] lg:h-[70%] px-4 text-white text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl leading-tight">
            A Sanctuary of <br />Refined Elegance
          </h2>
          <p className="mb-10 text-lg opacity-90 max-w-xl">Experience unparalleled luxury in the heart of the coast.</p>

          {/* Booking Bar (Transformed from Search Bar) */}
          <div className="bg-white rounded-2xl p-2 md:p-4 shadow-2xl flex flex-col lg:flex-row items-stretch lg:items-center gap-2 lg:gap-0 w-full max-w-5xl text-slate-500">
            {/* Dates */}
            <div className="flex-1 flex items-center gap-3 px-4 py-2 lg:py-0 border-b lg:border-b-0 lg:border-r border-slate-100">
              <Calendar size={20} className="text-slate-400 shrink-0" />
              <div className="text-left flex-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Check In - Out</p>
                <input
                  type="text"
                  placeholder="Select Dates"
                  className="outline-none text-slate-800 w-full bg-transparent font-medium"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="flex-1 flex items-center gap-3 px-4 py-2 lg:py-0 border-b lg:border-b-0 lg:border-r border-slate-100">
              <Users size={20} className="text-slate-400 shrink-0" />
              <div className="text-left flex-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Guests</p>
                <input
                  type="text"
                  placeholder="2 Adults, 0 Children"
                  className="outline-none text-slate-800 w-full bg-transparent font-medium"
                />
              </div>
            </div>

            {/* Promo Code */}
            <div className="flex-1 flex items-center gap-3 px-4 py-2 lg:py-0">
              <ShieldCheck size={20} className="text-slate-400 shrink-0" />
              <div className="text-left flex-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Promo Code</p>
                <input
                  type="text"
                  placeholder="Optional"
                  className="outline-none text-slate-800 w-full bg-transparent font-medium"
                />
              </div>
            </div>

            {/* Check Availability Button */}
            <button className="bg-slate-900 text-white p-4 lg:ml-2 rounded-xl flex items-center justify-center gap-2 px-8 hover:bg-slate-800 transition-colors">
              <span className="font-bold">Check Availability</span>
            </button>
          </div>
        </div>
      </header>

      {/* --- AMENITIES SECTION (Formerly Destination Types) --- */}
      <section id="amenities" className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12 text-center">
          <h3 className="text-3xl font-bold mb-2">The Guest Experience</h3>
          <p className="text-slate-500 max-w-2xl mx-auto">
            From our infinity pool to our Michelin-starred dining, every detail at The Grand Horizon is curated for your comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Oceanic Spa",
              desc: "World-class wellness treatments",
              img: "https://images.unsplash.com/photo-1544161515-4af6b1d462c2?auto=format&fit=crop&q=60",
            },
            {
              name: "Infinity Pool",
              desc: "Panoramic views of the Pacific",
              img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=60",
            },
            {
              name: "The Terrace Bar",
              desc: "Signature cocktails and sunset",
              img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=60",
            },
            {
              name: "Fitness Center",
              desc: "State-of-the-art equipment",
              img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=60",
            },
          ].map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                <img
                  src={item.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={item.name}
                />
              </div>
              <h4 className="font-bold text-lg">{item.name}</h4>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- ACCOMMODATIONS (Formerly Trending Hotels) --- */}
      <section id="rooms" className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h3 className="text-3xl font-bold mb-2">Refined Accommodations</h3>
              <p className="text-slate-500">Each room is a masterpiece of design and comfort.</p>
            </div>
            <button className="text-sm font-bold flex items-center gap-2 px-6 py-3 border-2 border-slate-900 rounded-full hover:bg-slate-900 hover:text-white transition-all">
              View All Suites <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ocean Front Suite",
                size: "85 sqm",
                price: "$650",
                img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=60",
              },
              {
                name: "Presidential Villa",
                size: "240 sqm",
                price: "$1,200",
                img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=60",
              },
              {
                name: "Deluxe King Room",
                size: "50 sqm",
                price: "$450",
                img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=60",
              },
            ].map((room, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={room.img}
                    className="w-full h-full object-cover"
                    alt={room.name}
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-xl">{room.name}</h4>
                    <span className="text-slate-400 text-sm font-medium">{room.size}</span>
                  </div>
                  <div className="flex gap-4 mb-6 text-slate-400">
                    <Wifi size={18} />
                    <Coffee size={18} />
                    <Wind size={18} />
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <p className="font-bold text-2xl">
                      {room.price}
                      <span className="text-sm font-normal text-slate-400"> /night</span>
                    </p>
                    <button className="font-bold text-sm underline underline-offset-4 hover:text-blue-600">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}