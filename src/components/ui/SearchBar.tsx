import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="w-full max-w-xl mx-auto relative">
      
      {/* Input */}
      <input
        type="text"
        placeholder="Search"
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
