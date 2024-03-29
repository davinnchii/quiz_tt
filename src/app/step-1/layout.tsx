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
            <main className="h-[90%] p-6 flex flex-col content-between justify-between items-center">
                {children}
            </main>
        </>
    )
}