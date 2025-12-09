import { useContext } from "react";
import ProductCard from "./ProductCard";
import { StoreContext } from "../../context/StoreContext";
import type { ProductType } from "../../types/ProductType";

export default function ProductList() {

    const { products } = useContext(StoreContext)

    return (
        <div className="grid grid-cols-2 w-full m-3 md:grid-cols-3 gap-4 p-2 bg-gray-100 rounded-md">
            {
                products.map((p: ProductType) => (
                    
                        <ProductCard key={p.id} product={p} />
                   
                ))}
        </div>
    );
}
