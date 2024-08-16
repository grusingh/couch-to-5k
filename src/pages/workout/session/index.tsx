import { useRouter } from 'next/router';
import Layout from '@/components/workout/Layout';
import program from '../../../../public/couchto5k.json';
import { useEffect, useState } from 'react';
import Button from '@/components/Button';

function getProgram(week: number, day: number) {
  const session = program.find((s) => s.week === week && s.day === day);

  if (!session) {
    return null;
  }

  return session;
}

export default function Index() {
  const router = useRouter();
  const { week: weekString, day: dayString } = router.query;
  const week = Number(weekString);
  const day = Number(dayString);
  const session = getProgram(week, day);
  const [currentStep, setCurrentStep] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const currentStepDuration = session?.workout[currentStep]?.duration || 0;
  const isTimeVisible = elapsedTime < currentStepDuration;
  const currentStepType = session?.workout[currentStep]?.type || '';
  const totalSteps = session?.workout.length || 0;

  useEffect(() => {
    if (!session) {
      return;
    }

    const interval = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [session, setElapsedTime]);

  function handleNextStep() {
    if (!session) {
      return;
    }

    if (currentStep >= session.workout.length - 1) {
      router.push('/workout/done');
      return;
    }

    setCurrentStep((prev) => prev + 1);
    setElapsedTime(0);
  }

  if (!session) {
    return (
      <Layout>
        <header>
          <h1 className="text-2xl">Session not found</h1>
        </header>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="grid grid-cols-1 grid-rows-3 flex-grow">
        <header className="flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold">
            Week {week} / Day {day}
          </h2>
          <p className="px-8 py-4">{session.description}</p>
        </header>
        <section className="flex flex-col justify-center items-center">
          <div className="text-center">
            <h3 className="font-extrabold text-green-800">
              <span className="text-5xl">
                {currentStepType === 'run' ? ' 🏃🏽‍♀️‍➡️' : '🚶🏿‍♀️‍➡️ '}
              </span>
              <span className="text-6xl">{currentStepType}</span>
            </h3>
            {isTimeVisible ? (
              <div className="text-4xl p-8 text-green-800 font-bold">
                {elapsedTime} / {currentStepDuration} sec
              </div>
            ) : (
              <div className="p-8">✅ Step Completed</div>
            )}
          </div>
        </section>
        <div className="text-center">
          {isTimeVisible ? null : (
            <Button onClick={handleNextStep}>Next Step</Button>
          )}
        </div>
      </div>
    </Layout>
  );
}
