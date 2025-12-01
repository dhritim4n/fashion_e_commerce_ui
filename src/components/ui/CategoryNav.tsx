import { NavLink } from "react-router-dom";

interface CategoryItem {
  label: string;
  href: string;
}

const categories: CategoryItem[] = [
  { label: "Holiday Gifting", href: "/holiday" },
  { label: "New Arrivals", href: "/new" },
  { label: "Best-Sellers", href: "/best" },
  { label: "Clothing", href: "/clothing" },
  { label: "Tops & Sweaters", href: "/tops" },
  { label: "Pants & Jeans", href: "/pants" },
  { label: "Outerwear", href: "/outerwear" },
  { label: "Shoes & Bags", href: "/shoes" },
  { label: "Sale", href: "/sale" } // NORMAL item now
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
