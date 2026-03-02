"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/context/AuthContext";
import OrderCard from "@/components/OrderCard";
import { Loader2, PackageX } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function OrderHistoryPage() {
    const { user, isLoaded } = useAuth();
    const router = useRouter();
    const [orders, setOrders] = useState<any[]>([]);
    const [isLoadingOrders, setIsLoadingOrders] = useState(true);

    useEffect(() => {
        if (!isLoaded) return;

        if (!user) {
            router.push("/login");
            return;
        }

        const fetchOrders = async () => {
            setIsLoadingOrders(true);
            const { data, error } = await supabase
                .from('orders')
                .select('*')
                .eq('user_id', user.id)
                .order('created_at', { ascending: false });

            if (error) {
                console.error("Error fetching orders:", error);
            } else {
                setOrders(data || []);
            }
            setIsLoadingOrders(false);
        };

        fetchOrders();
    }, [user, isLoaded, router]);

    if (!isLoaded || isLoadingOrders) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center">
                <Loader2 className="h-10 w-10 animate-spin text-primary mb-4" />
                <p className="text-gray-500">Loading your orders...</p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold mb-8 text-gray-900">Order History</h1>

            {orders.length === 0 ? (
                <div className="flex flex-col items-center justify-center min-h-[400px] text-center bg-gray-50 rounded-lg border border-dashed">
                    <div className="p-4 bg-white rounded-full shadow-sm mb-4">
                        <PackageX className="h-10 w-10 text-gray-400" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">No orders found</h2>
                    <p className="text-gray-500 mb-6">You haven't placed any orders with us yet.</p>
                    <Link href="/">
                        <Button>Browse Sneakers</Button>
                    </Link>
                </div>
            ) : (
                <div className="space-y-4">
                    {orders.map((order) => (
                        <OrderCard key={order.id} order={order} />
                    ))}
                </div>
            )}
        </div>
    );
}
