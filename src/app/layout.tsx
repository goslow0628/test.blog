import Header from "@/components/Header";
import Profile from "@/components/Profile";
import PostList from "@/components/PostList";
import TagSidebar from "@/components/TagSidebar";

export default function Home() {
  return (
    <div>
      {/* 상단: test.blog */}
      <Header />

      {/* 본문 전체 중앙 정렬 레이아웃 */}
      <div className="max-w-5xl mx-auto flex">
        {/* 본문: 가운데 콘텐츠 */}
        <main className="flex-1">
          <Profile />
          <PostList />
        </main>

        {/* 오른쪽: 태그 사이드바 */}
        <aside style={{ width: "200px" }}>
          <TagSidebar />
        </aside>
      </div>
    </div>
  );
}
