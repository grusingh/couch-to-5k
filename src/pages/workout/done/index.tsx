import AppLayout from '@/components/layouts/AppLayout';
import Button from '@/components/Button';
import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();

  function handleGoHome() {
    router.push('/');
  }

  return (
    <AppLayout>
      <div className="grid grid-cols-1 grid-rows-3 flex-grow">
        <header className="flex flex-col justify-center items-center">
          <h1 className="py-6 text-6xl text-green-800 font-extrabold">
            👏🏽🎉🎊
          </h1>
          <h1 className="text-4xl text-green-800 font-extrabold">
            Well done !!!{' '}
          </h1>
          <p className="px-8 py-4 text-xl">
            You have completed the workout session.{' '}
          </p>
        </header>
        <div className="text-center mt-16">
          <Button onClick={handleGoHome}>Home</Button>
        </div>
      </div>
    </AppLayout>
  );
}
