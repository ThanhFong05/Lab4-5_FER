"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Star, ShieldCheck } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function RegisterPage() {
    const router = useRouter();
    const { signUp } = useAuth();
    const [errorMsg, setErrorMsg] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setErrorMsg("Passwords do not match");
            return;
        }

        setIsLoading(true);
        setErrorMsg("");

        const { error } = await signUp(formData.email, formData.password, formData.name);

        setIsLoading(false);
        if (error) {
            setErrorMsg(error.message);
        } else {
            router.push("/login?message=Account created successfully. Please sign in.");
        }
    };

    return (
        <div className="w-full min-h-screen grid lg:grid-cols-2 relative overflow-hidden font-sans">
            {/* Left Side - Form */}
            <div className="flex flex-col justify-center items-center px-4 md:px-12 lg:px-24 xl:px-32 bg-background z-10 py-12">
                <div className="w-full max-w-sm space-y-8">
                    <div className="space-y-2">
                        {/* Logo / Brand */}
                        <div className="flex items-center space-x-2 mb-8">
                            {/* You can add an icon here if needed */}
                            <Link href="/" className="inline-block text-xl font-bold tracking-tight hover:text-gray-600 transition-colors">
                                Tobiez Sneaker
                            </Link>
                        </div>

                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Create an account</h1>
                        <p className="text-muted-foreground text-lg">
                            Join the community of sneaker enthusiasts.
                        </p>
                        {errorMsg && (
                            <div className="p-3 mt-4 text-sm text-red-500 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900 rounded-md">
                                {errorMsg}
                            </div>
                        )}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                id="name"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="h-11 bg-gray-50/50"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="name@gmail.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="h-11 bg-gray-50/50"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="h-11 pr-10 bg-gray-50/50"
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

                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <div className="relative">
                                <Input
                                    id="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                    className="h-11 pr-10 bg-gray-50/50"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff className="h-4 w-4" />
                                    ) : (
                                        <Eye className="h-4 w-4" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-start space-x-2">
                            <input
                                type="checkbox"
                                id="terms"
                                className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                required
                            />
                            <Label htmlFor="terms" className="font-normal text-sm leading-tight text-muted-foreground cursor-pointer">
                                I agree to the <Link href="#" className="font-semibold text-foreground hover:underline">Terms of Service</Link> and <Link href="#" className="font-semibold text-foreground hover:underline">Privacy Policy</Link>.
                            </Label>
                        </div>

                        <Button className="w-full h-12 text-lg bg-[#0F172A] hover:bg-[#0F172A]/90 text-white" type="submit" disabled={isLoading}>
                            {isLoading ? "Creating Account..." : "Sign Up"}
                        </Button>
                    </form>

                    <p className="text-center text-sm text-muted-foreground mt-8">
                        Already have an account?{" "}
                        <Link href="/login" className="font-bold text-black hover:underline">
                            Log in
                        </Link>
                    </p>

                    <div className="flex justify-center mt-8">
                        <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
                            <Moon className="w-5 h-5 text-gray-500" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Image */}
            <div className="hidden lg:block relative h-full bg-gray-100">
                <img
                    src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974"
                    alt="Air Jordan Sneaker"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay Gradient at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Badge Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center px-8">
                    <h2 className="text-5xl font-extrabold text-white leading-tight drop-shadow-xl mb-4">
                        Walk with confidence.<br />
                        Wear with pride.
                    </h2>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent text-white">
                    <div className="mb-6">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-md border border-white/10">
                            <Star className="w-3 h-3 mr-1 fill-white" /> PREMIUM COLLECTION 2024
                        </span>
                    </div>

                    <p className="text-lg text-white/90 max-w-xl mb-8 leading-relaxed">
                        Every stitch, every curve, every detail is a testament to our commitment to quality. Join thousands of collectors worldwide.
                    </p>

                    <hr className="border-white/20 mb-8" />

                    <div className="flex gap-12">
                        <div>
                            <p className="text-3xl font-bold">50k+</p>
                            <p className="text-sm text-white/60">Active Members</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">200+</p>
                            <p className="text-sm text-white/60">Exclusive Brands</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Moon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
    )
}
