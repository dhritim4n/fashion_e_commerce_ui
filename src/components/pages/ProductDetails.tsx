import { useContext } from "react"
import { useParams } from "react-router-dom"
import { StoreContext } from "../../context/StoreContext"
import type { ProductType } from "../../types/ProductType"
import ProductImageCarousel from "../ui/ProductImageCarousel"
import ProductInfo from "../ui/ProductsInfo"

export default function ProductDetails() {
    const { id } = useParams()
    const { products } = useContext(StoreContext)
    var current_product: ProductType = products.find(
        (product: ProductType) =>
            product.id === Number(id)
    )


    return (
        <div
            className="flex justify-around m-5 "
        >
            <ProductImageCarousel product={current_product} />
            
            
            <ProductInfo product={current_product} />
            
        </div>
    )
}