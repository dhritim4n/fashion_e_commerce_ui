import { useState } from "react";
import { X } from "lucide-react";
import CategoryFilter from "./CategoryFilter";
import ColorFilter from "./ColorFilter";
import SizeFilter from "./SizeFilter";



export default function MobileCategoryView() {
    const [filterOpen, setFilterOpen] = useState<boolean>(false); 

    return (
        <div className="w-full md:hidden flex justify-center">
            <button 
                className="p-3 rounded-2xl text-xl w-[70vw] m-3 bg-black text-white"
                onClick={() => setFilterOpen(true)}
            >
                Filter
            </button>

            {filterOpen && (
                <div className="fixed inset-0 z-50 bg-white"> 
                    <div className="flex flex-col h-full w-full"> 
                        
                        <div className="p-4 border-b flex justify-between items-center bg-foreground flex-shrink-0">
                            <h3 className="font-semibold text-lg">FILTER</h3>
                            <button
                                onClick={() => setFilterOpen(false)}
                                className="text-gray-600 hover:text-gray-900"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        
                        <div className="flex flex-col p-4 overflow-y-auto flex-grow"> 
                            <div className="space-y-6">
                                <CategoryFilter />
                                <ColorFilter />
                                <SizeFilter  />
                            </div>
                        </div>

                        <div className="p-4 border-t flex-shrink-0 flex justify-center space-x-4">
                            <button 
                                className="w-full py-2 border border-gray-300 rounded"
                                onClick={() => setFilterOpen(false)} 
                            >
                                Clear
                            </button>
                            <button 
                                className="w-full py-2 bg-black text-white rounded"
                                onClick={() => setFilterOpen(false)} 
                            >
                                Apply Filters
                            </button>
                        </div>
                        
                    </div>
                </div>
            )}
        </div>
    );
}