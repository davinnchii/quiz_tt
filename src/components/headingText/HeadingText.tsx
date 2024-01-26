import React from "react";

type Props = {
    text: React.ReactNode | string;
}
export const HeadingText: React.FC<Props> = ({text}) => {
    return (
        <h3 className="text-center text-gray-800 text-2xl font-semibold font-Lora leading-loose mb-16 mt-8">
            {text}
        </h3>
    )
}