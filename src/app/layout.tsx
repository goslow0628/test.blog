// src/app/layout.tsx

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
      <body>{children}</body>
    </html>
  );
}
