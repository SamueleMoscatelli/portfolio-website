export default function AboutIntro() {
    return (
        <div className="flex-1 flex items-center justify-center bg-gray-900 text-white">
            <section className="text-center p-8 max-w-screen-lg mx-auto px-4 md:px-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-blue-400">
                    About Me
                </h1>
                <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto leading-relaxed">
                    <span className="text-xl font-semibold text-blue-500">My passion for technology</span> goes beyond just writing code - it's about shaping the future through <span className="text-purple-400 font-medium">Artificial Intelligence</span> and <span className="text-pink-400 font-medium">innovation</span>.
                </p>
            </section>
        </div>
    );
}
