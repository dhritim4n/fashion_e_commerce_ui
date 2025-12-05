
import { Link } from "react-router-dom";
import type { ProductType } from "../../types/ProductType";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";


const ProductCard = ({ product }: { product: ProductType }) => {
    const { cart, setCart} = useContext(StoreContext)

    const addToCart = (product: ProductType) => {
        setCart((prev: ProductType[]) => [...prev, {
            item: product,
            quantity: 1,
        }])
        console.log(cart)
    }


    return (
        <div className="relative border rounded-xl p-3 shadow-sm hover:shadow-md transition h-[500px] bg-white cursor-pointer">

            {/* Discount Badge */}
            {product.discount && (
                <span className="absolute bg-red-500 text-white text-xs px-2 py-1 rounded-md top-3 left-3">
                    {product.discount}
                </span>
            )}

            {/* Product Image */}
            <Link to={`/product/${product.id}`}>
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover rounded-lg"
            />
            </Link>

            {/* Product Name */}
            <h3 className="mt-3 font-medium text-gray-900 text-sm line-clamp-1">
                {product.name}
            </h3>

            {/* Price Section */}
            <div className="flex flex-col m-2 w-full justify-between p-0 md:flex-row">
                <div className="flex items-center gap-2 mt-1">
                    {product.salePrice ? (
                        <>
                            <span className="text-gray-400 line-through text-sm">
                                ${product.price}
                            </span>
                            <span className="text-black font-semibold text-sm">
                                ${product.salePrice}
                            </span>
                        </>
                    ) : (
                        <span className="text-black font-semibold text-sm">
                            ${product.price}
                        </span>
                    )}

                </div>
                <button
                    className="border p-0.5 m-0.5 rounded group hover:bg-black hover:text-white active:transform active:scale-105 md:p-2"
                    onClick={() => addToCart(product)}
                >
                    Add to Cart
                </button>
            </div>
            {/* Ratings */}
            <div className="flex items-center text-xs text-gray-600 mt-1">
                ⭐ {product.rating ? product.rating : "0"} ({product.reviews})
            </div>

            {/* Colors */}
            <div className="flex items-center gap-2 mt-3">
                {product.colors.map((color, idx) => (
                    <span
                        key={idx}
                        className="w-4 h-4 rounded-full border"
                        style={{ backgroundColor: color.hex }}
                    ></span>
                ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-3">
                {product.tags.map((tag, idx) => (
                    <span
                        key={idx}
                        className="border rounded-lg text-xs px-2 py-1 text-gray-600 bg-gray-100"
                    >
                        {tag}
                    </span>
                ))}
            </div>

        </div>
    );
};

export default ProductCard;
