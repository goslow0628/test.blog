interface TagListProps {
  tags: { name: string; count: number }[];
}

export default function TagList({ tags }: TagListProps) {
  return (
    <aside className="sticky top-24">
      <h3 className="text-lg font-bold mb-4 text-gray-800">TAG LIST</h3>
      <ul className="space-y-2">
        {tags.map((tag) => (
          <li key={tag.name}>
            <a
              href={`/tag/${tag.name}`}
              className="text-sm text-gray-600 hover:text-blue-600"
            >
              {tag.name} ({tag.count})
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
