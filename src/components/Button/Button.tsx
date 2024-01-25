import Link from "next/link";

type Props = {
    onClick?: () => Promise<void>;
    url?: string;
    text: string;
}
export const Button = ({ onClick, url, text }: Props) => {
    return (
        <div
            className="w-full px-6 py-4 bg-blue-600 rounded-xl shadow justify-center items-center gap-2 inline-flex">
            <Link
                href={url || '/'}
                className="text-center text-white text-lg font-semibold font-['Plus Jakarta Sans'] leading-normal tracking-tight"
                onClick={onClick}
            >
                {text}
            </Link>
        </div>
    );
}