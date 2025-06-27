import Link from "next/link";

interface PostCardProps {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  slug: string;
}

export function PostCard({ title, date, summary, tags, slug }: PostCardProps) {
  return (
    <Link
      href={`/${tags[0]}/${slug}`}
      className="block p-6 mb-6 border rounded hover:shadow-md"
    >
      <h3 className="text-lg font-semibold mb-1 text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{date}</p>
      <p className="text-sm text-gray-700 mb-2 line-clamp-2">{summary}</p>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600"
          >
            #{tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
