'use client';
import {HeadingText} from "@/components/headingText/HeadingText";
import ProgressSpinner from "@/components/quiz/progressSpinner";
import React, {useEffect, useState} from "react";
import {redirect, useRouter} from "next/navigation";
import {ProgressCheckmark} from "@/components/quiz/progressCheckmark";

export const Quiz = () => {
    const [value, setValue] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
            setValue((v) => {
                if (v === 95) {
                    clearInterval(interval);
                }
                return v + 5
            });
        }, 500);
    }, []);

    useEffect(() => {
        if (value >= 100) {
            const timeout = setTimeout(() => {
                router.push('http://localhost:3000/email')
            }, 2000);

            return () => clearTimeout(timeout);
        }
    }, [value]);

    return (
        <main className="p-6 flex-col justify-start items-center gap-6 inline-flex text-center w-full">
            <HeadingText text="We are crafting your spiritual growth plan"/>
            <ProgressSpinner value={value}/>
            <div
                className="rounded-xl border border-slate-200 flex-col justify-start inline-flex">
                <div className="p-2 bg-white border-b border-slate-200 justify-start items-center gap-3 inline-flex">
                    <ProgressCheckmark value={value * 6}/>
                    <p className="text-black text-base font-medium font-Jakarta leading-normal">
                        Aligning with your goals
                    </p>
                </div>
                <div className="p-2 bg-white border-b border-slate-200 justify-start items-center gap-3 inline-flex">
                    <ProgressCheckmark value={value * 4}/>
                    <p className="text-black text-base font-medium font-Jakarta leading-normal">
                        Reviewing your answers
                    </p>
                </div>
                <div className="p-2 bg-white border-b border-slate-200 justify-start items-center gap-3 inline-flex">
                    <ProgressCheckmark value={value * 2}/>
                    <p className="text-black text-base font-medium font-Jakarta leading-normal">
                        Picking Bible verses and prayers for you
                    </p>
                </div>
                <div className="p-2 bg-white border-b border-slate-200 justify-start items-center gap-3 inline-flex">
                    <ProgressCheckmark value={value}/>
                    <p className="text-black text-base font-medium font-Jakarta leading-normal">
                        Finalizing your personalized plan
                    </p>
                </div>

            </div>
        </main>
    )
};
