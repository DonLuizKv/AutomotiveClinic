import { IconTrash } from "@tabler/icons-react";

export default function Notifications() {
    return (
        <article className="absolute top-17 right-17 h-90 min-w-70 z-10 p-3 bg-gray-400/40 backdrop-blur-md shadow-sm rounded-xl">
            <nav className="flex justify-between gap-2">
                <h4 className="text-[1.15rem]">Notificaciones</h4>
                <button>
                    <IconTrash stroke="#6a7282" strokeWidth={2} />
                </button>
            </nav>
        </article>
    );
}