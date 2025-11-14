"use client"
import Dashboard from "@/components/dashboard/Dashboard";
import Facturation from "@/components/facturation/Facturation";
import Historic from "@/components/historic/Historic";
import Reports from "@/components/reports/Reports";
import Header from "@/components/sections/Header";
import Sidebar from "@/components/sections/Sidebar";
import { Sections } from "@/types/app";
import { JSX, useState } from "react";

export default function Home() {

    const [sections, setSections] = useState<Sections>("home");

    const SectionComponents: Record<Sections, JSX.Element> = {
        home: <Dashboard />,
        historic:<Historic/>,
        facturation:<Facturation/>,
        report:<Reports/>
    };

    return (
        <main className="min-h-dvh w-full p-4 flex gap-3 max-xl:flex-col ">
            <Sidebar setSections={setSections} current={sections} />

            <section className="flex flex-col gap-3 w-full max-xl:flex-1">
                <Header />
                {SectionComponents[sections]}
            </section>
        </main>
    );
}