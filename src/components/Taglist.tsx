import Link from "next/link";

type TagCount = {
  name: string;
  count: number;
};

const tagList: TagCount[] = [
  { name: "all", count: 204 },
  { name: "Java", count: 41 },
  { name: "데이터베이스", count: 21 },
  { name: "Spring", count: 18 },
  { name: "HTTP", count: 10 },
  // 👉 나중에 자동 계산하도록 개선 가능
];

export default function TagList() {
  return (
    <aside className="w-full md:w-60 md:pl-8 mt-8 md:mt-0">
      <h2 className="text-lg font-semibold mb-2">TAG LIST</h2>
      <ul className="space-y-1">
        {tagList.map((tag) => (
          <li key={tag.name}>
            <Link href={tag.name === "all" ? "/" : `/tag/${tag.name}`}>
              <span className="text-sm text-gray-700 hover:underline cursor-pointer">
                {tag.name} ({tag.count})
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
