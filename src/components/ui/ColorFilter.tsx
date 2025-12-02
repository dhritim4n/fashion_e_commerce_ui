import ColorFilterItem from "./ColorFilterItem";

const colors = [
  { id: "1", name: "Black", hex: "#000000" },
  { id: "2", name: "Blue", hex: "#1F5FA8" },
  { id: "3", name: "Brown", hex: "#8A5A2D" },
  { id: "4", name: "Green", hex: "#4C5F3B" },
  { id: "5", name: "Grey", hex: "#D6D6D6" },
  { id: "6", name: "Orange", hex: "#E5902A" },
  { id: "7", name: "Pink", hex: "#F6C8C8" },
  { id: "8", name: "Red", hex: "#C53333" },
  { id: "9", name: "Tan", hex: "#C7B39A" },
  { id: "10", name: "White", hex: "#FFFFFF" },
];

export default function ColorFilter() {
  return (
    <div className="w-64 p-2">
      <ColorFilterItem title="Color" colors={colors} />
    </div>
  );
}
