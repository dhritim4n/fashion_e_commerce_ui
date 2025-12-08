import SizeFilterItem from "./SizeFilterItem";

export default function SizeFilter() {
  const sizeCategories = [
    {
      label: "Clothing",
      values: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    },
  ];

  return (
    <div className="p-2 w-[70vw] md:w-64 ">
      <SizeFilterItem title="Size" categories={sizeCategories} />
    </div>
  );
}
