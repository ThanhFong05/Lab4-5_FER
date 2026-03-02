import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Truck, Lock, PhoneCall } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-[#f8f9fa] pt-12 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-medium text-gray-600 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                NEW SUMMER DROP AVAILABLE
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
                Step into the <br />
                Future of <span className="text-gray-500">Style</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                Discover the latest sneaker drops from top brands including Nike, Adidas, and New Balance. Limited stock available for the true connoisseur.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button className="h-12 px-8 rounded-full bg-gray-950 text-white hover:bg-gray-800 text-base">
                  <ShoppingCartIcon className="w-4 h-4 mr-2" /> Shop Now
                </Button>
                <Button variant="outline" className="h-12 px-8 rounded-full border-gray-300 bg-white hover:bg-gray-50 text-base font-medium">
                  Explore Collection
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200/60 max-w-md">
                <div>
                  <p className="text-2xl font-bold text-gray-900">500+</p>
                  <p className="text-xs font-medium text-gray-500 tracking-wider uppercase mt-1">New Styles</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">24h</p>
                  <p className="text-xs font-medium text-gray-500 tracking-wider uppercase mt-1">Fast Shipping</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">4.9</p>
                  <p className="text-xs font-medium text-gray-500 tracking-wider uppercase mt-1">User Rating</p>
                </div>
              </div>
            </div>

            {/* Right Content / Image Card */}
            <div className="relative lg:h-[600px] flex items-center justify-center">
              {/* Background abstract shape */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-50 rounded-full blur-3xl opacity-50 transform translate-x-10 translate-y-10"></div>

              {/* Tilted Card */}
              <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute top-4 right-4 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center shadow-sm">
                  <HeartIcon className="w-5 h-5 text-gray-400" />
                </div>
                <img
                  src="https://i.pinimg.com/736x/8e/ee/ab/8eeeabde22a51cbd0d204215e77939f5.jpg"
                  alt="Premium Sneaker"
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="absolute bottom-6 left-6 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border shadow-sm text-xs font-semibold text-gray-700">
                  <CheckCircleIcon className="w-3.5 h-3.5 text-green-500" />
                  In Stock
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-3">Why choose Tobiez Sneaker?</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Experience Premium Footwear</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-16">
            We combine style, comfort, and authenticity to bring you the best sneaker shopping experience.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 border border-gray-100">
                <ShieldCheck className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Authenticity Guaranteed</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Every pair is verified by our expert team to ensure 100% genuine products.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 border border-gray-100">
                <Truck className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Shipping</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Global express delivery options to get your kicks to you in record time.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 border border-gray-100">
                <Lock className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Secure Payment</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Encrypted transactions and multiple payment gateways for your peace of mind.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 border border-gray-100">
                <PhoneCall className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Dedicated support team ready to assist you with any questions anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-[#fafafa] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Shop by <span className="text-gray-500">Brand</span></h2>
          <p className="text-sm text-gray-500 mb-10">Explore our collection from top sneaker brands</p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {/* Added IDs for scrolling */}
            {[
              "Nike",
              "Adidas",
              "Puma",
              "New Balance",
              "Converse",
              "Vans",
              "Asics"
            ].map((brand) => (
              <div key={brand} className="group cursor-pointer">
                <div className="w-36 h-16 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:bg-gray-900 transition-all transform group-hover:-translate-y-1 group-hover:shadow-md">
                  <span className="font-black text-lg tracking-wider text-gray-800 group-hover:text-white transition-colors uppercase">{brand}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Shop <span className="text-gray-500">Now</span></h2>
              <p className="text-gray-500 text-sm">The most sought-after styles this week</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="h-full">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

// Minimal Icons for Hero (since I can't import randomly without knowing what's available, I'll draw simple SVGs or use standard lucide ones if I know them. Just gonna write inline SVGs for these two to be safe if they aren't imported)
function ShoppingCartIcon(props: any) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function HeartIcon(props: any) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

function CheckCircleIcon(props: any) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}