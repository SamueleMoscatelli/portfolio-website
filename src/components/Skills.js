export default function Skills() {
    return (
        <section className="max-w-4xl mx-auto mt-16 px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
                What I Do 🛠️
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-gray-300">
                <div className="bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                    <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                        🚀 Software Engineering
                    </h3>
                    <p>
                        <span className="text-purple-400 font-medium">Building scalable, high-performance applications</span> with efficiency in mind.
                    </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                    <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                        🤖 Artificial Intelligence
                    </h3>
                    <p>
                        Designing <span className="text-pink-400 font-medium">intelligent algorithms</span> for automation, deep learning, and AI-powered applications.
                    </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                    <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                        📡 Tech Leadership
                    </h3>
                    <p>
                        Leading projects, mentoring teams, and shaping <span className="text-blue-500 font-medium">strategic technology decisions</span>.
                    </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                    <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                        🌍 Continuous Learning
                    </h3>
                    <p>
                        Exploring <span className="text-purple-400 font-medium">emerging technologies</span> to stay ahead of the curve.
                    </p>
                </div>
            </div>
        </section>
    );
}