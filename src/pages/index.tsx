import Link from "next/link";
import { GetStaticProps } from "next";
import { getSortedPostsData } from "../lib/markdown";

type Post = {
  slug: string;
  title: string;
  date: string;
  tags?: string[];
  content: string;
};

type Props = {
  posts: Post[];
};

export default function Home({ posts }: Props) {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">📚 블로그</h1>
      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-6">
            <Link href={`/tag/${post.tags?.[0] ?? "etc"}/${post.slug}`}>
              <h2 className="text-xl font-semibold hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-500 mt-1">{post.date}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-200 px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <p className="mt-3 text-gray-700 text-sm line-clamp-2">
              {post.content.slice(0, 100)}...
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPostsData();
  return {
    props: { posts },
  };
};
