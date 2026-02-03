"use client";

import { Product } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import Image from "next/image";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [isAdded, setIsAdded] = useState(false);

    const handleIncrement = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000); // Reset "Added" state after 2s
    };

    return (
        <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]">
            <div className="relative pt-[75%] bg-gray-100">
                {/* Using a simple img tag for demo purposes if valid absolute URLs are not configured in next.config. 
             If using next/image with external URLs, we need config. 
             I'll checks next.config.ts later. For now, I'll use a wrapper.
         */}
                <img
                    src={product.image}
                    alt={product.name}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
            </div>
            <CardHeader>
                <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-bold line-clamp-1">{product.name}</CardTitle>
                    <Badge variant="secondary" className="text-sm font-semibold">
                        ${product.price.toFixed(2)}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
                <div className="flex items-center justify-between w-full">
                    <span className="text-sm font-medium text-gray-700">Quantity:</span>
                    <div className="flex items-center space-x-2 border rounded-md p-1">
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={handleDecrement}>
                            <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-4 text-center text-sm">{quantity}</span>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={handleIncrement}>
                            <Plus className="h-3 w-3" />
                        </Button>
                    </div>
                </div>
                <Button
                    className="w-full"
                    onClick={handleAddToCart}
                    disabled={isAdded}
                    variant={isAdded ? "secondary" : "default"}
                >
                    {isAdded ? (
                        "Added to Cart"
                    ) : (
                        <>
                            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                        </>
                    )}
                </Button>
            </CardFooter>
        </Card>
    );
}
