// 📄 src/pages/blog/[slug].tsx

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import { getPostData } from "@/lib/markdown";

type BlogProps = {
  title: string;
  content: string;
};

export default function BlogPost({ title, content }: BlogProps) {
  return (
    <main className="prose mx-auto py-8">
      <h1>{title}</h1>
      <article dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  );
}

// ✅ 모든 가능한 slug (URL)들을 미리 정적 생성해주는 함수
export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), "posts"));

  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  return {
    paths,
    fallback: false, // 없는 slug 접근하면 404
  };
};

// ✅ slug에 맞는 md 파일을 HTML로 변환해서 props로 넘겨주는 함수
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const filePath = path.join(process.cwd(), "posts", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content: markdownContent } = matter(fileContent);
  const content = getPostData(markdownContent); // HTML 변환

  return {
    props: {
      title: data.title || slug,
      content,
    },
  };
};
