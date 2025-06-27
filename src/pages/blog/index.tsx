// pages/blog/index.tsx
import { GetStaticProps } from "next";
import Link from "next/link";
import { getAllPostsMeta } from "@/lib/markdown";

type PostMeta = {
  title: string;
  date: string;
  slug: string;
};

type Props = {
  posts: PostMeta[];
};

export default function BlogListPage({ posts }: Props) {
  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">📝 블로그 글 목록</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <a className="block border rounded-lg p-4 hover:bg-gray-100">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-500 text-sm">{post.date}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPostsMeta();

  // 최신순 정렬
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));

  return {
    props: {
      posts,
    },
  };
};
