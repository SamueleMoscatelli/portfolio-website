import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter

export default function Navbar() {
  const router = useRouter(); // Get the current route

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className={`text-2xl font-bold transition duration-300 ${
            router.pathname === "/" ? "text-blue-400" : "text-white hover:text-blue-400"
          }`}
        >
          Home
        </Link>
        <ul className="flex space-x-8">
          {[
            { name: "About", path: "/about" },
            { name: "Projects", path: "/projects" },
            { name: "Contact", path: "/contact" },
          ].map(({ name, path }) => (
            <li key={path}>
              <Link
                href={path}
                className={`text-lg font-medium transition duration-300 ${
                  router.pathname === path ? "text-blue-400" : "text-white hover:text-blue-400"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
