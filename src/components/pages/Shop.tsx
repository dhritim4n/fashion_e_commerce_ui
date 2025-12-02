import CategoryFilter from "../ui/CategoryFilter"
import ColorFilter from "../ui/ColorFilter"
import ProductList from "../ui/ProductList"
import SizeFilter from "../ui/SizeFilter"
export default function Shop() {

    return (
        <div
            className="flex"
        >


            <div>
                <CategoryFilter />
                <ColorFilter />
                <SizeFilter />
            </div>
            <ProductList />

        </div>
    )
}