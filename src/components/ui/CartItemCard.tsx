
import { Trash2 } from 'lucide-react'; // Delete icon
import type { CartItemProps } from '../../types/CartItemProps';
import type { ProductType } from '../../types/ProductType';
import { StoreContext } from '../../context/StoreContext';
import { useContext } from 'react';

interface cartItemCardProps{
    item: ProductType;
    quantity: number;
    size: string | undefined;
    color: any ;
}


export default function CartItemCard({ item, quantity, size, color }: cartItemCardProps) {
    const { cart, setCart } = useContext(StoreContext)

    const changeQty = (value: number) => {
        const currItem = cart.find(
            (cartItem: CartItemProps) => {
                return cartItem.item === item
            }
        )
        const newCart = cart.filter(
            (cartItem: CartItemProps) => cartItem !== currItem 
        )
        if (currItem.quantity >= 1) {
            if (value === -1 && currItem.quantity === 1){
                return
            }
            currItem.quantity = currItem.quantity + value

            newCart.push(currItem)
            setCart(
                newCart
            )
        }
    }
    const removeItem = () => {
        const newCart = cart.filter(
            (cartItem: CartItemProps) => cartItem.item !== item 
        )
        setCart(newCart)
    }

    return (
        <div className="flex p-4 border-b border-gray-200 bg-white">
            {/* Product Image */}
            <div className="flex-shrink-0 w-24 h-32 mr-4">
                {/* Placeholder image (replace with actual image tag) */}
                <div className="w-full h-full bg-gray-100 rounded overflow-hidden">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Product Details and Prices */}
            <div className="flex-grow">
                <div className="flex justify-between items-start">
                    <div className="max-w-[70%]">
                        <h3 className="text-lg font-normal leading-tight text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-500 my-0">
                            <span className="font-semibold">{size}</span> | {color}
                        </p>
                    </div>
                    {/* Delete Button */}
                    <button
                        onClick={() => removeItem()}
                    >
                    <Trash2
                        className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors"
                    />
                    </button>
                </div>

                {/* Price Information */}
                <div className="mt-2 md:flex">
                    <div>
                        <p className="text-base font-semibold">
                            <span className="line-through text-gray-500 mr-2">${item.price}</span>
                            <span className="text-black">${item.salePrice}</span>
                        </p>
                        <p className="text-sm text-red-600 font-medium">{item.discount}</p>

                    </div>

                    {/* Quantity Selector */}
                    <div className="flex-shrink-0 ml-4 self-end">
                        <div className="flex items-center border border-gray-300 rounded w-28 h-10">
                            <button
                                onClick={() => changeQty(-1)}
                                className="w-1/3 h-full text-lg text-gray-600 hover:bg-gray-50 transition-colors"
                            >
                                &minus;
                            </button>
                            <span className="w-1/3 h-full text-center flex items-center justify-center border-l border-r text-sm font-medium">
                                {quantity}
                            </span>
                            <button
                                onClick={() => changeQty(1)}
                                className="w-1/3 h-full text-lg text-gray-600 hover:bg-gray-50 transition-colors"
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

