"use client";
import {HeadingText} from "@/components/headingText/HeadingText";
import {EmailInput} from "@/components/emailInput/emailInput";
import {useState} from "react";
import {ContinueButton} from "@/components/continueButton/continueButton";


export default function Page() {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        setIsValid(true);
    }

    async function onClick() {
        const options: RequestInit = {method: 'POST'};

        if (!email) {
            setIsValid(false);
            return;
        }

        options.body = JSON.stringify({email});
        options.headers = {'Content-Type': 'application/json'};

        const response = await fetch('/api/quizResults', options)

        const data = await response.json();

        console.log(data);
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
            <ContinueButton onClick={onClick}/>
        </>
    );
};
