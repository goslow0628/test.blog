import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex flex-col items-center text-center mt-12 mb-16">
      <Image
        src="/profile.jpg"
        alt="Profile"
        width={112}
        height={112}
        className="rounded-full shadow-md mb-4 object-cover"
      />
      <h2 className="text-xl font-semibold">@Hudi</h2>
      <p className="text-gray-600 text-sm mt-1">
        꾸준히, 의미있는 학습을 기록하기 위한 공간입니다.
      </p>
    </div>
  );
}
