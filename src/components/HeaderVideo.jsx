export default function HeaderVideo({ video, title, desc }) {
    return (
        <section className="relative w-full h-[100vh] center">
            <video
                className="w-full h-full object-cover brightness-50"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={video} type="video/mp4" />
            </video>
            <article className="text-(--light) font-bold absolute text-center">
                <h1 className="xl:text-4xl text-3xl">{title}</h1>
                <h1 className="xl:text-2xl text-lg mt-2">{desc}</h1>
            </article>
        </section>

    )
}