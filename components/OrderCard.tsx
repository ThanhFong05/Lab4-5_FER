import { format } from "date-fns";
import { ChevronDown, ChevronUp, Package, Clock, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface OrderItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

interface Order {
    id: string;
    created_at: string;
    total_price: number;
    status: string;
    items: OrderItem[];
}

export default function OrderCard({ order }: { order: Order }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const getStatusIcon = (status: string) => {
        const normalizedStatus = status?.trim().toLowerCase();
        switch (normalizedStatus) {
            case 'pending': return <Clock className="w-4 h-4 text-orange-500 mr-2" />;
            case 'completed': return <CheckCircle className="w-4 h-4 text-green-500 mr-2" />;
            case 'cancelled': return <XCircle className="w-4 h-4 text-red-500 mr-2" />;
            default: return <Package className="w-4 h-4 text-gray-500 mr-2" />;
        }
    };

    return (
        <div className="bg-white border rounded-lg shadow-sm overflow-hidden mb-4">
            {/* Header / Summary */}
            <div
                className="p-5 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer hover:bg-gray-50 transition-colors gap-4 md:gap-0"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div>
                    <div className="flex items-center mb-1">
                        {getStatusIcon(order.status)}
                        <span className="font-semibold capitalize text-sm">{order.status}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                        Order #{order.id.slice(0, 8).toUpperCase()}
                    </p>
                    <p className="text-sm text-gray-500">
                        {format(new Date(order.created_at), "MMM d, yyyy 'at' h:mm a")}
                    </p>
                </div>

                <div className="flex items-center justify-between w-full md:w-auto gap-6 cursor-pointer">
                    <div className="text-right">
                        <p className="text-sm text-gray-500">Total Amount</p>
                        <p className="font-bold text-lg">${Number(order.total_price).toFixed(2)}</p>
                    </div>
                    <Button variant="ghost" size="icon">
                        {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            {/* Expanded Content (Items list) */}
            {isExpanded && (
                <div className="border-t bg-gray-50 p-5">
                    <div className="p-5 space-y-4">
                        <h4 className="font-semibold text-sm mb-3 text-gray-700">Order Items</h4>
                        {order.items.map((item, idx) => (
                            <div key={`${item.id}-${idx}`} className="flex items-center justify-between bg-white p-3 rounded-md border">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 bg-gray-100 rounded-md overflow-hidden relative">
                                        <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm text-gray-900">{item.name}</p>
                                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                                    </div>
                                </div>
                                <p className="font-semibold text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
