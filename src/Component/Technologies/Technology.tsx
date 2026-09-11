import type { TechType } from "../Type"
import TechCard from "./TechCard"

export interface TechnologyProps {
    techData: TechType
}

export default function Technology({ techData }: TechnologyProps) {
    
    return (
        <TechCard techData={techData}></TechCard>
    )
}