import {reviews} from "@/testData/reviews";
import {UserReview} from "@/sections/reviews/userReview/userReview";

export function Reviews() {
    return (
        <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
                <h3 className="text-center text-black text-2xl font-semibold font-['Lora'] leading-loose">
                    People just like you achieved <br/> great results with App!
                </h3>
                <div
                    className="bg-white rounded-lg shadow
                border border-black border-opacity-10 flex-col justify-start items-center inline-flex">
                    <div
                        className="self-stretch p-4 border-t border-black border-opacity-10 justify-between items-center gap-3 inline-flex">
                        <div
                            className="text-right text-black text-[32px] font-semibold font-['Lora'] leading-10">71%
                        </div>
                        <div
                            className="grow shrink basis-0 text-black text-sm font-semibold font-['Plus Jakarta Sans'] leading-tight">of
                            users were able to feel the power of prayer after just 6 weeks
                        </div>
                    </div>
                    <div
                        className="self-stretch p-4 border-t border-black border-opacity-10 justify-start items-center gap-3 inline-flex">
                        <div
                            className="text-right text-black text-[32px] font-semibold font-['Lora'] leading-10">65%
                        </div>
                        <div
                            className="grow shrink basis-0 text-black text-sm font-semibold font-['Plus Jakarta Sans'] leading-tight">of
                            users started to have a meaningful daily routine and peaceful mind
                        </div>
                    </div>
                    <div
                        className="self-stretch p-4 border-t border-black border-opacity-10 justify-start items-center gap-3 inline-flex">
                        <div
                            className="text-right text-black text-[32px] font-semibold font-['Lora'] leading-10">47%
                        </div>
                        <div
                            className="grow shrink basis-0 text-black text-sm font-semibold font-['Plus Jakarta Sans'] leading-tight">of
                            users struggled with finding time for daily praying
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-center text-black text-2xl font-semibold font-['Lora'] leading-loose">
                    Users love App!
                </h3>
                <article className="flex flex-col gap-4">
                    {reviews.map(review => (
                        <UserReview
                            author={review.author}
                            comment={review.comment}
                            date={review.date}
                            key={review.id}
                        />
                    ))}
                </article>
            </div>
        </section>
    )
}