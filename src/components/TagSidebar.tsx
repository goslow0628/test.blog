import Link from "next/link";

export default function TagSidebar() {
  return (
    <>
      <h2 className="font-bold text-sm text-gray-700 mb-2">TAG LIST</h2>
      <ul className="space-y-1 text-sm">
        <li>
          <Link href="/tag/nextjs" className="text-blue-500 hover:underline">
            #nextjs
          </Link>
        </li>
        <li>
          <Link href="/tag/react" className="text-blue-500 hover:underline">
            #react
          </Link>
        </li>
        {/* 추후 동적 태그 렌더링 */}
      </ul>
    </>
  );
}
