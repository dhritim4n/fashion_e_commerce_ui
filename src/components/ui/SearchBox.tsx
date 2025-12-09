import { Search } from "lucide-react";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { X } from "lucide-react";
import type { ProductType } from "../../types/ProductType";

export default function SearchBox({ placeholder = "Search...", className = "" }) {

  const { searchQuery, setSearchQuery, allProducts, setProducts } = useContext(StoreContext)

 const handleSearch = () => {
    
      if(searchQuery){
        const searchedProducts = allProducts.filter(
            (product: ProductType) => {
              return product.name.toLocaleLowerCase().includes(searchQuery.toLowerCase())
            }
        )
        setProducts(searchedProducts)
      }
      else{
        setProducts(allProducts)
      }

  }
  return (
    <div className={`relative w-full ${className}`}>
      <input
        type="text"
        id="searchbox"
        placeholder={placeholder}
        onChange={(e) =>{ 
          e.preventDefault()
          const value = e.target.value
          setTimeout(()=>{
            setSearchQuery(value)}, 500)
        }}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}

        className="w-full border border-gray-300 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
      />
      <button
        onClick={()=>{
        (document.getElementById('searchbox') as HTMLInputElement).value = ''
        setSearchQuery(undefined)

      }}
      >
      <X className="absolute right-9 top-2.5 text-gray-500 hover:text-blue-600" size={19}
      />
      </button>
      <Search className="absolute right-3 top-2.5 text-gray-500  hover:text-blue-600" size={18}
        onClick={handleSearch}
      />
    </div>
  );
}
