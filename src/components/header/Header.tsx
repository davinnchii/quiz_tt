"use client";
import {useRouter} from "next/navigation";
import Link from "next/link";

export const Header = () => {
    const router = useRouter();
    return (
        <header className="w-full h-10 px-4 pt-1 justify-between items-center inline-flex">
            <div className="p-2 bg-black bg-opacity-0 rounded-lg">
                <button onClick={() => router.back()}>
                    <img src="/shape.svg"/>
                </button>
            </div>
            <Link href="/" className="text-center text-gray-800 text-lg font-bold font-Lora leading-tight">App</Link>
            <div className="p-2 bg-black bg-opacity-0 rounded-lg">
                <img src="/menu.svg"/>
            </div>
        </header>
    );
}