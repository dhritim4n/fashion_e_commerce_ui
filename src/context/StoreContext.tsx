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


    const testImage = 'https://media.istockphoto.com/id/2213720664/vector/3d-illustration-vector-render-of-mobile-phone-screen-icon-showing-live-camera-with-clothes.jpg?s=612x612&w=0&k=20&c=MWDJ8AM15QJn-WJiiQV31D6iwmtP-4tXQ665qZ7iONM='
    const allProducts: ProductType[] = [
        {
            id: 1,
            name: "The Wool Flannel Pant",
            image: `${testImage}`,
            price: 138,
            salePrice: 97,
            discount: "30% off",
            colors: [
                { name: "Black", hex: "#1E1E1E" },
                { name: "Olive", hex: "#5A654A" }
            ],
            tags: ["Renewed Materials", "Cleaner Chemistry"],
            category: "Apparel",
            rating: 4,
            reviews: 3,
            properties: ["discount", "sale", "popular"],
            size: ["XXS", "XS", "S", "M", "L", "XL"]
        },
        {
            id: 2,
            name: "Relaxed Fit Cotton Shirt",
            image: `${testImage}`,
            price: 140,
            salePrice: 79,
            colors: [
                { name: "White", hex: "#FFFFFF" },
                { name: "Black", hex: "#1E1E1E" },
                { name: "Navy", hex: "#2C3E50" }
            ],
            tags: ["Organic Cotton"],
            category: "Apparel",
            rating: 4,
            reviews: 3,
            properties: ["new", "sale"],
            size: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"]
        },
        {
            id: 6,
            name: "Leather Chelsea Boot",
            image: `${testImage}`,
            price: 220,
            salePrice: 199,
            colors: [
                { name: "Dark Brown", hex: "#654321" },
                { name: "Black", hex: "#1E1E1E" }
            ],
            tags: ["Leather", "Winter"],
            category: "Footwear",
            rating: 5,
            reviews: 12,
            properties: ["popular"],
            size: ["S", "M", "L", "XL"]
        },
        {
            id: 7,
            name: "Classic Low-Top Sneaker",
            image: `${testImage}`,
            price: 85,
            salePrice: 85,
            colors: [
                { name: "White", hex: "#FFFFFF" },
                { name: "Off-White", hex: "#F5F5DC" }
            ],
            tags: ["Casual"],
            category: "Footwear",
            rating: 4,
            reviews: 25,
            properties: ["popular", "new"],
            size: ["S", "M", "L"]
        },
        {
            id: 8,
            name: "Italian Leather Wallet",
            image: `${testImage}`,
            price: 65,
            salePrice: 65,
            colors: [
                { name: "Black", hex: "#1E1E1E" },
                { name: "Tan", hex: "#D2B48C" }
            ],
            tags: ["Gifts", "Leather"],
            category: "Accessories",
            rating: 3,
            reviews: 4,
            properties: ["new"],
            size: ["One Size"]
        },
        {
            id: 9,
            name: "Oversized Acetate Sunglasses",
            image: `${testImage}`,
            price: 45,
            salePrice: 35,
            discount: "22% off",
            colors: [
                { name: "Tortoise", hex: "#81400A" },
                { name: "Matte Black", hex: "#333333" }
            ],
            tags: ["UV Protection", "Summer"],
            category: "Accessories",
            rating: 4,
            reviews: 9,
            properties: ["discount", "sale"],
            size: ["One Size"]
        },
        {
            id: 10,
            name: "Minimalist Gold Chain Necklace",
            image: `${testImage}`,
            price: 75,
            salePrice: 75,
            colors: [
                { name: "Gold", hex: "#FFD700" }
            ],
            tags: ["14k Gold Plated", "Gifts"],
            category: "Jewelry",
            rating: 5,
            reviews: 21,
            properties: ["popular"],
            size: ["One Size"]
        },
        {
            id: 11,
            name: "Silver Hoop Earrings (Pair)",
            image: `${testImage}`,
            price: 40,
            salePrice: 40,
            colors: [
                { name: "Silver", hex: "#C0C0C0" }
            ],
            tags: ["Sterling Silver", "Everyday"],
            category: "Jewelry",
            rating: 4,
            reviews: 6,
            properties: ["new"],
            size: ["One Size"]
        },
        {
            id: 3,
            name: "Premium Denim Jeans",
            image: `${testImage}`,
            price: 110,
            salePrice: 89,
            discount: "19% off",
            colors: [
                { name: "Deep Navy", hex: "#2C3E50" },
                { name: "Denim Blue", hex: "#34495E" }
            ],
            tags: ["Cleaner Chemistry"],
            category: "Apparel",
            rating: 2,
            reviews: 7,
            properties: ["discount", "sale"],
            size: ["XS", "S", "M", "L", "XL", "XXL"]
        },
        {
            id: 4,
            name: "Lightweight Hoodie",
            image: `${testImage}`,
            price: 60,
            salePrice: 49,
            discount: "18% off",
            colors: [
                { name: "Light Grey", hex: "#BFC3C7" },
                { name: "Black", hex: "#1E1E1E" },
                { name: "Ash Grey", hex: "#A3A3A3" }
            ],
            tags: ["Renewed Materials"],
            category: "Apparel",
            properties: ["discount", "sale", "new"],
            size: ["S", "M", "L", "XL", "XXL", "XXXL"]
        },
        {
            id: 5,
            name: "Performance Joggers",
            image: `${testImage}`,
            price: 95,
            salePrice: 95,
            colors: [
                { name: "Black", hex: "#1E1E1E" },
                { name: "Steel Blue", hex: "#37474F" }
            ],
            tags: ["Athletic"],
            category: "Apparel",
            properties: ["new"],
            size: ["XXS", "XS", "S", "M", "L"]
        }
    ];



    interface color {
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
