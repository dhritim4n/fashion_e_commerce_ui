import React, {  useState } from "react";

interface ColorItem {
  id: string;
  name: string;
  hex: string;
}

interface ColorFilterProps {
  title: string;
  colors: ColorItem[];
  defaultVisible?: number;
}

const ColorFilterItem: React.FC<ColorFilterProps> = ({
  title,
  colors,
  defaultVisible = 6,
}) => {
  const [open, setOpen] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const visibleColors = showAll ? colors : colors.slice(0, defaultVisible);

  return (
    <div className="border rounded px-2 pt-4 pb-4 overflow-hidden  md:w-60">
      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h3 className="font-semibold text-lg">{title}</h3>
        <span>{open ? "▾" : "▸"}</span>
      </div>

      {/* Color Grid */}
      {open && (
        <div className="mt-4  border-t pt-4">
          <div className="grid grid-cols-3 gap-y-6">
            {visibleColors.map((color) => (
              <div
                key={color.id}
                className="flex flex-col items-center cursor-pointer"
              >
                <div
                  className="w-8 h-8 rounded-full border border-gray-300 hover:transform hover:scale-150"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="text-xs mt-2 text-center">{color.name}</span>
              </div>
            ))}
          </div>

          {/* View More */}
          {colors.length > defaultVisible && (
            <button
              className="text-sm text-gray-600 mt-4 hover:underline"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "View Less -" : "View More +"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ColorFilterItem;
