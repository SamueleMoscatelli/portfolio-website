import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ContactHeader } from "../components/ContactHeader";

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-white">
            <Navbar />
            <ContactHeader />
            <Footer />
        </div>
    );
}

