import React, { useState } from "react";

interface SizeCategory {
  label: string;
  values: string[];
}

interface SizeFilterProps {
  title: string;
  categories: SizeCategory[];
  onSelect?: (value: string) => void;
}

const SizeFilterItem: React.FC<SizeFilterProps> = ({ title, categories, onSelect }) => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSize = (value: string) => {
    let newSelection;
    if (selected.includes(value)) {
      newSelection = selected.filter((v) => v !== value);
    } else {
      newSelection = [...selected, value];
    }

    setSelected(newSelection);
    onSelect?.(value);
  };

  return (
    <div className="border px-2 rounded pt-4 pb-4">
      {/* Title + toggle */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h3 className="font-semibold text-lg">{title}</h3>
        <span>{open ? "▾" : "▸"}</span>
      </div>

      {/* Content */}
      {open && (
        <div className="mt-4 space-y-6">
          {categories.map((cat) => (
            <div key={cat.label}>
              <p className="text-sm font-medium mb-3">{cat.label}</p>

              <div className="grid grid-cols-4 gap-3">
                {cat.values.map((value) => {
                  const isSelected = selected.includes(value);
                  return (
                    <button
                      key={value}
                      onClick={() => toggleSize(value)}
                      className={`w-full py-2 text-sm border rounded
                        ${isSelected ? "bg-black text-white" : "bg-gray-100 text-black"}
                      `}
                    >
                      {value}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SizeFilterItem;
