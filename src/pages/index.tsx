// src/app/page.tsx
import Header from "@/components/Header";
import Profile from "@/components/Profile";
import PostList from "@/components/PostList";
import TagSidebar from "@/components/TagSidebar";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="flex">
        <main className="flex-1">
          <Profile />
          <PostList />
        </main>

        <TagSidebar />
      </div>
    </div>
  );
}
