export default function SingleExperience({ role, company, duration, description }) {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <h3 className="text-2xl font-semibold text-blue-400">{role}</h3>
            <p className="text-gray-300 text-lg font-medium">{company}</p>
            <p className="text-gray-400 italic">{duration}</p>
            <p className="text-gray-300 mt-2 leading-relaxed">{description}</p>
        </div>
    );
}