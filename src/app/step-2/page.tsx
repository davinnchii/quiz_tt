'use client';
import {HeadingText} from "@/components/headingText/HeadingText";
import {Button} from "@/components/Button/Button";
import {getQuizData} from "@/utils/quizAPI";
import {useRouter} from "next/navigation";

export default function Page() {
    const router = useRouter();

    const onClick = async () => {
        const data = await getQuizData()
        console.log(data);

        router.push('/landing-page');
    }
    return (
        <>
            <HeadingText text={<>See your Spiritual Growth <br/> progress by Sep 17, 2024</>}/>
            <div className="relative h-full flex flex-col lg:w-[25%]">
                <div className="absolute top-[-5rem] right-0 px-3 py-2 box-border bg-gradient-to-bl from-rose-500 to-amber-500
                rounded-lg text-center">
                    <span className="text-white text-sm font-bold font-Inter leading-tight">
                        Sep 17
                    </span>
                    <br/>
                    <span className="text-white text-xs font-semibold font-Inter leading-tight">
                        2024
                    </span>
                </div>
                <div className="flex flex-col min-h-[250px] justify-between">
                    <div className="w-full h-px bg-black bg-opacity-10"/>
                    <div className="w-full h-px bg-black bg-opacity-10"/>
                    <div className="w-full h-px bg-black bg-opacity-10"/>
                    <div className="w-full h-px bg-black bg-opacity-10"/>
                    <div className="w-full h-px bg-black bg-opacity-10"/>
                    <div className="w-full h-px bg-black bg-opacity-10"/>
                </div>
                <div
                    className="absolute left-0 bottom-[-2.5rem] lg:bottom-[17rem] w-[55px] h-9 px-3 py-2 bg-white rounded-lg shadow border border-black border-opacity-10">
                    <div className="text-black text-sm font-medium font-['Inter'] leading-tight">Now</div>
                </div>
                <div className="absolute top-0 left-0 ">
                    <img src="/graph.png" alt="graph"/>
                </div>
            </div>
            <Button text="Continue" onClick={onClick} classNames="mt-8"/>
        </>
    )
}
