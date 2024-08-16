import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-4 text-center flex flex-col justify-around gap-2">
      <header className="text-2xl">
        <h1 className="text-4xl font-bold">🛋️ Couch to 5k 🏃🏽‍♀️‍➡️</h1>
      </header>

      <div className="flex-grow flex flex-col justify-center">
        <Link
          href="/workout"
          className="bg-green-900 text-2xl text-white px-4 py-4 rounded-full"
        >
          Start Running
        </Link>
      </div>
    </main>
  );
}
