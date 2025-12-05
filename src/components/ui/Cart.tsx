import { useContext } from "react";
import CartItemCard from "./CartItemCard";
import CartSummary from "./CartSummary";
import { X } from "lucide-react";
import { StoreContext } from "../../context/StoreContext";
import type { CartItemProps } from "../../types/CartItemProps";

interface CartProps{
    isCartVisible: boolean;
    toggleCartVisible: (value: boolean) => void;
}

export default function Cart({isCartVisible, toggleCartVisible}: CartProps) {

    const { cart, setCart } = useContext(StoreContext)

    return (
        <div
            className="p-4 border rounded-lg fixed top-2 right-3  bg-white h-[100vh] w-[90vw]    z-50 md:transform  md:w-[500px] "
        >
            <button 
            onClick={() => toggleCartVisible(!isCartVisible)}
            className="absolute rounded-3xl top-0 right-0 m-2 p-0.5 group hover:bg-black">
                <X className="group-hover:text-white"/>
            </button>

            <h2 className="text-1xl p-2">
                YOUR CART
            </h2>

            <div
                className="h-[50vh] overflow-y-scroll"
            >
            {
                cart.map(
                    (cartItem: CartItemProps, index: number) => {
                        return(
                        <CartItemCard 
                            item = {cartItem.item}
                            quantity={cartItem.quantity}
                            size={cart.size}
                            color={cartItem.color}
                        />
                        )
                    }
                )
            }
            </div>
            

            <CartSummary />
        </div>
    )
}