import Link from 'next/link';
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: LayoutProps) {
  return (
    <main className="flex flex-col max-w-screen-md mx-auto">
      <header className="p-2 py-4 flex justify-between">
        <Link href="/">
          <h1 className="text-4xl font-bold">🛋️ Couch to 5k 🏃🏽‍♀️‍➡️</h1>
        </Link>
        <Link className="underline font-bold" href="/workout">
          <button className="bg-blue-200 text-black font-bold py-3 px-6 rounded-lg shadow hover:bg-blue-500 hover:text-white transition duration-300">
            Run Now🏃🏽‍♀️‍➡️
          </button>
        </Link>
      </header>
      {children}
    </main>
  );
}
