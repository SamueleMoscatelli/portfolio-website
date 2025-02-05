import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      <Navbar />
      <section className="py-24 text-center">
        <h1 className="text-3xl font-bold">About Me</h1>
        <p className="mt-4">A little bit about myself...</p>
      </section>
      <Footer />
    </div>
  );
}
