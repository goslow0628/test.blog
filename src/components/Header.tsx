import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/" className="text-2xl font-bold text-blue-600">
        test.blog
      </Link>
    </header>
  );
}
