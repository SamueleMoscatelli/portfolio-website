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
                    description="Led the refactoring and implementation of the test automation strategy over a stream of 6 teams in a leading Swiss bank."
                />
                <SingleExperience
                    role="Senior Software Engineer"
                    company="Accenture DACH"
                    duration="December 2022 - August 2024"
                    description="Developed and tested the new marketplace application of a leading German retailer. Led the development of a GPT-3.5-powered application to automate defect management across 100+ teams."
                />
                <SingleExperience
                    role="Software Engineer"
                    company="Accenture DACH"
                    duration="August 2021 - November 2022"
                    description="Developed and tested the marketplace application of a leading German retailer."
                />
            </div>
        </section>
    );
}