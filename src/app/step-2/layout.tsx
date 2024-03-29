import {Metadata} from "next";
import {Header} from "@/components/header/Header";
import {Button} from "@/components/Button/Button";

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
            <main className="h-full justify-between p-6 flex flex-col md:items-center gap-8">
                {children}
            </main>
        </>
    )
}