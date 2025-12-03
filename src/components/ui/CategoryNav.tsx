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
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-center space-x-10">

        {categories.map((item) => (
          <NavLink
            key={item.label}
            to={item.href}
            className={({ isActive }) =>
              `
              text-sm font-medium transition
              hover:text-black 
              ${isActive ? "text-red-600 font-semibold" : "text-gray-800"}
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
