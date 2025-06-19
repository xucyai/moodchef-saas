import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to MoodChef</h1>
      <p className="text-lg">AI 情緒分析與 Notion 整合平台</p>
      <Link href="/welcome">
        <button className="mt-6 px-4 py-2 bg-black text-white rounded-xl">立即啟用</button>
      </Link>
    </div>
  );
}