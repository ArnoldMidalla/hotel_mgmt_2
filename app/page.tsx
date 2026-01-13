"use client"

import { Search, MapPin, Calendar, Users, ArrowRight, Heart, Star, Phone, Mail, ChevronRight, Globe, Menu, Wifi, Coffee, Utensils, Wind } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("Rooms");

  const sections = ["Rooms", "Suites", "Amenities", "Dining"];

  const rooms = [
    { name: "Deluxe Room", size: "32 m²", capacity: "2 guests", price: 280, oldPrice: 350, image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop", features: ["King Bed", "City View", "WiFi"] },
    { name: "Executive Suite", size: "45 m²", capacity: "2-3 guests", price: 420, oldPrice: 500, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop", features: ["King Bed", "Ocean View", "Balcony"] },
    { name: "Premium Room", size: "28 m²", capacity: "2 guests", price: 195, oldPrice: 250, image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop", features: ["Queen Bed", "Garden View", "WiFi"] },
    { name: "Penthouse Suite", size: "85 m²", capacity: "4 guests", price: 650, oldPrice: 820, image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop", features: ["2 Bedrooms", "Panoramic View", "Private Terrace"] },
  ];

  const amenities = [
    { name: "Free WiFi", icon: Wifi, description: "High-speed internet throughout" },
    { name: "Restaurant", icon: Utensils, description: "Award-winning cuisine" },
    { name: "Room Service", icon: Coffee, description: "24/7 availability" },
    { name: "Climate Control", icon: Wind, description: "Perfect temperature year-round" },
  ];

  const gallery = [
    { title: "Lobby", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop" },
    { title: "Pool", image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop" },
    { title: "Spa", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop" },
    { title: "Restaurant", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 lg:px-12 py-4 bg-card border-b border-border">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">H</span>
            </div>
            <span className="font-semibold text-lg">Hotel Horizone</span>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            {["Rooms", "Amenities", "Dining", "Gallery", "Contact"].map((item) => (
              <button key={item} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">+1 (555) 123-4567</span>
          </button>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
            Book Now
          </button>
          <button className="lg:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <div className="px-6 lg:px-12 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Hero Section */}
            <div className="relative rounded-2xl overflow-hidden h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop"
                alt="Hotel Horizone"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2 text-yellow-400 mb-2">
                  <Star className="w-5 h-5 fill-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400" />
                  <span className="text-white ml-2">5.0 (2,341 reviews)</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  Hotel Horizone
                </h1>
                <p className="text-white/90 text-lg mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  123 Ocean Drive, Miami Beach, Florida
                </p>
                
                {/* Booking Box */}
                <div className="bg-card rounded-xl p-4 shadow-lg">
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                      <Calendar className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Check-in</p>
                        <p className="text-sm font-medium">Select date</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                      <Calendar className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Check-out</p>
                        <p className="text-sm font-medium">Select date</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                      <Users className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Guests</p>
                        <p className="text-sm font-medium">1 guest, 1 room</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm text-muted-foreground">Room Type:</span>
                      {sections.map((section) => (
                        <button
                          key={section}
                          onClick={() => setActiveSection(section)}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                            activeSection === section
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-secondary text-foreground hover:bg-muted'
                          }`}
                        >
                          {section}
                        </button>
                      ))}
                    </div>
                    <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition-opacity">
                      Check Availability
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Welcome to Hotel Horizone</h2>
              <p className="text-muted-foreground mb-4">
                Experience luxury and comfort at Hotel Horizone, where every detail is designed to make your stay unforgettable. Located in the heart of Miami Beach, our hotel offers stunning ocean views, world-class amenities, and exceptional service.
              </p>
              <p className="text-muted-foreground">
                Whether you're here for business or pleasure, our elegant rooms and suites provide the perfect retreat. Enjoy our rooftop pool, award-winning restaurant, and state-of-the-art fitness center during your stay.
              </p>
            </div>

            {/* Rooms & Suites */}
            <div>
              <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Our Rooms & Suites</h2>
              <p className="text-muted-foreground mb-6">Choose from our selection of beautifully appointed accommodations.</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {rooms.map((room) => (
                  <div key={room.name} className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow group">
                    <div className="relative h-36">
                      <img src={room.image} alt={room.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-3">
                      <h3 className="font-semibold text-sm mb-1">{room.name}</h3>
                      <p className="text-xs text-muted-foreground mb-2">{room.size} • {room.capacity}</p>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {room.features.map((feature) => (
                          <span key={feature} className="text-xs bg-secondary px-2 py-0.5 rounded-full">{feature}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold">${room.price}</span>
                        <span className="text-sm text-muted-foreground line-through">${room.oldPrice}</span>
                        <span className="text-xs text-muted-foreground">/night</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>Hotel Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {gallery.map((item) => (
                  <div key={item.title} className="relative rounded-xl overflow-hidden h-40 group cursor-pointer">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-semibold">{item.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Special Offer */}
            <div className="bg-primary text-primary-foreground rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-3 right-3 bg-yellow-400 text-primary px-2 py-1 rounded-full text-xs font-medium">
                Limited Time Offer
              </div>
              <div className="pt-6">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">%</span>
                </div>
                <h3 className="text-lg font-semibold mb-1">Book Direct & Save</h3>
                <p className="text-sm opacity-80 mb-2">Exclusive discount</p>
                <div className="text-5xl font-bold mb-2">25%</div>
                <p className="text-xs opacity-70 mb-4">Off your stay when you book directly</p>
                <button className="bg-white text-primary px-4 py-2 rounded-lg font-medium text-sm w-full hover:bg-opacity-90 transition-opacity">
                  Book Now
                </button>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Hotel Amenities</h3>
              <div className="space-y-4">
                {amenities.map((amenity) => (
                  <div key={amenity.name} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <amenity.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{amenity.name}</h4>
                      <p className="text-xs text-muted-foreground">{amenity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 text-sm font-medium flex items-center gap-1 text-primary hover:gap-2 transition-all">
                View All Amenities <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Contact Info */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">+1 (555) 123-4567</p>
                    <p className="text-xs text-muted-foreground">24/7 reception</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">info@hotelhorizone.com</p>
                    <p className="text-xs text-muted-foreground">We reply within 24h</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">123 Ocean Drive</p>
                    <p className="text-xs text-muted-foreground">Miami Beach, FL 33139</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Card */}
            <div className="relative rounded-2xl overflow-hidden h-48">
              <img
                src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=400&fit=crop"
                alt="Experience"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <p className="text-white text-lg italic" style={{ fontFamily: 'var(--font-display)' }}>
                  "Where luxury meets comfort, and memories are made"
                </p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-primary text-primary-foreground rounded-2xl p-6">
              <h4 className="font-semibold mb-2">Stay Updated</h4>
              <p className="text-sm opacity-80 mb-4">Subscribe for exclusive offers and updates</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 rounded-lg px-3 py-2 text-sm flex-1 placeholder:text-white/50"
                />
                <button className="bg-white text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-opacity">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;