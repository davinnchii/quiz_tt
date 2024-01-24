import {MouseEventHandler} from "react";

type Props = {
    onClick: () => Promise<void>
}
export const ContinueButton = ({ onClick }: Props) => {
    return (
        <div
            className="px-6 py-4 bg-blue-600 rounded-xl shadow justify-center items-center gap-2 inline-flex">
            <button
                className="text-center text-white text-lg font-semibold font-['Plus Jakarta Sans'] leading-normal tracking-tight"
                onClick={onClick}
            >
                Continue
            </button>
        </div>
    );
}