"use client";

import { CartItem as CartItemType, useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface CartItemProps {
    item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
    const { updateQuantity, removeFromCart } = useCart();

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-4 border border-gray-100">
            <div className="flex items-center space-x-4 w-full sm:w-auto">
                <div className="relative w-20 h-20 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-500 line-clamp-1">{item.description}</p>
                    <div className="mt-1 sm:hidden">
                        <Badge variant="secondary">${item.price.toFixed(2)}</Badge>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between w-full sm:w-auto mt-4 sm:mt-0 space-x-6">
                <div className="hidden sm:block">
                    <Badge variant="secondary" className="text-base">${item.price.toFixed(2)}</Badge>
                </div>

                <div className="flex items-center space-x-2 border rounded-md p-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <Plus className="h-3 w-3" />
                    </Button>
                </div>

                <div className="w-20 text-right font-bold text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                </div>

                <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-700 hover:bg-red-50" onClick={() => removeFromCart(item.id)}>
                    <Trash2 className="h-5 w-5" />
                </Button>
            </div>
        </div>
    );
}
