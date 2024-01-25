import {Metadata} from "next";
import {Header} from "@/components/header/Header";

export const metadata: Metadata = {
    title: "Explore available plans",
    description: "Choose what suits you best",
};

export default function Layout({children}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header/>
            <main className="p-6 flex flex-col gap-10">
                {children}
            </main>
        </>
    )
}