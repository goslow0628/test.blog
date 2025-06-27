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
      <div style={{ display: "flex", maxWidth: "960px", margin: "0 auto" }}>
        <main style={{ flex: 1 }}>
          <Profile />
          <PostList />
        </main>

        <aside style={{ width: "200px" }}>
          <TagSidebar />
        </aside>
      </div>
    </div>
  );
}
