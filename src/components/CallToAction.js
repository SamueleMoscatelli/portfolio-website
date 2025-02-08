import Link from "next/link";

export default function CallToAction() {
    return (
        <section className="text-center max-w-4xl mx-auto mt-16 px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Let's Build the Future Together! 🌟
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                <span className="text-xl font-semibold text-blue-500">Passionate about technology</span>? Let’s connect and create something amazing with <span className="text-purple-400 font-medium">AI</span> and <span className="text-pink-400 font-medium">innovation</span>.
            </p>
            <div className="mt-6">
                {/* Button */}
                <Link href="/contact">
                    <button className="bg-blue-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105">
                        Get in Touch
                    </button>
                </Link>
            </div>
        </section>
    );
}