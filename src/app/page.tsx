import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="text-4xl font-bold">Welcome to My Portfolio</h2>
      <p className="mt-4 text-lg text-gray-400">
        Explore my projects and skills.
      </p>
    </main>
  );
}
