import { HiMiniXMark } from "react-icons/hi2";
import type { TechType } from "../Type";

export interface TechSideBarProps {
  selected: TechType[];
  handleRemove: (tech: TechType) => void;
  handleRemoveAll: () => void;
}

export default function TechSideBar({
  selected,
  handleRemove,
  handleRemoveAll,
  
}: TechSideBarProps) {
  return (
    <div className="sticky top-6 border border-gray-100 shadow-sm rounded-2xl p-5 bg-white h-fit">
      <h3 className="text-lg font-bold text-gray-900">Your Stack</h3>
      <p className="text-sm text-gray-400 mb-4">
        {selected.length === 0
          ? "No technologies selected yet."
          : `${selected.length} Technology Selected`}
      </p>

      {selected.length === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-xl py-10 flex items-center justify-center">
          <p className="text-sm text-gray-400">Your stack is empty.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3 mb-4">
          {selected.map((tech) => (
            <div
              key={tech.id}
              className="group flex items-center justify-between border border-gray-200 rounded-xl p-3"
            >
              <div className="flex items-center gap-3">
                <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{tech.name}</p>
                  <p className="text-xs text-gray-400">{tech.category}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(tech)}
                aria-label={`Remove ${tech.name}`}
                className="text-gray-300 hover:text-gray-500 group-hover:opacity-100 transition-opacity"
              >
                <HiMiniXMark />
              </button>
            </div>
          ))}
        </div>
      )}

      {selected.length > 0 && (
        <button
          onClick={handleRemoveAll}
          className="w-full border border-red-200 text-red-500 text-sm font-medium py-2 rounded-xl hover:bg-red-50 transition-colors cursor-pointer"
        >
          Remove All
        </button>
      )}
    </div>
  );
}