import {HeadingText} from "@/components/headingText/HeadingText";

export function Benefits() {
    return (
        <section>
            <HeadingText text={<>What you get</>}/>
            <div
                className="bg-white rounded-lg shadow border border-black border-opacity-10 flex-col justify-start items-center inline-flex">
                <div className="self-stretch px-6 py-3 justify-start items-start gap-3 inline-flex">
                    <img src="/icon_check_green.svg" className="w-6 h-6 relative" alt="icon check green"/>
                    <div
                        className="grow shrink basis-0 text-black text-base font-medium font-['Plus Jakarta Sans'] leading-normal">️You
                        wake up feeling motivated and energized
                    </div>
                </div>
                <div
                    className="self-stretch px-6 py-3 border-t border-black border-opacity-10 justify-start items-start gap-3 inline-flex">
                    <img src="/icon_check_green.svg" className="w-6 h-6 relative" alt="icon check green"/>
                    <div
                        className="grow shrink basis-0 text-black text-base font-medium font-['Plus Jakarta Sans'] leading-normal">You
                        start your day in harmony with prayer
                    </div>
                </div>
                <div
                    className="self-stretch px-6 py-3 border-t border-black border-opacity-10 justify-start items-start gap-3 inline-flex">
                    <img src="/icon_check_green.svg" className="w-6 h-6 relative" alt="icon check green"/>
                    <div
                        className="grow shrink basis-0 text-black text-base font-medium font-['Plus Jakarta Sans'] leading-normal">Your
                        relationships are stronger than ever
                    </div>
                </div>
                <div
                    className="self-stretch px-6 py-3 border-t border-black border-opacity-10 justify-start items-start gap-3 inline-flex">
                    <img src="/icon_check_green.svg" className="w-6 h-6 relative" alt="icon check green"/>
                    <div
                        className="grow shrink basis-0 text-black text-base font-medium font-['Plus Jakarta Sans'] leading-normal">You’re
                        commited to spiritual growth and self-improvement
                    </div>
                </div>
                <div
                    className="self-stretch px-6 py-3 border-t border-black border-opacity-10 justify-start items-start gap-3 inline-flex">
                    <img src="/icon_check_green.svg" className="w-6 h-6 relative" alt="icon check green"/>
                    <div
                        className="grow shrink basis-0 text-black text-base font-medium font-['Plus Jakarta Sans'] leading-normal">You
                        grow closer to God through everyday Bible reading
                    </div>
                </div>
            </div>
        </section>

    )
}