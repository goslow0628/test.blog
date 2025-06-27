// src/app/page.tsx
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

import Header from "@/components/Header";
import Profile from "@/components/Profile";
import PostList from "@/components/PostList";
import TagSidebar from "@/components/TagSidebar";

export default async function Home() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = await fs.readdir(postsDirectory);

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = await fs.readFile(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title,
        date: data.date,
        tags: data.tags || [],
        excerpt: content.slice(0, 100),
      };
    })
  );

  return (
    <div>
      {/* 상단 헤더 */}
      <Header />

      {/* 중앙 콘텐츠 + 우측 태그 사이드바 */}
      <div
        style={{
          maxWidth: "1024px",
          margin: "0 auto",
          padding: "2rem",
          display: "flex",
          gap: "2rem",
        }}
      >
        {/* 본문 */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <Profile />
          <PostList posts={posts} />
        </div>

        {/* 사이드바 */}
        <aside style={{ width: "240px" }}>
          <TagSidebar />
        </aside>
      </div>
    </div>
  );
}
