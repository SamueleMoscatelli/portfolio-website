import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition duration-300">
          Home
        </Link>
        <ul className="flex space-x-8">
          <li>
            <Link
              href="/about"
              className="text-lg font-medium text-white hover:text-blue-400 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-lg font-medium text-white hover:text-blue-400 transition duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-lg font-medium text-white hover:text-blue-400 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
