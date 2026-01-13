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
