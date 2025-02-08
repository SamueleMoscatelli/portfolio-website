import Link from "next/link";

export default function ProjectCard({ title, description, technologies, link }) {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-500 hover:shadow-xl transition-transform transform hover:scale-105 h-full flex flex-col justify-between">
            <div>
                <h3 className="text-2xl font-semibold text-blue-400">{title}</h3>
                <p className="text-gray-300 mt-2">{description}</p>
                <p className="text-gray-400 mt-2 text-sm">
                    <span className="font-semibold text-purple-400">Technologies:</span> {technologies.join(", ")}
                </p>
            </div>
            <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-blue-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105 inline-block mt-4">
                    View Project
                </button>
            </Link>
        </div>
    );
}
