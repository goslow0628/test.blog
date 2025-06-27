import Image from "next/image";

export default function Profile() {
  return (
    <div className="text-center mb-8">
      <Image
        src="/profile.jpg"
        alt="Profile"
        width={100}
        height={100}
        className="mx-auto rounded-full"
      />
      <p className="mt-2 text-lg font-semibold">@Hudi</p>
      <p className="text-sm text-gray-600">
        꾸준히, 의미있는 학습을 기록하기 위한 공간입니다.
      </p>
    </div>
  );
}
