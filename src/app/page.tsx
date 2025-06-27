import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

`import Header from "@/components/Header";`;
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
        excerpt: content,
      };
    })
  );

  const allTags = posts.flatMap((post) => post.tags);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        position: "relative",
      }}
    >
      {/* 헤더 */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: "white",
          borderBottom: "1px solid #e5e5e5",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "1rem 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: "1.8rem",
              fontWeight: "700",
              color: "#333",
              margin: 0,
            }}
          >
            test.blog
          </h1>
        </div>
      </header>

      {/* 중앙 컨텐츠 - 가운데 고정 */}
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <div
          style={{
            width: "700px",
            padding: "2rem",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              marginBottom: "3rem",
              textAlign: "center",
              paddingBottom: "2rem",
              borderBottom: "1px solid #e5e5e5",
            }}
          >
            <Profile />
          </div>
          <PostList posts={posts} />
        </div>
      </main>

      {/* 사이드바 - 우측에 고정 */}
      <aside
        style={{
          position: "fixed",
          top: "20rem",
          right: "3rem",
          width: "220px",
          backgroundColor: "white",
          padding: "2rem",

          borderRadius: "8px",
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        <TagSidebar tags={allTags} />
      </aside>
    </div>
  );
}
