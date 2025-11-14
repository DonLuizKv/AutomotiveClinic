
export default function Dashboard() {
    return (
        <section className="h-full w-full grid grid-cols-3 grid-rows-4 gap-3">
            <article className="p-2 flex items-center justify-center row-span-4 col-start-3 row-start-1 bg-gray-400/40 rounded-lg">1</article>
            <article className="p-2 flex items-center justify-center row-span-2 col-start-2 row-start-1 bg-gray-400/40 rounded-lg">2</article>
            <article className="p-2 flex items-center justify-center row-span-2 col-start-1 row-start-1 bg-gray-400/40 rounded-lg">3</article>
            <article className="p-2 flex items-center justify-center col-span-2 row-span-2 row-start-3 bg-gray-400/40 rounded-lg">4</article>
        </section>
    );
}