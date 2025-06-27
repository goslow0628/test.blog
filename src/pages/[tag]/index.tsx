// pages/[tag]/index.tsx
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostsMeta } from "@/lib/markdown";
import Link from "next/link";

export default function TagPage({ posts, tag }: { posts: any[]; tag: string }) {
  return (
    <main className="max-w-2xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">📂 #{tag} 태그 글</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/${tag}/${post.slug}`}>
              <a className="block border-b py-4 hover:bg-gray-50">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-sm text-gray-500">{post.date}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = getAllPostsMeta();
  const tagSet = new Set(allPosts.flatMap((post) => post.tags || []));

  const paths = Array.from(tagSet).map((tag) => ({
    params: { tag },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tag = params!.tag as string;
  const allPosts = getAllPostsMeta();

  const posts = allPosts.filter((post) => post.tags.includes(tag));

  return {
    props: { posts, tag },
  };
};
