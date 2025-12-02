import { Search } from "lucide-react";
import type React from "react";
import { useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";


export default function SearchBar() {

  const {searchQuery, setSearchQuery} = useContext(StoreContext);

  const handleSearch = (e: React.MouseEventHandler<HTMLButtonElement>) => {
      
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
      />

      {/* Search Icon Button */}
      <button
        className="
          absolute 
          right-3 top-1/2 -translate-y-1/2 
          text-gray-600
          hover:text-black
          transition
          
        "

        
      >
        <Search size={18} />
      </button>

    </div>
  );
}
