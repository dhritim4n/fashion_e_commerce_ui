import { useContext, useState } from "react";
import type { ProductType } from "../../types/ProductType";
import { Star } from "lucide-react";
import { StoreContext } from "../../context/StoreContext";
import type { CartItemProps } from "../../types/CartItemProps";

type Props = {
  product: ProductType;
};

const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"];

export default function ProductInfo({ product }: Props) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { cart, setCart } = useContext(StoreContext)
  const addToCart = (product: ProductType) => {
        const existingItem = cart.filter(
            (cartItem: CartItemProps) => cartItem.item === product
        )
        if (existingItem.length !== 0){
            existingItem[0].quantity = existingItem[0].quantity + 1
        }
        else {
            setCart((prev: CartItemProps[]) => [...prev, {
            item: product,
            quantity: 1,
            size: selectedSize,
            color: selectedColor.name
        }])
        }

        console.log(cart)
    }

  return (
    <div className="space-y-6 m-5 md:w-[30vw]">
      
      {/* ---------- Title + Price ---------- */}
      <div className="flex justify-between items-start">
        <h1 className="text-2xl font-semibold leading-tight">{product.name}</h1>

        <div className="text-right">
          {product.salePrice && (
            <p className="text-gray-400 line-through text-lg">
              ${product.price}
            </p>
          )}
          <p className="text-2xl font-bold">
            ${product.salePrice ?? product.price}
          </p>
        </div>
      </div>

      {/* ---------- Rating ---------- */}
      <div className="flex items-center gap-1 text-gray-700 text-sm">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            fill="black"
            stroke="black"
          />
        ))}

        <span className="ml-2 font-medium">
          {product.rating?.toFixed(1) ?? "5.0"}
        </span>
        <span className="text-gray-500">
          ({product.reviews ?? 0} Reviews)
        </span>
      </div>

      <hr />

      {/* ---------- Color Picker ---------- */}
      <div className="space-y-2">
        <p className="font-medium">Color</p>
        <p className="text-gray-600">
           {product.colors.map(color => color.name ?? color.name).join(" / ")}
        </p>

        <div className="flex gap-3 mt-2">
          {product.colors.map((color) => (
            <button
              key={color.hex}
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-full border-2 transition  hover:transform hover:scale-115 
                ${selectedColor === color ? "border-black" : "border-gray-300"}`}
              style={{ backgroundColor: color.hex }}
            />
          ))}
        </div>
      </div>

      <hr />

      {/* ---------- Size Selector ---------- */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <p className="font-medium">Size</p>
          <button className="text-gray-500 underline text-sm">Size Guide</button>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {sizeOptions.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`py-3 border rounded-md text-sm font-medium transition hover:bg-black hover:text-white 
                ${selectedSize === size 
                  ? "border-black bg-black text-white" 
                  : "border-gray-300 bg-gray-100 text-gray-700"
                }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* ---------- Add to Bag ---------- */}
      <button
        onClick={() => addToCart(product)}
        className="w-full py-4 bg-black border text-white text-sm tracking-wider font-semibold rounded-md hover:bg-white hover:text-black active:transform active:scale-105"
      >
        ADD TO CART
      </button>
    </div>
  );
}
