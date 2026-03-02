"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X, User } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
    const { getCartCount } = useCart();
    const { user, signOut } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const cartCount = getCartCount();

    if (pathname === "/login" || pathname === "/register") {
        return null;
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="border-b border-gray-800 bg-gray-950 text-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex md:grid md:grid-cols-3 justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center justify-self-start">
                        <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm font-black">T</span>
                            Tobiez
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center justify-center justify-self-center space-x-8">
                        <Link href="/" className="text-gray-300 hover:text-white transition-colors font-medium">Home</Link>
                        <Link href="#" className="text-gray-300 hover:text-white transition-colors font-medium">Shop</Link>
                        <Link href="#" className="text-gray-300 hover:text-white transition-colors font-medium">New Arrivals</Link>
                        <Link href="#" className="text-gray-300 hover:text-white transition-colors font-medium">About Us</Link>
                    </div>

                    {/* Desktop Right Side (Auth & Cart) */}
                    <div className="hidden md:flex items-center space-x-4 justify-self-end">
                        {user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="relative h-8 w-8 rounded-full text-white hover:bg-gray-800">
                                        <User className="h-5 w-5" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56" align="end" forceMount>
                                    <DropdownMenuLabel className="font-normal">
                                        <div className="flex flex-col space-y-1">
                                            <p className="text-sm font-medium leading-none">{user.user_metadata?.name || "User"}</p>
                                            <p className="text-xs leading-none text-muted-foreground">
                                                {user.email}
                                            </p>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                        <Link href="/order-history" className="w-full cursor-pointer">
                                            Order History
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={signOut}>
                                        Log out
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <>
                                <Link href="/login">
                                    <Button variant="ghost" className="text-white hover:bg-gray-800">Login</Button>
                                </Link>
                                <Link href="/register">
                                    <Button className="bg-white text-black hover:bg-gray-200">Register</Button>
                                </Link>
                            </>
                        )}

                        <Link href="/cart">
                            <Button variant="ghost" size="icon" className="relative text-white hover:bg-gray-800">
                                <ShoppingCart className="h-5 w-5" />
                                {cartCount > 0 && (
                                    <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center rounded-full p-0 text-xs">
                                        {cartCount}
                                    </Badge>
                                )}
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <Link href="/cart">
                            <Button variant="ghost" size="icon" className="relative mr-2 text-white hover:bg-gray-800">
                                <ShoppingCart className="h-5 w-5" />
                                {cartCount > 0 && (
                                    <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center rounded-full p-0 text-xs">
                                        {cartCount}
                                    </Badge>
                                )}
                            </Button>
                        </Link>
                        <button
                            onClick={toggleMenu}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-950 border-b border-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            href="/"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        {user ? (
                            <>
                                <div className="px-3 py-2 text-base font-medium text-white">
                                    Welcome, {user.user_metadata?.name || "User"}
                                </div>
                                <Link
                                    href="/order-history"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Order History
                                </Link>
                                <button
                                    onClick={() => {
                                        signOut();
                                        setIsMenuOpen(false);
                                    }}
                                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                                >
                                    Log out
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}
