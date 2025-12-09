import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { NavLink } from "react-router-dom";

interface CategoryItem{
    label: string;
    href: string;
}

export default function NavCategories({ isMobile = false }) {
  //const categories = ["All","Shoes", "Clothing", "Supplements", "Electronics", "Home", "Beauty"]
  const {setSearchQuery} = useContext(StoreContext)
  const categories: CategoryItem[] = [
  { label: "All Products", href: "shop/all" },
  { label: "New Arrivals", href: "shop/new" },
  { label: "Popular", href: "shop/popular" },
  { label: "Discount", href: "shop/discount" },
  { label: "Sale", href: "shop/sale" }
];

  return (
    <ul
      className={`${
        isMobile
          ? "flex flex-col items-start pl-3 gap-3 text-sm"
          : "flex w-full gap-6 py-2 text-sm font-medium justify-center"
      }`}
    >
    
      {categories.map((item) => (
        <NavLink
          key={item.label}
          to={`${item.href}` }
          
          onClick={()=>setSearchQuery(item)}
          className={({ isActive }) =>
            isActive
              ? "text-blue-600  border-b-2 border-blue-600 pb-1 transition "
              : "hover:text-blue-600 transition"
          }
        >
          {item.label}
        </NavLink>
      ))}
    
    </ul>
  );
}
