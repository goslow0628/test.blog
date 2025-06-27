// src/app/layout.tsx
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
      <body>
        <Header />
        <div className="flex">
          <main className="flex-1">
            <Profile />
            {children}
          </main>
          <aside>
            <TagSidebar />
          </aside>
        </div>
      </body>
    </html>
  );
}
