import CategoryFilterItem from "./CategoryFilterItem";

const categories = [
  { id: "c1", label: "Everyone - All Gender Collection" },
  { id: "c2", label: "Accessories & Gift Cards" },
  { id: "c3", label: "Backpacks, Weekenders & Duffle Bags" },
  { id: "c4", label: "Dress Shirts & Button Downs" },
  { id: "c5", label: "Hoodies & Sweatshirts" },
  { id: "c6", label: "Shoes" },
  { id: "c7", label: "Outerwear" },
];

export default function CategoryFilter() {
  return (
    <div className="w-full md:w-64 p-2">
      <CategoryFilterItem title="Category" items={categories} />
    </div>
  );
}
