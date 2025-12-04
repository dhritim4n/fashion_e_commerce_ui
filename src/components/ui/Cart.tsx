import CartSummary from "./CartSummary";
import { X } from "lucide-react";

interface CartProps{
    isCartVisible: boolean;
    toggleCartVisible: (value: boolean) => void;
}

export default function Cart({isCartVisible, toggleCartVisible}: CartProps) {


    return (
        <div
            className="p-4 border rounded-lg fixed transform translate-y-20 -translate-x-80 z-50 bg-white p-2 w-[400px]"
        >
            <button 
            onClick={() => toggleCartVisible(!isCartVisible)}
            className="absolute rounded-3xl top-0 right-0 m-2 p-0.5 group hover:bg-black">
                <X className="group-hover:text-white"/>
            </button>

            <CartSummary />
        </div>
    )
}