"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { Eye, EyeOff, Moon } from "lucide-react";

export default function LoginPage() {
    const router = useRouter();
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            login(formData.email || "user@example.com");
            router.push("/");
        }, 1000);
    };

    return (
        <div className="w-full h-screen grid lg:grid-cols-2 relative overflow-hidden">
            {/* Left Side - Form */}
            <div className="flex flex-col justify-center items-center px-4 md:px-12 lg:px-24 xl:px-32 bg-background z-10">
                <div className="w-full max-w-sm space-y-8">
                    <div className="space-y-2">
                        {/* Logo / Brand */}
                        <h2 className="text-xl font-bold tracking-tight mb-8">Tobiez Sneaker</h2>

                        <h1 className="text-3xl font-bold tracking-tight">Welcome Back</h1>
                        <p className="text-muted-foreground">
                            Please enter your details to sign in to your account.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    placeholder="name@company.com"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="bg-transparent"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <Link href="#" className="text-xs font-semibold hover:underline">
                                        Forgot password?
                                    </Link>
                                </div>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        className="pr-10 bg-transparent"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="remember"
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <Label htmlFor="remember" className="font-normal text-sm cursor-pointer">
                                Remember me for 30 days
                            </Label>
                        </div>

                        <div className="space-y-4">
                            <Button className="w-full h-11 bg-black hover:bg-black/90 text-white dark:bg-white dark:text-black" type="submit" disabled={isLoading}>
                                {isLoading ? "Signing in..." : "Sign in"}
                            </Button>

                            <Button variant="outline" className="w-full h-11" type="button">
                                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                                    <path
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        fill="#4285F4"
                                    />
                                    <path
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        fill="#34A853"
                                    />
                                    <path
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        fill="#FBBC05"
                                    />
                                    <path
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        fill="#EA4335"
                                    />
                                </svg>
                                Sign in with Google
                            </Button>
                        </div>
                    </form>

                    <p className="text-center text-sm text-muted-foreground mt-8">
                        Don't have an account?{" "}
                        <Link href="/register" className="font-semibold text-black hover:underline dark:text-white">
                            Sign up for free
                        </Link>
                    </p>
                </div>
            </div>

            {/* Right Side - Image */}
            <div className="hidden lg:block relative h-full bg-black">
                <img
                    src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1912"
                    alt="Nike Sneaker"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute bottom-12 left-12 right-12 text-white space-y-4">
                    <div className="flex space-x-1 text-yellow-400">
                        {"★★★★★".split("").map((star, i) => (
                            <span key={i}>{star}</span>
                        ))}
                    </div>
                    <blockquote className="text-3xl font-bold leading-tight">
                        "The quality and craftsmanship of Tobiez sneakers are unparalleled. A perfect blend of style and comfort."
                    </blockquote>
                    <div>
                        <p className="font-semibold">Marcus Chen</p>
                        <p className="text-white/70 text-sm">Urban Photographer & Collector</p>
                    </div>
                </div>

                <div className="absolute top-8 right-8">
                    <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                        <Moon className="w-5 h-5 text-white" />
                    </div>
                </div>
            </div>
        </div>
    );
}
