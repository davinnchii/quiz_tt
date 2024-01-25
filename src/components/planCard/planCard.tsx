type Props = {
    price: string,
    period: string,
    withBanner?: boolean
}
export function PlanCard({price, period, withBanner = false}: Props) {
    return (
        <div className={`w-full ${withBanner ? "rounded-b-lg" : "rounded-lg"} p-4
        self-stretch bg-slate-100 flex justify-between items-center`}>
            <input type="radio"
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