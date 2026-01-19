import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
            SMS India Blog
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
