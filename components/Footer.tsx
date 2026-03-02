"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();

    if (pathname === "/login" || pathname === "/register") {
        return null;
    }

    return (
        <footer className="bg-gray-950 text-white border-t border-gray-800 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm font-black">T</span>
                            <span className="text-xl font-bold">Tobiez Sneaker</span>
                        </div>
                        <p className="text-gray-400 text-sm max-w-xs">
                            The premier destination for sneaker enthusiasts. Authentic products, exclusive drops, and a community of style.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Icons placeholder */}
                            <div className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-colors cursor-pointer text-gray-400">
                                f
                            </div>
                            <div className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-colors cursor-pointer text-gray-400">
                                in
                            </div>
                            <div className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-colors cursor-pointer text-gray-400">
                                X
                            </div>
                        </div>
                    </div>

                    {/* Shop */}
                    <div>
                        <h4 className="font-bold mb-4">SHOP</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Upcoming Drops</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-bold mb-4">SUPPORT</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Returns & Exchanges</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Order Tracker</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold mb-4">CONTACT US</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start gap-2">
                                <span className="mt-0.5">📍</span>
                                <span>71B Nguyen Thai Hoc Street, Quy Nhon ward, Gia Lai province</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>📞</span>
                                <span>0842 217 217</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>✉️</span>
                                <span>tobiezsneakersupport@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>© 2026 Tobiez Sneaker. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
