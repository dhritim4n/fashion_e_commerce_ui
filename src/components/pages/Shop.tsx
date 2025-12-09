
import { useParams } from "react-router-dom"
import CategoryFilter from "../ui/CategoryFilter"
import ColorFilter from "../ui/ColorFilter"
import MobileCategoryView from "../ui/MobileCategoryView"
import ProductList from "../ui/ProductList"
import SizeFilter from "../ui/SizeFilter"
import { useContext, useEffect } from "react"
import { StoreContext } from "../../context/StoreContext"
import type { ProductType } from "../../types/ProductType"
export default function Shop() {

    const {category} = useParams()
    const { allProducts, setProducts} = useContext(StoreContext)
    useEffect(
        () => {

            function filterItems(category: string){
                const categoryProducts = allProducts.filter(
                    (product: ProductType) => product.properties?.includes(category)
                )
                setProducts(categoryProducts)
            }

            switch(category){
                case 'all':
                    setProducts(allProducts)
                    break
                case 'new':
                    filterItems('new')
                    break
                case 'popular':
                    filterItems('popular')
                    break
                case 'discount':
                    filterItems('discount')
                    break
                case 'sale':
                    filterItems('sale')
                    break 
                
            }
        },[category]
    )
    return (
        <div
            className="md:flex "
        >
            
            <div className="hidden flex-col md:flex">
                <CategoryFilter />
                <ColorFilter />
                <SizeFilter />
            </div>
            <MobileCategoryView/>
            
           
            <ProductList />
            
            
        
        </div>
        
    )
}