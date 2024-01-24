import React from "react";

type Props = {
    text: string;
}
export const HeadingText: React.FC<Props> = ({text}) => {
    return (
        <h3 className="text-center text-gray-800 text-2xl font-semibold font-Lora leading-loose">
            {text}
        </h3>
    )
}