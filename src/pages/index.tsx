// pages/index.tsx
import { GetStaticProps } from "next";
import Link from "next/link";
import { getAllPostsMeta } from "@/lib/markdown";

type PostMeta = {
  title: string;
  date: string;
  slug: string;
  tags: string[];
};

type Props = {
  posts: PostMeta[];
};

export default function Home({ posts }: Props) {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">📘 블로그 전체 글 목록</h1>

      <ul className="space-y-6">
        {posts.map((post) => {
          const firstTag = post.tags?.[0] || "uncategorized"; // 태그가 없을 경우 대비
          return (
            <li key={post.slug}>
              <Link href={`/${firstTag}/${post.slug}`}>
                <a className="block border-b pb-4 hover:bg-gray-50">
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPostsMeta();
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return {
    props: {
      posts,
    },
  };
};
