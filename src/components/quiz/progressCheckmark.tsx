import {CircularProgress} from "@nextui-org/progress";
import React from "react";

type Props = {
    value: number
}
export const ProgressCheckmark: React.FC<Props> = ({value}) => {
    return (
        <>
            {value >= 100 ? (
                <img
                    alt="circle_Check"
                    className="w-6 h-6" src="/circle_check.svg"/>
            ) : (
                <CircularProgress
                    aria-label="Loading..."
                    size="sm"
                    value={value}
                    color="default"
                    maxValue={100}
                    strokeWidth={1}
                    classNames={{
                        svg: "w-6 h-6 drop-shadow-md",
                        indicator: "stroke-gray-800",
                        track: "stroke-white/2",
                    }}
                />
            )
            }
        </>
    )
}