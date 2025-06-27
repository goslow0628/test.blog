// pages/index.tsx
import { GetStaticProps } from "next";
import Link from "next/link";
import { getAllPostsMeta } from "@/lib/markdown";

type Post = {
  title: string;
  date: string;
  slug: string;
};

type Props = {
  posts: Post[];
};

export default function Home({ posts }: Props) {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-8">
      {/* 📍 왼쪽: 블로그 목록 */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-6">📘 Hudi 스타일 블로그</h1>
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <a className="block border-b pb-4 hover:bg-gray-50">
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 📍 오른쪽: TAG LIST 자리 */}
      <aside className="w-60 hidden md:block">
        <h2 className="text-lg font-semibold mb-2">TAG LIST</h2>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>all (204)</li>
          <li>Java (41)</li>
          <li>Spring (21)</li>
          <li>데이터베이스 (21)</li>
          <li>HTTP (16)</li>
          <li>...</li>
        </ul>
      </aside>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPostsMeta();
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return {
    props: { posts },
  };
};
