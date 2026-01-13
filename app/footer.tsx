import { Instagram, Twitter, Facebook, Waves } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-slate-900 p-2 rounded-lg">
                <Waves className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold">Golden Orange Gate Hotel</span>
            </div>
            <p className="text-orange-500 max-w-sm mb-8">
              Located on the cliffs of Kaduna, we offer an
              unparalleled escape into luxury, comfort, and natural beauty.
            </p>
            <div className="flex gap-4">
              <div className="p-3 bg-orange-100 rounded-full hover:bg-orange-200 cursor-pointer transition-colors">
                <Instagram size={20} />
              </div>
              <div className="p-3 bg-orange-100 rounded-full hover:bg-orange-200 cursor-pointer transition-colors">
                <Twitter size={20} />
              </div>
              <div className="p-3 bg-orange-100 rounded-full hover:bg-orange-200 cursor-pointer transition-colors">
                <Facebook size={20} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-orange-400 font-medium">
              <li className="hover:text-orange-600 cursor-pointer transition-colors duration-200">
                Fine Dining
              </li>
              <li className="hover:text-orange-600 cursor-pointer transition-colors duration-200">
                Wellness & Spa
              </li>
              <li className="hover:text-orange-600 cursor-pointer transition-colors duration-200">
                Private Events
              </li>
              <li className="hover:text-orange-600 cursor-pointer transition-colors duration-200">
                Gallery
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-orange-500 mb-4">
              Receive exclusive offers and resort updates.
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="Your Email"
                className="w-full bg-orange-50 border border-orange-200 rounded-xl px-4 py-4 text-sm outline-none focus:ring-2 focus:ring-orange-900/5 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-orange-900 text-white px-4 rounded-lg text-xs font-bold">
                JOIN
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-orange-100 flex flex-col md:row justify-between items-center gap-4 text-orange-400 text-xs font-medium">
          <p>© 2026 Orange Golden Gate Hotel. All rights reserved.</p>
          <div className="flex gap-8">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
