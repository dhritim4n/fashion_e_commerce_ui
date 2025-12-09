import ColorFilterItem from "./ColorFilterItem";

const colors = [
  { id: "1",  name: "Black", hex: "#1E1E1E" },
  { id: "2",  name: "Olive", hex: "#5A654A" },
  { id: "3",  name: "White", hex: "#FFFFFF" },
  { id: "4",  name: "Navy", hex: "#2C3E50" },
  { id: "10", name: "Gold", hex: "#FFD700" },
  { id: "11", name: "Silver", hex: "#C0C0C0" },
  { id: "12", name: "Denim Blue", hex: "#34495E" },
  { id: "13", name: "Light Grey", hex: "#BFC3C7" },
  { id: "14", name: "Ash Grey", hex: "#A3A3A3" },
  { id: "15", name: "Steel Blue", hex: "#37474F" }
];


export default function ColorFilter() {
  return (
    <div className="w-[93vw] p-2 md:w-64">
      <ColorFilterItem title="Color" colors={colors} />
    </div>
  );
}
