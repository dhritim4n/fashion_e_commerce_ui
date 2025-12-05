import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import type { CartItemProps } from "../../types/CartItemProps";
import type { ProductType } from "../../types/ProductType";

export default function CartSummary() {
    const { cart, setCart } = useContext(StoreContext)
    const totalItems: number = cart.length
    const subtotal: number = cart.reduce((sum : number, product: CartItemProps) => {
        return sum+(product.item.salePrice*product.quantity)
    },0)

  return (
    <div className="w-full mt-6 overflow-auto">

      {/* Subtotal Row */}
      <div className="flex justify-between items-center">
        <p className="text-[18px] font-semibold">
          Subtotal <span className="text-gray-600 text-[15px]">({totalItems} items)</span>
        </p>
        <p className="text-[20px] font-bold">${subtotal}</p>
      </div>

      {/* Checkout Button */}
      <button
    
        className="w-full bg-black border text-white text-[14px] tracking-[2px] py-3 mt-5 uppercase hover:text-black hover:bg-white transition"
      >
        Continue to Checkout
      </button>

      {/* Small Note */}
      <p className="text-center text-gray-700 text-sm mt-4">
        Psst, get it now before it sells out.
      </p>
    </div>
  );
}
