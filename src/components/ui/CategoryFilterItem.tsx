import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import type { ProductType } from "../../types/ProductType";

export interface CategoryItem {
  id: string;
  label: string;
}

interface CategoryFilterProps {
  title: string;
  items: CategoryItem[];
  defaultVisible?: number;   // how many items to show initially
}




const CategoryFilterItem: React.FC<CategoryFilterProps> = ({
  title,
  items,
  defaultVisible = 5,
}) => {
  const [open, setOpen] = useState(true);
  const [showAll, setShowAll] = useState(false);
  type CheckboxState = {
    [key: string]: boolean;
  };

  const [checkboxChecked, setCheckboxChecked] = useState<CheckboxState>(() =>
    items.reduce((acc, item) => ({ ...acc, [item.label]: false }), {})
  );


  const { allProducts, setProducts } = useContext(StoreContext)

  useEffect(() => {
    // Type assertion so TS knows checkboxChecked has string keys with boolean values
    const activeCategories = Object.keys(checkboxChecked).filter(
      (category: string) => checkboxChecked[category]
    );

    if (activeCategories.length === 0) {
      setProducts(allProducts);
      return;
    }

    const filteredProducts = allProducts.filter((product: ProductType) =>
      activeCategories.includes(product.category)
    );

    setProducts(filteredProducts);
  }, [checkboxChecked]);


  const visibleItems = showAll ? items : items.slice(0, defaultVisible);

  return (
    <div className="border rounded px-2 pt-4 pb-2">
      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer "
        onClick={() => setOpen(!open)}
      >
        <h3 className="font-semibold text-lg">{title}</h3>
        <span>{open ? "▾" : "▸"}</span>
      </div>

      {/* Checkbox list */}
      {open && (
        <div className="mt-3 space-y-3 border-t pt-2">
          {visibleItems.map((item) => (
            <label key={item.id} className="flex items-start gap-2">
              <input
                type="checkbox"
                className="w-4 h-4 border-gray-400 cursor-pointer"
                onClick={() => {
                  setCheckboxChecked((prevState: CheckboxState) => ({
                    ...prevState,
                    [item.label]: !prevState[item.label]
                  }));
                }}

              />
              <span className="text-sm">{item.label}</span>
            </label>
          ))}

          {/* View More */}
          {items.length > defaultVisible && (
            <button
              className="text-sm text-gray-600 mt-1 hover:underline"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "View Less -" : "View More +"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryFilterItem;
