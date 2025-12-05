
import { Outlet } from "react-router-dom"
import CategoryFilter from "../ui/CategoryFilter"
import ColorFilter from "../ui/ColorFilter"
import ProductList from "../ui/ProductList"
import SizeFilter from "../ui/SizeFilter"
export default function Shop() {

    return (
        <div
            className="md:flex "
        >

            
            <div className="flex flex-col">
                <CategoryFilter />
                <ColorFilter />
                <SizeFilter />
            </div>
        
           
            <ProductList />
            
            
        
        </div>
        
    )
}