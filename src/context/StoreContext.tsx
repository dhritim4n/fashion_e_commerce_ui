import React, { createContext, useState } from "react";
import type { ProductType } from "../types/ProductType";

export const StoreContext = createContext<any>(null);

export function StoreContextProvider({ children }: React.PropsWithChildren) {
    const [store, setStore] = useState({
        user: null,
        cart: [],
    });
    const [searchQuery, setSearchQuery] = useState()

    const [products, setProducts] =  useState<Array<ProductType>>([
        {
            id: 1,
            name: "The Wool Flannel Pant",
            image:
                "https://images.unsplash.com/photo-1586790170083-2f9c7c4b4128?auto=format&fit=crop&w=800&q=60",
            price: 138,
            salePrice: 97,
            discount: "30% off",
            colors: ["#1E1E1E", "#5A654A"], // black, olive-ish
            tags: ["Renewed Materials", "Cleaner Chemistry"],
            category: "Men",
        },
        {
            id: 2,
            name: "Relaxed Fit Cotton Shirt",
            image:
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=60",
            price: 79,
            salePrice: 140,
            colors: ["#FFFFFF", "#1E1E1E", "#2C3E50"], // white, black, navy
            tags: ["Organic Cotton"],
            category: "Men",
        },
        {
            id: 3,
            name: "Premium Denim Jeans",
            image:
                "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=800&q=60",
            price: 110,
            salePrice: 89,
            discount: "19% off",
            colors: ["#2C3E50", "#34495E"], // dark denim variations
            tags: ["Cleaner Chemistry"],
            category: "Men",
        },
        {
            id: 4,
            name: "Lightweight Hoodie",
            image:
                "https://images.unsplash.com/photo-1602810317631-046c1dc8f7d7?auto=format&fit=crop&w=800&q=60",
            price: 60,
            salePrice: 49,
            discount: "18% off",
            colors: ["#BFC3C7", "#1E1E1E", "#A3A3A3"], // grey tones
            tags: ["Renewed Materials"],
            category: "Unisex",
        },
        {
            id: 5,
            name: "Performance Joggers",
            image:
                "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=60",
            price: 95,
            salePrice: 120,
            colors: ["#1E1E1E", "#37474F"], // black / grey-blue
            tags: ["Athletic"],
            category: "Unisex",
        }
    ]);


    const value = {
        store,
        setStore,
        products,
        setProducts,
        searchQuery,
        setSearchQuery
    };

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    );
}
