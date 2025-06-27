import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { getSortedPostsData } from "../../lib/markdown";

type Post = {
  slug: string;
  title: string;
  date: string;
  tags?: string[];
  content: string;
};

type Props = {
  tag: string;
  posts: Post[];
};

export default function TagPage({ tag, posts }: Props) {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">#{tag} 태그의 글 목록</h1>
      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-6">
            <Link href={`/${tag}/${post.slug}`}>
              <h2 className="text-xl font-semibold hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-500 mt-1">{post.date}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {post.tags?.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-gray-200 px-2 py-1 rounded-full"
                >
                  #{t}
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

// ✅ 가능한 모든 태그 경로 정적 생성
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getSortedPostsData();

  const allTags = new Set<string>();
  posts.forEach((post) => {
    post.tags?.forEach((tag) => allTags.add(tag));
  });

  const paths = Array.from(allTags).map((tag) => ({
    params: { tag },
  }));

  return {
    paths,
    fallback: false,
  };
};

// ✅ 해당 태그에 해당하는 글만 필터링
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tag = params?.tag as string;
  const allPosts = getSortedPostsData();
  const filteredPosts = allPosts.filter((post) => post.tags?.includes(tag));

  return {
    props: {
      tag,
      posts: filteredPosts,
    },
  };
};
