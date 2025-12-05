import { NavLink } from "react-router-dom";

interface CategoryItem {
  label: string;
  href: string;
}

const categories: CategoryItem[] = [
  { label: "Holiday Gifting", href: "shop/holiday" },
  { label: "New Arrivals", href: "shop/new" },
  { label: "Best-Sellers", href: "shop/best" },
  { label: "Clothing", href: "shop/clothing" },
  { label: "Tops & Sweaters", href: "shop/tops" },
  { label: "Pants & Jeans", href: "shop/pants" },
  { label: "Outerwear", href: "shop/outerwear" },
  { label: "Shoes & Bags", href: "shop/shoes" },
  { label: "Sale", href: "shop/sale" } // NORMAL item now
];

export default function CategoryNav() {
  return (
    <div className="w-full border-b bg-white">
      <div className="w-[90vw]  px-6  flex overflow-scroll  justify-start gap-2 space-x-10 md:flex-row md:items-center">

        {categories.map((item) => (
          <NavLink
            key={item.label}
            to={item.href}
            className={({ isActive }) =>
              `
              w-full
              text-sm font-medium transition
              hover:text-black 
              ${isActive ? "text-red-600 border-b-2 border-b-red-600 font-semibold" : "text-gray-800"}
              `
            }
          >
            {item.label}
          </NavLink>
        ))}

      </div>
    </div>
  );
}
