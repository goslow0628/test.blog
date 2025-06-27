import { PostCard } from "./PostCard";

interface Post {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
}

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <section>
      {posts.map((post) => (
        <PostCard key={post.slug} {...post} />
      ))}
    </section>
  );
}
