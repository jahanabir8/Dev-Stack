import type { TechType } from "../Type";

export interface TechSideBarProps {
  selected: TechType[];
  handleRemove: (tech: TechType)=>void;
}

export default function TechSideBar({ selected, handleRemove }: TechSideBarProps) {
  return (
    // <>

    //     {
    //         selected.length === 0 ? <p>No tech selected yet</p> : <p>{selected.length} tech selected</p>
    //     }
    // </>

    <div className="sticky top-6 border border-gray-200 rounded-2xl p-5 bg-white h-fit">
      <h3 className="text-lg font-semibold text-gray-900">Your Stack</h3>
      <p className="text-sm text-gray-400 mb-4">
        {selected.length} Technology Selected
      </p>

      {selected.length === 0 ? (
        <p className="text-sm text-gray-400 mb-4">No technology added yet.</p>
      ) : (
        <div className="flex flex-col gap-3 mb-4">
          {selected.map((tech) => (
            <div
                key={tech.id}
              className="flex items-center justify-between border border-gray-200 rounded-xl p-3"
            >
              <div className="flex items-center gap-3">
                <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {tech.name}
                  </p>
                  <p className="text-xs text-gray-400">{tech.category}</p>
                </div>
              </div>
              <button
                // onClick={() => onRemove(tech.id)}
                onClick={()=>handleRemove(tech)}
                aria-label={`Remove ${tech.name}`}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      {
        selected.length > 1 ? <button className="w-full border border-red-200 text-red-500 text-sm font-medium py-2 rounded-xl hover:bg-red-50 transition-colors">
        Remove All
      </button> : ''
      }
    </div>
  );
}
