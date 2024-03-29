type Props = {
    onClick?: () => Promise<void>;
    text: string;
    classNames?: string;
}
export const Button = ({onClick, text, classNames}: Props) => {
    return (
        <button
            className={`w-full lg:max-w-96 px-6 py-4 bg-blue-600 rounded-xl
            shadow justify-center items-center gap-2 inline-flex text-center text-white text-lg 
            font-semibold font-['Plus Jakarta Sans'] leading-normal tracking-tight ${classNames}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}