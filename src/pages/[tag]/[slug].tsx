// pages/[tag]/[slug].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import { getPostData } from "@/lib/markdown";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function PostPage({
  title,
  date,
  contentHtml,
}: {
  title: string;
  date: string;
  contentHtml: string;
}) {
  return (
    <main className="max-w-2xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-sm text-gray-500 mb-6">{date}</p>
      <article dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDir = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDir);

  const paths = filenames.flatMap((filename) => {
    const fullPath = path.join(postsDir, filename);
    const content = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(content);
    const slug = filename.replace(/\.md$/, "");

    return (
      data.tags?.map((tag: string) => ({
        params: { tag, slug },
      })) || []
    );
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;
  const postData = await getPostData(`${slug}.md`);
  return { props: postData };
};
