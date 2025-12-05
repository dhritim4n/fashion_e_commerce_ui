import { Search } from "lucide-react";
import type React from "react";
import { useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import type { ProductType } from "../../types/ProductType";


export default function SearchBar() {

  const {searchQuery, setSearchQuery, products,setProducts} = useContext(StoreContext);

  const handleSearch = () => {
    
      if(searchQuery){

        (document.getElementById('searchbar') as HTMLInputElement).value = ''
        const searchedProducts = products.filter(
            (product: ProductType) => {
              return product.name.toLocaleLowerCase().includes(searchQuery.toLowerCase())
            }
        )
        setProducts(searchedProducts)

  
      }

  }

  useEffect(() => {
    console.log(searchQuery)
  }, [searchQuery])

  return (
    <div className="w-full max-w-xl mx-auto relative">
      
      {/* Input */}
      <input
        type="text"
        placeholder="Search"
        id = "searchbar"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
        className="
          w-full
          border border-gray-300 
          rounded-full 
          py-2 pl-4 pr-10
          focus:outline-none 
          focus:ring-1 focus:ring-black
          transition
        "
        onKeyDown={(e)=>{
          if (e.code === 'Enter'){
              handleSearch()
          }
          
        }}
      />
      
      {/* Search Icon Button */}

      <button
        className="
          absolute 
          right-3 top-1/2 -translate-y-1/2 
          text-gray-600
          hover:text-black
          transition
          hover:bg-black hover:text-white
          p-2 rounded-r-2xl
          transform translate-x-2
        "
        onClick={handleSearch}

        
      >
        <Search size={18} />
      </button>

    </div>
  );
}
