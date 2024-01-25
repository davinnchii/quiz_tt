import {Metadata} from "next";
import {Header} from "@/components/header/Header";

export const metadata: Metadata = {
    title: "Get your plan",
    description: "Last steps before you getting your plan",
};

export default function Layout({children}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header/>
            <main className="h-[95%] p-6 flex flex-col md:items-center">
                {children}
            </main>
        </>
    )
}