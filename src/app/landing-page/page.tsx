'use client';

import {useEffect} from "react";
import {getQuizData} from "@/utils/quizAPI";
import {ChoosePlan} from "@/sections/choosePlan/choosePlan";
import {Benefits} from "@/sections/benefits/benefits";
import {Reviews} from "@/sections/reviews/reviews";

export default function Page() {
    useEffect(() => {
        getQuizData().then(console.log);
    }, []);

    return (
        <>
            <ChoosePlan />
            <Benefits />
            <Reviews />
            <ChoosePlan />
        </>
    )
};
