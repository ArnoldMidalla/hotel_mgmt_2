export default function Nav() {
  return (
    <nav className="relative z-10 flex items-center justify-between px-4 md:px-12 py-6 text-white">
      <div className="flex items-center gap-8">
        <h1 className="text-xl md:text-2xl font-bold tracking-tighter">
          GOLDEN <span className="text-orange-400">ORANGE</span> GATE
        </h1>
        <div className="hidden lg:flex gap-6 text-sm font-medium">
          <a href="#rooms" className="hover:text-orange-400 transition-colors">
            Rooms
          </a>
          <a href="#dining" className="hover:text-orange-400 transition-colors">
            Dining
          </a>
          <a
            href="#amenities"
            className="hover:text-orange-400 transition-colors"
          >
            Amenities
          </a>
          <a href="#offers" className="hover:text-orange-400 transition-colors">
            Special Offers
          </a>
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <button className="bg-orange-600 text-white px-6 py-2 rounded-full text-xs md:text-sm font-bold hover:bg-orange-500 transition-colors shadow-lg shadow-orange-900/20">
          Book Now
        </button>
      </div>
    </nav>
  );
}
