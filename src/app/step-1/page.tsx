"use client";
import {HeadingText} from "@/components/headingText/HeadingText";
import {EmailInput} from "@/components/emailInput/emailInput";
import {useState} from "react";
import {Button} from "@/components/Button/Button";
import {sendQuizData} from "@/utils/quizAPI";
import {useRouter} from "next/navigation";


export default function Page() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        setIsValid(true);
    }

    async function onClick() {
        if (!email) {
            setIsValid(false);
            return;
        }

        await sendQuizData({email});

        const timeout = setTimeout(() => router.push('/step-2'), 1000);
    }

    return (
        <>
            <div className="flex flex-col gap-3">
                <HeadingText text={<>Enter your email to get <br/> your personalised <br/> Spiritual Growth Plan</>}/>
                <EmailInput value={email} onChange={handleChangeEmail} isValid={isValid}/>
                {!isValid && (
                    <span className="text-red-600 text-xs font-medium font-['Inter'] leading-normal">Error</span>
                )}
            </div>
            <Button text="Continue" onClick={onClick} />
        </>
    );
};
