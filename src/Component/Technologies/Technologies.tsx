// import React, { use } from "react";
// import type { TechType } from "../Type";
// import Technology from "./Technology";

import { use, useState } from "react";
import type { TechType } from "../Type";
// import Technology from "./Technology";
import TechCard from "./TechCard";
import TechSideBar from "./TechSideBar";
import { toast } from "react-toastify";

// const Technologies = ({ techDataPromise }) => {

//   const techDatas = use(techDataPromise);

//   return (
//     <div className="">
//       <div className="md:max-w-7xl mx-auto">
//         <div className="content mb-10">
//           <h3 className="text-[36px] font-bold">
//             Explore the{" "}
//             <span className="bg-linear-to-r from-[#F97316] to-[#EC4899] bg-clip-text text-transparent">
//               Technologies
//             </span>
//           </h3>
//           <p className="text-gray-500">
//             Pick one technology per category to build your ideal stack.
//           </p>
//         </div>
//         <div className="technologies-section grid grid-cols-12">
//             <div className="col-span-9">
//                 <div className="grid grid-cols-3">
//                     {
//                         techDatas.map((techData)=><Technology techData={techData}></Technology>)
//                     }
//                 </div>
//             </div>
//             <div className="col-span-3">
//                 hello
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Technologies;
export interface TechnologiesProps {
  techDataPromise: Promise<TechType[]>;
}

export default function Technologies({ techDataPromise }: TechnologiesProps) {
  const techDatas = use(techDataPromise)

  const [selected, setSelected] = useState<TechType[]>([])

  const handleSelectedTechs = (tech: TechType)=>{
    const newSelectedTechs = [...selected, tech]
    setSelected(newSelectedTechs)
  }

  const handleRemove = (item: TechType) =>{
    setSelected(selected.filter((i)=> i.id !== item.id))
    toast.success(`Removed ${item.name} from your stack Successfully`);
  }

  const handleRemoveAll = ()=>{
    setSelected([])
    toast.success(`Removed All your stack Successfully`);
  }

//   console.log(selected);

  return (
    <div className="">
      <div className="px-5 xl:px-0 md:max-w-7xl mx-auto">
        <div className="content mb-10">
          <h3 className="text-[36px] font-bold">
            Explore the{" "}
            <span className="bg-linear-to-r from-[#F97316] to-[#EC4899] bg-clip-text text-transparent">
              Technologies
            </span>
          </h3>
          <p className="text-gray-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>
        <div className="technologies-section grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-9">
            <div className="grid md:grid-cols-3 gap-5">
              {techDatas.map((techData) =>{ 
                // <Technology techData={techData}></Technology>
                const isAdded: boolean = selected.some((tech) => tech.id === techData.id);
                return <TechCard key={techData.id} techData={techData} handleSelectedTechs={handleSelectedTechs} isAdded={isAdded}></TechCard>
              })}
            </div>
          </div>
          <div className="lg:col-span-3">
            <TechSideBar selected={selected} handleRemove={handleRemove} handleRemoveAll={handleRemoveAll}></TechSideBar>
          </div>
        </div>
      </div>
    </div>
  );
}
