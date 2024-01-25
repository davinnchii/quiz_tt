'use client';
import {HeadingText} from "@/components/headingText/HeadingText";
import {PlanCard} from "@/components/planCard/planCard";
import {Button} from "@/components/Button/Button";
import {ChangeEvent, useState} from "react";


export function ChoosePlan() {
    const [selectedPlan, setSelectedPlan] = useState('3-Month');

    const handleChangePlan = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedPlan(event.target.value);
    }

    return (
        <section className="gap-3 flex-col flex md:items-center md:max-w-96">
            <HeadingText text={<>Choose your plan</>}/>
            <PlanCard onChange={handleChangePlan} selectedPlan={selectedPlan} price='10' period='1-Month'/>
            <div className="md:flex md:flex-col md:w-[100%] md:items-center">
                <div className="px-3 py-1 bg-gray-800 rounded-t-lg md:max-w-96 md:w-full">
                    <div
                        className="text-center text-white text-xs font-bold font-['Plus Jakarta Sans'] leading-none">MOST
                        POPULAR
                    </div>
                </div>
                <PlanCard onChange={handleChangePlan} price='30' period='3-Month' selectedPlan={selectedPlan}/>
            </div>
            <PlanCard onChange={handleChangePlan} price='60' period='6-Month' selectedPlan={selectedPlan}/>
            <Button text="Get my plan"/>
            <div className="text-center md:max-w-96">
                    <span
                        className="text-slate-500 text-[10px] font-normal font-['Plus Jakarta Sans'] leading-none">
                You are enrolling in a 3-monthly subscription to<br/>
                <strong>https://awesomeapp.com/subscription </strong>
               with the discount price $29.99.You agree that the plan you selected will automatically be extended at the
                full price for successive renewal periods and you will be charged $99.99 every 3 months until you cancel
                the subscription. Payments will be charged from the card you specified here. You can cancel your
                subscription by contacting our customer support team via email at support@awesomeapp.com Subscription Policy.
                The charge will appear on your bill as &quot;awesomeapp&quot;
                    </span>
            </div>
        </section>
    )
}