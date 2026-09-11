import type { TechType } from "../Type";

export interface TechCardProps {
  techData: TechType;
  handleSelectedTechs: (tech: TechType) => void;
  isAdded: boolean;
}

const badgeColors: Record<string, string> = {
  Frontend: "bg-blue-50 text-blue-600",
  Backend: "bg-green-50 text-green-600",
  Database: "bg-blue-50 text-blue-600",
  Language: "bg-amber-50 text-amber-600",
  Styling: "bg-cyan-50 text-cyan-600",
  DevOps: "bg-sky-50 text-sky-600",
  Tools: "bg-red-50 text-red-600",
};

export default function TechCard({
  techData,
  handleSelectedTechs,
  isAdded,
}: TechCardProps) {
  const { name, category, description, icon, rating, difficulty, badge } =
    techData;

  const badgeClass = badgeColors[category] ?? "bg-gray-50 text-gray-600";

  const handleTechClick = (tech: TechType) => {
    handleSelectedTechs(tech);
  };

  return (
    <div className="flex flex-col justify-between border border-gray-200 rounded-2xl p-5 bg-white">
      <div>
        <div className="flex items-center justify-between mb-4">
          <img src={icon} alt={name} className="w-8 h-8" />
          <span
            className={`text-xs font-medium px-3 py-1 rounded-full ${badgeClass}`}
          >
            {badge}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-1.5">{name}</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
            {category}
          </span>
          <span>{difficulty}</span>
          <span className="flex items-center gap-1 ml-auto">
            <svg
              className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
              viewBox="0 0 20 20"
            >
              <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
            </svg>
            {rating}
          </span>
        </div>
      </div>

      <button
        disabled={isAdded}
        onClick={() => handleTechClick(techData)}
        className={`w-full cursor-pointer ${isAdded ? "bg-gray-300" : "bg-gray-900"} text-white text-sm font-medium py-2.5 rounded-xl`}
      >
        Add to Stack
      </button>
    </div>
  );
}
