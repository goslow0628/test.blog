import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full px-6 py-4 border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          <Link href="/">
            <span>
              test.<span className="text-blue-600">blog</span>
            </span>
          </Link>
        </h1>
      </div>
    </header>
  );
}
