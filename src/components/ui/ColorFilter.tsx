import ColorFilterItem from "./ColorFilterItem";

const colors = [
  { id: "1", name: "Black", hex: "#000000" },
  { id: "2", name: "Blue", hex: "#1F5FA8" },
  { id: "3", name: "Brown", hex: "#8A5A2D" },
  { id: "4", name: "Grey", hex: "#D6D6D6" },
  { id: "5", name: "Orange", hex: "#E5902A" },
  { id: "6", name: "Red", hex: "#C53333" },
  { id: "7", name: "White", hex: "#FFFFFF" },
];

export default function ColorFilter() {
  return (
    <div className="w-[93vw] p-2 md:w-64">
      <ColorFilterItem title="Color" colors={colors} />
    </div>
  );
}
