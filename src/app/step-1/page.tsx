"use client";
import {HeadingText} from "@/components/headingText/HeadingText";
import {EmailInput} from "@/components/emailInput/emailInput";
import {useState} from "react";
import {Button} from "@/components/Button/Button";
import {sendQuizData} from "@/utils/quizAPI";
import {useRouter} from "next/navigation";
import {EMAIL_REGEX} from "@/utils/constants";


export default function Page() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        setIsValid(true);
        setErrorMessage('');
    }

    async function onClick() {
        if (!email) {
            setIsValid(false);
            setErrorMessage('Email can\'t be empty!');
            return;
        }

        if (!EMAIL_REGEX.test(email)) {
            setIsValid(false);
            setErrorMessage('Invalid format of email, try something like test@gmail.com');
            return;
        }

        await sendQuizData({email});

        router.push('/step-2');
    }

    return (
        <>
            <div className="flex flex-col gap-3 w-full items-center">
                <HeadingText text={<>Enter your email to get <br/> your personalised <br/> Spiritual Growth Plan</>}/>
                <EmailInput value={email} onChange={handleChangeEmail} isValid={isValid}/>
                {!isValid && (
                    <span className="text-red-600 text-xs font-medium font-['Inter'] leading-normal">{errorMessage}</span>
                )}
            </div>
            <Button text="Continue" onClick={onClick} />
        </>
    );
};
