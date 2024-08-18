import Link from 'next/link';
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: LayoutProps) {
  return (
    <main className="min-h-screen md:min-h-sm flex flex-col max-w-screen-sm mx-auto bg-green-100">
      <header className="text-2xl p-2 py-4 text-center">
        <Link href="/">
          <h1 className="text-4xl font-bold">🛋️ Couch to 5k 🏃🏽‍♀️‍➡️</h1>
        </Link>
      </header>
      {children}
    </main>
  );
}
