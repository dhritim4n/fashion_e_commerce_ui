
import CategoryFilter from "../ui/CategoryFilter"
import ColorFilter from "../ui/ColorFilter"
import MobileCategoryView from "../ui/MobileCategoryView"
import ProductList from "../ui/ProductList"
import SizeFilter from "../ui/SizeFilter"
export default function Shop() {

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