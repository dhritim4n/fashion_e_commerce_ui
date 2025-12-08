import CategoryFilterItem from "./CategoryFilterItem";

const categories = [
  { id: "c1", label: "Apparel" },
  { id: "c2", label: "Footwear" },
  { id: "c3", label: "Accessories" },
  { id: "c4", label: "Jewelry" }
];

export default function CategoryFilter() {
  return (
    <div className="w-[335px] md:w-64 p-2">
      <CategoryFilterItem title="Category" items={categories} />
    </div>
  );
}
