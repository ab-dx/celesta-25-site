"use client";
import { useCart } from "@/context/CartContext";

export default function Cart() {
    const { cart } = useCart();

    const getTotal = () => {
        return cart.reduce((acc, item) => acc + item.cost * item.quantity, 0);
    };

    return (
        <div className="fixed top-20 right-4 bg-white p-4 rounded-lg shadow-lg text-black">
            <h2 className="text-xl font-bold mb-4">Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map((item, index) => (
                        <div key={index} className="flex justify-between mb-2">
                            <span>{item.name} (x{item.quantity})</span>
                            <span>Rs.{item.cost * item.quantity}</span>
                        </div>
                    ))}
                    <hr className="my-2" />
                    <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>Rs.{getTotal()}</span>
                    </div>
                </div>
            )}
        </div>
    );
}
