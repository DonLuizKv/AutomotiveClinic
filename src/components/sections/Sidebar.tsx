"use client"
import { Sections } from "@/types/app";
import { IconCategory, IconChartHistogram, IconFileDescription, IconReceiptDollar } from "@tabler/icons-react";
import { JSX } from "react";

interface Props {
    setSections: (v: Sections) => void;
    current: Sections;
}

export default function Sidebar({ setSections, current }: Props) {

    const items: { label: string; icon: JSX.Element; value: Sections }[] = [
        { label: "Inicio", icon: <IconCategory />, value: "home" },
        { label: "Historias", icon: <IconFileDescription />, value: "historic" },
        { label: "Facturacion", icon: <IconReceiptDollar />, value: "facturation" },
        { label: "Reportes", icon: <IconChartHistogram />, value: "report" },
    ];

    return (
        <section className="min-w-60 flex flex-col gap-4 p-4 bg-gray-400/40 rounded-lg">
            <article>logo</article>

            <nav className="flex flex-col gap-4">
                {items.map((item, i) => (
                    <button
                        key={i}
                        className={`
                            ${current === item.value ? "bg-white/50 hover:bg-white/50" : ""}
                            flex rounded-lg gap-3 py-2 px-3 hover:bg-white/30
                        `}
                        onClick={() => setSections(item.value)}
                    >
                        {item.icon}
                        {item.label}
                    </button>
                ))}
            </nav>
        </section>
    );
}