import React, {useEffect} from "react";
import {CircularProgress} from "@nextui-org/progress";

type Props = {
    value: number
}

export default function ProgressSpinner({value}: Props) {
    return (
        <CircularProgress
            aria-label="Loading..."
            size="lg"
            value={value}
            color="success"
            maxValue={100}
            showValueLabel={true}
            strokeWidth={2}
            classNames={{
                svg: "w-64 h-64 drop-shadow-md",
                indicator: "stroke-progressSpinner",
                track: "stroke-white/2",
                value: "text-black text-[40px] font-semibold font-Lora leading-[56px]"
            }}
        />
    );
}