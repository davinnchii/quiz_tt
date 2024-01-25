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

        const timeout = setTimeout(() => router.push('/landing-page'), 1000);
    }
    return (
        <>
            <HeadingText text={<>See your Spiritual Growth <br/> progress by Sep 17, 2024</>}/>
            <div className="h-full relative mt-8 flex flex-col justify-end lg:w-[25%]">
                <div className="absolute top-[-1rem] right-0 md:right-24 lg:right-24 px-4 py-2 bg-gradient-to-bl from-rose-500 to-amber-500
                rounded-lg text-center">
                    <span className="text-white text-sm font-bold font-Inter leading-tight">
                        Sep 17
                    </span>
                    <br/>
                    <span className="text-white text-xs font-semibold font-Inter leading-tight">
                        2024
                    </span>
                </div>
                <div className="w-full h-px left-0 top-[305px] absolute bg-black bg-opacity-10"/>
                <div className="w-full h-px left-0 top-[258px] absolute bg-black bg-opacity-10"/>
                <div className="w-full h-px left-0 top-[211px]  absolute bg-black bg-opacity-10"/>
                <div className="w-full h-px left-0 top-[164px] absolute bg-black bg-opacity-10"/>
                <div className="w-full h-px left-0 top-[117px] absolute bg-black bg-opacity-10"/>
                <div className="w-full h-px left-0 top-[70px] absolute bg-black bg-opacity-10"/>
                <div
                    className="absolute left-0 bottom-28 lg:bottom-[22rem] w-[55px] h-9 px-3 py-2 bg-white rounded-lg shadow border border-black border-opacity-10">
                    <div className="text-black text-sm font-medium font-['Inter'] leading-tight">Now</div>
                </div>
                <div className="absolute top-16 left-0">
                    <img src="/graph.png" alt="graph"/>
                </div>

                <Button text="Continue" onClick={onClick} />
            </div>
        </>
    )
}
