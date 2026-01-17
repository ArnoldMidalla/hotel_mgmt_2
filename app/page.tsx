import {
  Calendar,
  Users,
  ChevronRight,
  Coffee,
  Wifi,
  Wind,
  ShieldCheck,
} from "lucide-react";
import Footer from "./footer";
import Nav from "./nav";
import Image from "next/image";

export default function HotelWebsite() {
  const data = [
    {
      name: "Citrus Spa",
      desc: "Signature orange oil therapy",
      img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sunset Infinity Pool",
      desc: "Uninterrupted ocean views",
      img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=60",
    },
    {
      name: "The Zest Bar",
      desc: "Curated mixology & tapas",
      img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=60",
    },
    {
      name: "Elite Fitness",
      desc: "Private training sessions",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=60",
    },
  ];

  const data2 = [
    {
      name: "Sunset Suite",
      price: "$650",
      img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=60",
    },
    {
      name: "Golden Villa",
      price: "$1,200",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=60",
    },
    {
      name: "King Terrace Room",
      price: "$450",
      img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=60",
    },
  ];
  return (
    <div className="min-h-screen bg-white font-dmSans tracking-tight text-slate-900">
      <header className="relative min-h-150 lg:h-175 w-full p-2 md:p-4">
        <div className="absolute inset-0 m-2 md:m-4 overflow-hidden rounded-2xl md:rounded-3xl">
          <Image
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover brightness-75"
            alt="Golden Orange Gate Hotel Exterior"
            fill
          />
        </div>

        {/* Navigation */}
        <Nav />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-125 lg:h-[70%] px-4 text-white text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl leading-tight">
            The Warmth of <br />
            <span className="text-orange-400">Luxury</span> Redefined
          </h2>
          <p className="mb-10 text-lg opacity-90 max-w-xl">
            Experience the golden standard of hospitality at the Gate.
          </p>

          {/* Booking Bar */}
          <div className="bg-white rounded-2xl p-2 md:p-4 shadow-2xl flex flex-col lg:flex-row items-stretch lg:items-center gap-2 lg:gap-0 w-full max-w-5xl text-slate-500">
            {/* Dates */}
            <div className="flex-1 flex items-center gap-3 px-4 py-2 lg:py-0 border-b lg:border-b-0 lg:border-r border-slate-100">
              <Calendar size={20} className="text-orange-600 shrink-0" />
              <div className="text-left flex-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Check In - Out
                </p>
                <input
                  type="text"
                  placeholder="Select Dates"
                  className="outline-none text-slate-800 w-full bg-transparent font-medium"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="flex-1 flex items-center gap-3 px-4 py-2 lg:py-0 border-b lg:border-b-0 lg:border-r border-slate-100">
              <Users size={20} className="text-orange-600 shrink-0" />
              <div className="text-left flex-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Guests
                </p>
                <input
                  type="text"
                  placeholder="2 Adults"
                  className="outline-none text-slate-800 w-full bg-transparent font-medium"
                />
              </div>
            </div>

            {/* Promo */}
            <div className="flex-1 flex items-center gap-3 px-4 py-2 lg:py-0">
              <ShieldCheck size={20} className="text-orange-600 shrink-0" />
              <div className="text-left flex-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Promo Code
                </p>
                <input
                  type="text"
                  placeholder="Optional"
                  className="outline-none text-slate-800 w-full bg-transparent font-medium"
                />
              </div>
            </div>

            <button className="bg-orange-600 text-white p-4 lg:ml-2 rounded-xl flex items-center justify-center gap-2 px-8 hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/20">
              <span className="font-bold">Check Availability</span>
            </button>
          </div>
        </div>
      </header>

      {/* --- AMENITIES --- */}
      <section id="amenities" className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12 text-center">
          <span className="text-orange-600 font-bold tracking-widest text-xs uppercase">
            Welcome to Paradise
          </span>
          <h3 className="text-3xl font-bold mt-2 mb-2">
            The Golden Experience
          </h3>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-4 border-2 border-transparent group-hover:border-orange-500 transition-all">
                <Image
                  src={item.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={item.name}
                  fill
                />
              </div>
              <h4 className="font-bold text-lg group-hover:text-orange-600 transition-colors">
                {item.name}
              </h4>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- ACCOMMODATIONS --- */}
      <section id="rooms" className="bg-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h3 className="text-3xl font-bold mb-2">Orange Reserve Suites</h3>
              <p className="text-slate-600">
                Luxury tailored to your every whim.
              </p>
            </div>
            <button className="text-sm font-bold flex items-center gap-2 px-6 py-3 border-2 border-orange-600 text-orange-600 rounded-full hover:bg-orange-600 hover:text-white transition-all">
              Explore All Rooms <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data2.map((room, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-orange-100"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                    Best Seller
                  </div>
                  <Image
                    src={room.img}
                    className="w-full h-full object-cover"
                    alt={room.name}
                    fill
                  />
                </div>
                <div className="p-8">
                  <h4 className="font-bold text-xl mb-4">{room.name}</h4>
                  <div className="flex gap-4 mb-6 text-orange-600/60">
                    <Wifi size={18} /> <Coffee size={18} /> <Wind size={18} />
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <p className="font-bold text-2xl text-slate-800">
                      {room.price}
                      <span className="text-sm font-normal text-slate-400">
                        {" "}
                        /night
                      </span>
                    </p>
                    <button className="text-orange-600 font-bold text-sm hover:text-orange-700">
                      Book Suite
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

// "use client"
// import React, { useState, useEffect } from "react";
// import {
//   Star,
//   MapPin,
//   Award,
//   Users,
//   Wifi,
//   Coffee,
//   Dumbbell,
//   Waves,
//   ChevronLeft,
//   ChevronRight,
//   Check,
// } from "lucide-react";

// export default function HotelWebsite() {
//   const [scrolled, setScrolled] = useState(false);
//   const [activeTestimonial, setActiveTestimonial] = useState(0);
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [guests, setGuests] = useState(2);
//   const [isVisible, setIsVisible] = useState({});

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
//           }
//         });
//       },
//       { threshold: 0.1 },
//     );

//     document
//       .querySelectorAll('[id^="animate-"]')
//       .forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   const testimonials = [
//     {
//       name: "Sarah Mitchell",
//       location: "London, UK",
//       rating: 5,
//       text: "An absolutely stunning property. The attention to detail and personalized service exceeded all expectations. The infinity pool at sunset is simply magical.",
//       image:
//         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
//     },
//     {
//       name: "James Chen",
//       location: "Singapore",
//       rating: 5,
//       text: "Best hotel experience in Nigeria. The spa treatments are world-class, and the staff goes above and beyond. Already planning my next visit.",
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
//     },
//     {
//       name: "Maria Rodriguez",
//       location: "Barcelona, Spain",
//       rating: 5,
//       text: "From the moment we arrived, we felt like royalty. The Golden Villa suite is spectacular, and the dining options are exceptional. Highly recommend!",
//       image:
//         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
//     },
//   ];

//   const amenities = [
//     {
//       icon: <Wifi className="w-6 h-6" />,
//       title: "High-Speed WiFi",
//       desc: "Complimentary throughout",
//     },
//     {
//       icon: <Coffee className="w-6 h-6" />,
//       title: "Fine Dining",
//       desc: "3 world-class restaurants",
//     },
//     {
//       icon: <Dumbbell className="w-6 h-6" />,
//       title: "Fitness Center",
//       desc: "24/7 access",
//     },
//     {
//       icon: <Waves className="w-6 h-6" />,
//       title: "Infinity Pool",
//       desc: "Heated & panoramic",
//     },
//   ];

//   const whyChoose = [
//     {
//       title: "Clifftop Serenity",
//       desc: "Perched on Kaduna's most scenic cliffs with breathtaking panoramic views",
//     },
//     {
//       title: "Award-Winning Service",
//       desc: "Recognized by World Travel Awards for excellence in hospitality 2024",
//     },
//     {
//       title: "Culinary Excellence",
//       desc: "Chef-curated menus featuring local and international cuisine",
//     },
//     {
//       title: "Wellness Sanctuary",
//       desc: "Full-service spa with signature treatments using indigenous ingredients",
//     },
//   ];

//   const rooms = [
//     {
//       name: "Sunset Suite",
//       price: 650,
//       image:
//         "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
//       features: ["King Bed", "Ocean View", "45 sqm"],
//       bestSeller: true,
//     },
//     {
//       name: "Golden Villa",
//       price: 1200,
//       image:
//         "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
//       features: ["2 Bedrooms", "Private Pool", "120 sqm"],
//       bestSeller: true,
//     },
//     {
//       name: "King Terrace Room",
//       price: 450,
//       image:
//         "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop",
//       features: ["King Bed", "Terrace", "38 sqm"],
//       bestSeller: true,
//     },
//   ];

//   const nextTestimonial = () => {
//     setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setActiveTestimonial(
//       (prev) => (prev - 1 + testimonials.length) % testimonials.length,
//     );
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation */}
//       <nav
//         className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             <div className="flex items-center space-x-2">
//               <div className="text-2xl font-bold">
//                 <span className={scrolled ? "text-gray-900" : "text-white"}>
//                   GOLDEN{" "}
//                 </span>
//                 <span className="text-orange-500">ORANGE</span>
//                 <span className={scrolled ? "text-gray-900" : "text-white"}>
//                   {" "}
//                   GATE
//                 </span>
//               </div>
//             </div>
//             <div className="hidden md:flex space-x-8">
//               {["Rooms", "Dining", "Amenities", "Special Offers"].map(
//                 (item) => (
//                   <a
//                     key={item}
//                     href={`#${item.toLowerCase()}`}
//                     className={`transition-colors ${scrolled ? "text-gray-700 hover:text-orange-500" : "text-white hover:text-orange-300"}`}
//                   >
//                     {item}
//                   </a>
//                 ),
//               )}
//             </div>
//             <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
//               Book Now
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="relative h-screen">
//         <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60">
//           <img
//             src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1080&fit=crop"
//             alt="Luxury Hotel Pool"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="relative h-full flex items-center justify-center text-center px-4">
//           <div className="max-w-4xl animate-fade-in">
//             <div className="flex items-center justify-center space-x-2 mb-4">
//               <Award className="w-6 h-6 text-orange-500" />
//               <span className="text-orange-500 uppercase tracking-wider text-sm">
//                 World Travel Awards Winner 2024
//               </span>
//             </div>
//             <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
//               Where Nigeria's Natural Beauty Meets{" "}
//               <span className="text-orange-500">Timeless Luxury</span>
//             </h1>
//             <p className="text-xl text-gray-200 mb-8">
//               An exclusive clifftop sanctuary offering unparalleled views,
//               world-class amenities, and authentic Nigerian hospitality
//             </p>
//             <div className="flex items-center justify-center space-x-1 mb-8">
//               {[...Array(5)].map((_, i) => (
//                 <Star
//                   key={i}
//                   className="w-6 h-6 fill-orange-500 text-orange-500"
//                 />
//               ))}
//               <span className="ml-3 text-white text-lg">
//                 4.9 / 5 from 1,247 reviews
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Booking Widget */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-4">
//           <div className="bg-white rounded-2xl shadow-2xl p-6">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Check In
//                 </label>
//                 <input
//                   type="date"
//                   value={checkIn}
//                   onChange={(e) => setCheckIn(e.target.value)}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Check Out
//                 </label>
//                 <input
//                   type="date"
//                   value={checkOut}
//                   onChange={(e) => setCheckOut(e.target.value)}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Guests
//                 </label>
//                 <select
//                   value={guests}
//                   onChange={(e) => setGuests(Number(e.target.value))}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 >
//                   {[1, 2, 3, 4, 5, 6].map((n) => (
//                     <option key={n} value={n}>
//                       {n} {n === 1 ? "Adult" : "Adults"}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
//                 Check Availability
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Trust Signals */}
//       <div className="bg-gray-50 py-8">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             <div>
//               <div className="text-3xl font-bold text-orange-500">1,247+</div>
//               <div className="text-gray-600 mt-1">5-Star Reviews</div>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-orange-500">98%</div>
//               <div className="text-gray-600 mt-1">Guest Satisfaction</div>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-orange-500">Award</div>
//               <div className="text-gray-600 mt-1">Winning Service</div>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-orange-500">24/7</div>
//               <div className="text-gray-600 mt-1">Concierge Support</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Why Choose Us */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div
//             id="animate-why"
//             className={`text-center mb-16 transition-all duration-1000 ${isVisible["animate-why"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//           >
//             <span className="text-orange-500 uppercase tracking-wider text-sm font-semibold">
//               Why Golden Orange Gate
//             </span>
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
//               The Golden Standard of Excellence
//             </h2>
//           </div>
//           <div className="grid md:grid-cols-2 gap-8">
//             {whyChoose.map((item, idx) => (
//               <div
//                 key={idx}
//                 id={`animate-why-${idx}`}
//                 className={`flex space-x-4 p-6 rounded-xl hover:bg-gray-50 transition-all duration-500 ${isVisible[`animate-why-${idx}`] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
//                 style={{ transitionDelay: `${idx * 100}ms` }}
//               >
//                 <div className="flex-shrink-0">
//                   <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
//                     <Check className="w-6 h-6 text-orange-500" />
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-600">{item.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Amenities Showcase */}
//       <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div
//             id="animate-amenities"
//             className={`text-center mb-16 transition-all duration-1000 ${isVisible["animate-amenities"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//           >
//             <span className="text-orange-500 uppercase tracking-wider text-sm font-semibold">
//               World-Class Facilities
//             </span>
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
//               The Golden Experience
//             </h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop",
//                 title: "Citrus Spa",
//                 desc: "Signature orange oil therapy",
//               },
//               {
//                 img: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=600&h=400&fit=crop",
//                 title: "Sunset Infinity Pool",
//                 desc: "Unobstructed cliff views",
//               },
//               {
//                 img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=400&fit=crop",
//                 title: "The Zest Bar",
//                 desc: "Curated mixology & tapas",
//               },
//               {
//                 img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
//                 title: "Elite Fitness",
//                 desc: "Private training sessions",
//               },
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 id={`animate-amenity-${idx}`}
//                 className={`group cursor-pointer transition-all duration-500 ${isVisible[`animate-amenity-${idx}`] ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
//                 style={{ transitionDelay: `${idx * 100}ms` }}
//               >
//                 <div className="relative overflow-hidden rounded-2xl shadow-lg">
//                   <img
//                     src={item.img}
//                     alt={item.title}
//                     className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
//                     <h3 className="text-white text-xl font-bold mb-1">
//                       {item.title}
//                     </h3>
//                     <p className="text-gray-200 text-sm">{item.desc}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Quick Amenities Grid */}
//       <section className="py-12 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {amenities.map((amenity, idx) => (
//               <div
//                 key={idx}
//                 className="flex flex-col items-center text-center p-4"
//               >
//                 <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mb-3">
//                   {amenity.icon}
//                 </div>
//                 <h4 className="font-semibold text-gray-900">{amenity.title}</h4>
//                 <p className="text-sm text-gray-600 mt-1">{amenity.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Rooms Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex justify-between items-end mb-12">
//             <div>
//               <span className="text-orange-500 uppercase tracking-wider text-sm font-semibold">
//                 Orange Reserve Suites
//               </span>
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
//                 Luxury Tailored to Every Whim
//               </h2>
//             </div>
//             <button className="hidden md:block text-orange-500 border border-orange-500 px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-colors">
//               Explore All Rooms →
//             </button>
//           </div>
//           <div className="grid md:grid-cols-3 gap-8">
//             {rooms.map((room, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
//               >
//                 <div className="relative">
//                   {room.bestSeller && (
//                     <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold z-10">
//                       Best Seller
//                     </div>
//                   )}
//                   <img
//                     src={room.image}
//                     alt={room.name}
//                     className="w-full h-64 object-cover"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-3">
//                     {room.name}
//                   </h3>
//                   <div className="flex space-x-2 mb-4">
//                     {room.features.map((feature, i) => (
//                       <span
//                         key={i}
//                         className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
//                       >
//                         {feature}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <div>
//                       <span className="text-3xl font-bold text-gray-900">
//                         ${room.price}
//                       </span>
//                       <span className="text-gray-600">/night</span>
//                     </div>
//                     <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
//                       Book Suite
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20 bg-white">
//         <div className="max-w-5xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <span className="text-orange-500 uppercase tracking-wider text-sm font-semibold">
//               Guest Experiences
//             </span>
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
//               What Our Guests Say
//             </h2>
//           </div>
//           <div className="relative">
//             <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
//               <div className="flex items-start space-x-6">
//                 <img
//                   src={testimonials[activeTestimonial].image}
//                   alt={testimonials[activeTestimonial].name}
//                   className="w-20 h-20 rounded-full object-cover flex-shrink-0"
//                 />
//                 <div className="flex-1">
//                   <div className="flex space-x-1 mb-4">
//                     {[...Array(testimonials[activeTestimonial].rating)].map(
//                       (_, i) => (
//                         <Star
//                           key={i}
//                           className="w-5 h-5 fill-orange-500 text-orange-500"
//                         />
//                       ),
//                     )}
//                   </div>
//                   <p className="text-gray-700 text-lg mb-6 italic">
//                     "{testimonials[activeTestimonial].text}"
//                   </p>
//                   <div>
//                     <div className="font-bold text-gray-900">
//                       {testimonials[activeTestimonial].name}
//                     </div>
//                     <div className="text-gray-600 flex items-center mt-1">
//                       <MapPin className="w-4 h-4 mr-1" />
//                       {testimonials[activeTestimonial].location}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <button
//               onClick={prevTestimonial}
//               className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </button>
//             <button
//               onClick={nextTestimonial}
//               className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
//             >
//               <ChevronRight className="w-6 h-6" />
//             </button>
//           </div>
//           <div className="flex justify-center space-x-2 mt-8">
//             {testimonials.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setActiveTestimonial(idx)}
//                 className={`w-3 h-3 rounded-full transition-colors ${idx === activeTestimonial ? "bg-orange-500" : "bg-gray-300"}`}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Location */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <span className="text-orange-500 uppercase tracking-wider text-sm font-semibold">
//                 Our Location
//               </span>
//               <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
//                 Perched Above Kaduna's Natural Splendor
//               </h2>
//               <p className="text-gray-600 mb-6">
//                 Located on the cliffs of Kaduna, we offer an unparalleled escape
//                 into luxury. Our position provides breathtaking views while
//                 maintaining easy access to the city's cultural attractions,
//                 business districts, and natural wonders.
//               </p>
//               <div className="space-y-4">
//                 <div className="flex items-start space-x-3">
//                   <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
//                   <div>
//                     <div className="font-semibold text-gray-900">
//                       15 minutes from Kaduna International Airport
//                     </div>
//                     <div className="text-gray-600 text-sm">
//                       Complimentary luxury transfers available
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
//                   <div>
//                     <div className="font-semibold text-gray-900">
//                       Walking distance to local markets & cultural sites
//                     </div>
//                     <div className="text-gray-600 text-sm">
//                       Experience authentic Nigerian heritage
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="rounded-2xl overflow-hidden shadow-2xl h-96">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.0!2d7.4!3d10.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDMwJzAwLjAiTiA3wrAyNCcwMC4wIkU!5e0!3m2!1sen!2sng!4v1234567890"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Ready to Experience the Golden Standard?
//           </h2>
//           <p className="text-xl text-orange-100 mb-8">
//             Book your stay today and discover why we're Nigeria's premier luxury
//             destination
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//             <button className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg">
//               Book Your Stay
//             </button>
//             <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-500 transition-colors text-lg">
//               Take a Virtual Tour
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <div className="text-2xl font-bold mb-4">
//                 GOLDEN <span className="text-orange-500">ORANGE</span> GATE
//               </div>
//               <p className="text-gray-400 mb-4">
//                 Located on the cliffs of Kaduna, we offer an unparalleled escape
//                 into luxury, comfort, and natural beauty.
//               </p>
//             </div>
//             <div>
//               <h3 className="font-semibold mb-4">Explore</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <li>
//                   <a href="#" className="hover:text-orange-500">
//                     Fine Dining
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-orange-500">
//                     Wellness & Spa
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-orange-500">
//                     Private Events
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-orange-500">
//                     Gallery
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold mb-4">Contact</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <li>Kaduna Cliffs, Nigeria</li>
//                 <li>+234 800 GOLDEN</li>
//                 <li>stay@goldenorangegate.com</li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold mb-4">Newsletter</h3>
//               <p className="text-gray-400 mb-4">
//                 Receive exclusive offers and resort updates
//               </p>
//               <div className="flex">
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   className="flex-1 px-4 py-2 rounded-l-full bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500"
//                 />
//                 <button className="bg-orange-500 px-6 py-2 rounded-r-full hover:bg-orange-600 transition-colors">
//                   Join
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
