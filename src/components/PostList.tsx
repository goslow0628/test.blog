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
        <div key={post.slug} style={{ marginBottom: "2rem" }}>
          <h2>{post.title}</h2>
          <p>{post.date}</p>
          <p>{post.excerpt}...</p>
          <div>
            <p>Tags:</p>
            <ul>
              {post.tags.map((tag) => (
                <li key={tag}>#{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
