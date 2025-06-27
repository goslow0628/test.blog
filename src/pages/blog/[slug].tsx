// pages/blog/[slug].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { getPostData } from "@/lib/markdown";
import fs from "fs";
import path from "path";

type Props = {
  title: string;
  date: string;
  contentHtml: string;
  slug: string;
};

export default function BlogPost({ title, date, contentHtml }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-gray-500 text-sm mb-6">{date}</p>
        <article
          className="prose prose-neutral"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </main>
    </>
  );
}

// ✅ 가능한 슬러그 목록 생성
export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), "posts"));

  const paths = files.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, "") },
  }));

  return {
    paths,
    fallback: false,
  };
};

// ✅ slug에 맞는 글 데이터 가져오기 (❗ await 필수)
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;
  const postData = await getPostData(`${slug}.md`);

  return {
    props: postData,
  };
};
