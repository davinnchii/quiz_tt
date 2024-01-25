import {Star} from "@/sections/reviews/star/star";

type Props = {
    author: string;
    date: string;
    comment: string;
}

export function UserReview({author, date, comment}: Props) {
    return (
        <div
            className="self-stretch p-3 bg-white rounded-lg shadow border border-black border-opacity-10 justify-start items-start gap-3 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-center items-start gap-2 inline-flex">
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-center items-start inline-flex">
                        <div
                            className="self-stretch text-black text-sm font-bold font-['Plus Jakarta Sans'] leading-normal">
                            {author}
                        </div>
                        <div
                            className="self-stretch text-black text-opacity-50 text-xs font-normal font-['Plus Jakarta Sans'] leading-none">2
                            {date}
                        </div>
                    </div>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                </div>
                <div className="self-stretch text-black text-sm font-normal font-['Plus Jakarta Sans'] leading-tight">
                    {comment}
                </div>
            </div>
        </div>
    );
}