// src/components/PostList.tsx

export type Post = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
};

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.slug} style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.875rem",
              fontWeight: 700,
              marginBottom: "0.5rem",
            }}
          >
            {post.title}
          </h2>
          <p
            style={{ color: "#6B7280", fontSize: "1rem", marginBottom: "1rem" }}
          >
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontSize: "1.125rem",
              lineHeight: "1.75rem",
              marginBottom: "1rem",
            }}
          >
            {post.excerpt}
          </p>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {post.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "0.25rem 0.75rem",
                  background: "#F3F4F6",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
