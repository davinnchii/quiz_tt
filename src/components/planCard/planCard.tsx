import {ChangeEvent, MouseEventHandler} from "react";

type Props = {
    price: string,
    period: string,
    selectedPlan: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
}
export function PlanCard({price, period, selectedPlan, onChange}: Props) {
    return (
        <div className={`w-full flex self-stretch lg:self-center
        ${selectedPlan === period ? "rounded-b-lg" : "rounded-lg"} p-4
         bg-slate-100 justify-between items-center lg:max-w-96`}>
            <input type="radio"
                   value={period}
                   checked={selectedPlan === period}
                   onChange={onChange}
                   className="appearance-none w-6 h-6
                       before:bg-radio before:block before:fill-slate-300 before:w-full before:h-full
                       checked:before:bg-radioChecked"/>
            <span className="text-gray-800 text-lg font-bold font-['Plus Jakarta Sans'] leading-normal">
                    {period} Plan
                </span>
            <div
                className="px-3 py-2 bg-slate-200 rounded border border-slate-200 gap-1 inline-flex">
                <span className="text-gray-800 text-base font-bold font-['Plus Jakarta Sans'] leading-tight">$</span>
                <span className="text-gray-800 text-5xl font-extrabold font-['Plus Jakarta Sans'] leading-10">{price}</span>
            </div>
        </div>
    )
}