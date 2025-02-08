import SingleExperience from './SingleExperience';

export default function WorkExperience() {
    return (
        <section className="max-w-4xl mx-auto mt-16 px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
                Work Experience 💼
            </h2>
            <div className="space-y-6">
                <SingleExperience
                    role="Tech Lead"
                    company="Accenture DACH"
                    duration="September 2024 - Present"
                    description="Tech lead in leading Swiss bank project."
                />
                <SingleExperience
                    role="Tech Lead"
                    company="Accenture DACH"
                    duration="December 2023 - August 2024"
                    description="Tech Lead in leading German retailer project."
                />
                <SingleExperience
                    role="Senior Software Engineer"
                    company="Accenture DACH"
                    duration="August 2021 - November 2023"
                    description="Senior Software Engineer in leading German retailer project."
                />
            </div>
        </section>
    );
}