// src/app/page.tsx
import Header from "@/components/Header";
import Profile from "@/components/Profile";
import PostList from "@/components/PostList";
import TagSidebar from "@/components/TagSidebar";

export default function Home() {
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
          <PostList />
        </div>

        {/* 사이드바 */}
        <aside style={{ width: "240px" }}>
          <TagSidebar />
        </aside>
      </div>
    </div>
  );
}
