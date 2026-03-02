"use client";

import { useCart } from "@/context/CartContext";
import CartItem from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";
import { useState } from "react";

export default function CartPage() {
    const { cartItems, getCartTotal, clearCart } = useCart();
    const { user } = useAuth();
    const router = useRouter();
    const [isCheckingOut, setIsCheckingOut] = useState(false);

    const total = getCartTotal();
    const finalTotal = Math.round(total * 1.08 * 100) / 100; // Include tax and round to 2 decimal places

    const handleCheckout = async () => {
        if (!user) {
            router.push("/login");
            return;
        }

        setIsCheckingOut(true);

        try {
            const { error } = await supabase.from('orders').insert({
                user_id: user.id,
                total_price: finalTotal,
                items: cartItems,
                status: 'pending'
            });

            if (error) throw error;

            clearCart();
            router.push("/order-history");
        } catch (error: any) {
            console.error("Checkout error:", error.message);
            alert("Failed to place order: " + error.message);
        } finally {
            setIsCheckingOut(false);
        }
    };

    if (cartItems.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[500px] text-center space-y-4">
                <div className="p-6 bg-gray-100 rounded-full">
                    <ShoppingBag className="h-12 w-12 text-gray-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Your cart is empty</h2>
                <p className="text-gray-500 max-w-sm">Looks like you haven't added any kicks to your cart yet.</p>
                <Link href="/">
                    <Button size="lg" className="mt-4">
                        Start Shopping
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-extrabold mb-8 text-gray-900">Your Shopping Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    <Button variant="outline" className="mt-4" onClick={clearCart}>
                        Clear Cart
                    </Button>
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-lg shadow-md border sticky top-24">
                        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                        <div className="space-y-3">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Tax</span>
                                <span>${(total * 0.08).toFixed(2)}</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between text-lg font-bold text-gray-900 pt-2">
                                <span>Total</span>
                                <span>${finalTotal.toFixed(2)}</span>
                            </div>
                        </div>

                        <Button
                            className="w-full mt-6"
                            size="lg"
                            onClick={handleCheckout}
                            disabled={isCheckingOut}>
                            {isCheckingOut ? "Processing..." : "Checkout"}
                        </Button>

                        <Link href="/" className="flex items-center justify-center mt-4 text-sm text-gray-500 hover:text-primary transition-colors">
                            <ArrowLeft className="h-4 w-4 mr-1" /> Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
