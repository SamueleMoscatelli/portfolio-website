import { AiOutlineMail } from 'react-icons/ai'; // Email icon
import { FaLinkedinIn } from 'react-icons/fa'; // LinkedIn icon
import { FaGithub } from 'react-icons/fa'; // GitHub icon

export function ContactHeader() {
    return (
        <div className="flex-1 flex justify-center bg-gray-900 text-white">
            <section className="text-center p-8 max-w-screen-lg mx-auto px-4 md:px-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-blue-400">Get in Touch ✉️</h1>
                <p className="text-lg md:text-xl text-gray-300 mt-4">
                    Whether you have a question, a project idea, or just want to say hi, feel free to reach out!
                </p>
                <p className="text-lg md:text-xl text-gray-300 mt-4">You can find me on:</p>
                <div className="mt-4 flex flex-wrap justify-center gap-4 sm:gap-6">
                    <a
                        href="https://www.linkedin.com/in/samuele-moscatelli/"
                        className="flex items-center text-blue-400 hover:text-blue-300 transition text-2xl"
                    >
                        <AiOutlineMail className="mr-2 sm:mr-3 text-3xl" /> Email
                    </a>
                    <a
                        href="https://www.linkedin.com/in/samuele-moscatelli/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-400 hover:text-blue-300 transition text-2xl"
                    >
                        <FaLinkedinIn className="mr-2 sm:mr-3 text-3xl" /> LinkedIn
                    </a>
                    <a
                        href="https://github.com/SamueleMoscatelli"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-400 hover:text-blue-300 transition text-2xl"
                    >
                        <FaGithub className="mr-2 sm:mr-3 text-3xl" /> GitHub
                    </a>
                </div>
            </section>
        </div>
    );
}
