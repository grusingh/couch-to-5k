import Link from 'next/link';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="text-2xl p-2 py-4 text-center">
        <Link href="/">
          <h1 className="text-4xl font-bold">🛋️ Couch to 5k 🏃🏽‍♀️‍➡️</h1>
        </Link>
      </header>
      {children}
    </main>
  );
}
