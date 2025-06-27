import Header from "@/components/Header";
import Profile from "@/components/Profile";
import PostList from "@/components/Postlist";
import TagList from "@/components/Taglist";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-12 gap-10">
        <div className="col-span-12 md:col-span-8">
          <Profile />
          <PostList posts={[]} />
        </div>

        <aside className="hidden md:block col-span-4">
          <TagList tags={[]} />
        </aside>
      </main>
    </div>
  );
}
