// lib/markdown.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

// ✅ 단일 글 데이터 가져오기
export async function getPostData(fileName: string) {
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    ...data,
    contentHtml,
    slug: fileName.replace(/\.md$/, ""),
  };
}

// ✅ 글 목록에서 title, date, slug만 가져오기
export function getAllPostsMeta() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      title: data.title || "제목 없음",
      date: data.date || "날짜 없음",
      slug: fileName.replace(/\.md$/, ""),
    };
  });
}
