"use client"
import { Sections } from "@/types/app";

interface Props {
    setSections: (v: Sections) => void;
    current: Sections;
}

export default function Sidebar({ setSections, current }: Props) {

    const items: { label: string; value: Sections }[] = [
        { label: "Dashboard", value: "dashboard" },
    ];

    return (
        <section>
            <article>logo</article>

            <nav>
                {items.map((item, i) => (
                    <button
                        key={i}
                        className={`
                            ${current === item.value ? "bg-white/20" : ""}

                        `}
                        onClick={() => setSections(item.value)}
                    >
                        {item.label}
                    </button>
                ))}
            </nav>
        </section>
    );
}