import SizeFilterItem from "./SizeFilterItem";

export default function SizeFilter() {
  const sizeCategories = [
    {
      label: "Waist",
      values: ["36", "38", "40", "42", "44", "46", "48", "50"],
    },
    {
      label: "Clothing",
      values: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    },
  ];

  return (
    <div className="w-64 p-2">
      <SizeFilterItem title="Size" categories={sizeCategories} />
    </div>
  );
}
