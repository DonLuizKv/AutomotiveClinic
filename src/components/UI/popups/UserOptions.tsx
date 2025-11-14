import { IconLogout, IconSettings } from "@tabler/icons-react";

export default function UserOptions() {
    return (
        <article className="absolute top-17 right-0 h-fit min-w-30 z-20 p-3 bg-gray-400/40 backdrop-blur-md shadow-sm rounded-xl">
            <nav className="flex flex-col gap-2">
                <button className="flex justify-center gap-1.5">
                    <IconSettings/>
                    <p className="font-semibold">Configuracion</p>
                </button>
                <hr className="border-gray-400"/>
                <button className="flex justify-center gap-1.5">
                    <IconLogout color="#B33A3A"/>
                    <p className="font-semibold text-[#B33A3A]">Salir</p>
                </button>
            </nav>
        </article>
    );
}