import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectsIntro from "@/components/ProjectsIntro";
import ProjectList from "@/components/ProjectList";

export default function Projects() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-white">
            <Navbar />
            <ProjectsIntro />
            <ProjectList />
            <Footer />
        </div>
    );
}
