import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex space-x-4">
          <Link href="/" className="text-gray-900 hover:text-blue-600">
            Intro
          </Link>
          <Link href="/method-a" className="text-gray-900 hover:text-blue-600">
            Method A
          </Link>
          <Link href="/method-b" className="text-gray-900 hover:text-blue-600">
            Method B
          </Link>
        </nav>
      </div>
    </header>
  );
}
