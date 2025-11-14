"use client"
import Dashboard from "@/components/dashboard/Dashboard";
import Header from "@/components/sections/Header";
import Sidebar from "@/components/sections/Sidebar";
import { Sections } from "@/types/app";
import { JSX, useState } from "react";

export default function Home() {

    const [sections, setSections] = useState<Sections>("dashboard");

    const SectionComponents: Record<Sections, JSX.Element> = {
        dashboard: <Dashboard />
    };

    return (
        <main>
            <Sidebar setSections={setSections} current={sections} />

            <section>
                <Header />
                {SectionComponents[sections]}
            </section>
        </main>
    );
}