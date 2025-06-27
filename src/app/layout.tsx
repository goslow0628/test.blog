import "@/styles/globals.css";
import Header from "@/components/Header";
import Profile from "@/components/Profile";
import TagSidebar from "@/components/TagSidebar";

export const metadata = {
  title: "test.blog",
  description: "꾸준히, 의미있는 학습을 기록하기 위한 공간입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-white text-gray-900">
        <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto">
          {/* 왼쪽 상단 로고 */}
          <aside className="lg:w-1/5 w-full p-4">
            <Header />
          </aside>

          {/* 중앙 콘텐츠 */}
          <main className="lg:w-3/5 w-full p-4">
            <Profile />
            {children}
          </main>

          {/* 오른쪽 태그 리스트 */}
          <aside className="lg:w-1/5 w-full p-4 border-l border-gray-200">
            <TagSidebar />
          </aside>
        </div>
      </body>
    </html>
  );
}
