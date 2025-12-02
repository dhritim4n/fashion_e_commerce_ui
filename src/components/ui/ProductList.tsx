import { useContext, useEffect } from "react";
import ProductCard from "./ProductCard";
import { StoreContext } from "../../context/StoreContext";
import type { ProductType } from "../../types/ProductType";

export default function ProductList() {

    const { products, setProducts } = useContext(StoreContext)

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {
                products.map((p: ProductType) => (
                    
                        <ProductCard key={p.id} product={p} />
                   
                ))}
        </div>
    );
}
