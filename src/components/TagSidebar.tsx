export default function TagSidebar({ tags }: { tags: string[] }) {
  // 태그별 개수 집계
  const tagCount: Record<string, number> = {};
  tags.forEach((tag) => {
    tagCount[tag] = (tagCount[tag] || 0) + 1;
  });
  const uniqueTags = Array.from(new Set(tags));

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          fontWeight: 700,
          fontSize: "1.05rem",
          color: "#222",
          marginBottom: "1.1rem",
          letterSpacing: "0.01em",
          paddingLeft: 0,
        }}
      >
        TAG LIST
      </div>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.1rem",
          paddingLeft: 0,
          margin: 0,
        }}
      >
        {uniqueTags.map((tag) => (
          <li
            key={tag}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "1rem",
              color: "#555",
              padding: 0,
              margin: 0,
              listStyle: "none",
            }}
          >
            <span style={{ color: "#444", fontWeight: 500 }}>{tag}</span>
            <span style={{ color: "#bbb", fontSize: "0.97em", marginLeft: 8 }}>
              ({tagCount[tag]})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
