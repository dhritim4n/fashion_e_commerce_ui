import React, { createContext, useState } from "react";
import type { ProductType } from "../types/ProductType";
import type { CartItemProps } from "../types/CartItemProps";

export const StoreContext = createContext<any>(null);

export function StoreContextProvider({ children }: React.PropsWithChildren) {
    const [store, setStore] = useState({
        user: null,
        cart: [],
    });
    const [searchQuery, setSearchQuery] = useState()

    const allProducts: ProductType[] = [
        {
            id: 1,
            name: "The Wool Flannel Pant",
            image:
                "https://unsplash.com/photos/three-pairs-of-jeans-are-lined-up-on-a-white-surface-LK5Ud5yRuz4",
            price: 138,
            salePrice: 97,
            discount: "30% off",
            colors: [
                { name: "Black", hex: "#1E1E1E" },
                { name: "Olive", hex: "#5A654A" }
            ],
            tags: ["Renewed Materials", "Cleaner Chemistry"],
            category: "Men",
            rating: 4,
            reviews: 3
        },
        {
            id: 2,
            name: "Relaxed Fit Cotton Shirt",
            image:
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=60",
            price: 140,
            salePrice: 79,
            colors: [
                { name: "White", hex: "#FFFFFF" },
                { name: "Black", hex: "#1E1E1E" },
                { name: "Navy", hex: "#2C3E50" }
            ],
            tags: ["Organic Cotton"],
            category: "Men",
            rating: 4,
            reviews: 3
        },
        {
            id: 3,
            name: "Premium Denim Jeans",
            image:
                "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=800&q=60",
            price: 110,
            salePrice: 89,
            discount: "19% off",
            colors: [
                { name: "Deep Navy", hex: "#2C3E50" },
                { name: "Denim Blue", hex: "#34495E" }
            ],
            tags: ["Cleaner Chemistry"],
            category: "Men",
            rating: 2,
            reviews: 7
        },
        {
            id: 4,
            name: "Lightweight Hoodie",
            image:
                "https://images.unsplash.com/photo-1602810317631-046c1dc8f7d7?auto=format&fit=crop&w=800&q=60",
            price: 60,
            salePrice: 49,
            discount: "18% off",
            colors: [
                { name: "Light Grey", hex: "#BFC3C7" },
                { name: "Black", hex: "#1E1E1E" },
                { name: "Ash Grey", hex: "#A3A3A3" }
            ],
            tags: ["Renewed Materials"],
            category: "Unisex"
        },
        {
            id: 5,
            name: "Performance Joggers",
            image:
                "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=60",
            price: 95,
            salePrice: 120,
            colors: [
                { name: "Black", hex: "#1E1E1E" },
                { name: "Steel Blue", hex: "#37474F" }
            ],
            tags: ["Athletic"],
            category: "Unisex"
        }
    ]

    interface color{
        name: string;
        hex: string;
    }
    const [products, setProducts] = useState<Array<ProductType>>(allProducts);
    const [cart, setCart] = useState<Array<CartItemProps>>([])
    const [currentProduct, setCurrentProduct] = useState<ProductType>()
    const [isCartVisible, toggleCartVisible] = useState<boolean>(false)
    const [selectedSize, setSelectedSize] = useState<string>('M')
    const [selectedColor, setSelectedColor] = useState<color>({ name: "Black", hex: "#1E1E1E" })



    const value = {
        store,
        setStore,
        products,
        setProducts,
        searchQuery,
        setSearchQuery,
        allProducts,
        cart,
        setCart,
        currentProduct,
        setCurrentProduct,
        isCartVisible, 
        toggleCartVisible,
        selectedSize,
        setSelectedSize,
        selectedColor,
        setSelectedColor
    };

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    );
}
