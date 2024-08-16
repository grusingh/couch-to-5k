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

function formatStepType(type: string) {
  switch (type) {
    case 'run':
      return '🏃🏽‍♀️‍➡️ run';
    case 'walk':
      return ' 🚶🏿‍♀️‍➡️ walk';
    case 'warmup':
      return '🤸🏽‍♀️ warm up';
    case 'cooldown':
      return '🧘🏽‍♀️ cool down';
    default:
      return '';
  }
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

  function playSound() {
    const audio = new Audio('/mixkit-attention-bell-ding-586.wav');
    audio.play();
  }

  useEffect(() => {
    if (!session) {
      return;
    }

    const interval = setInterval(() => {
      setElapsedTime((prev) => {
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [session, setElapsedTime]);

  useEffect(() => {
    if (elapsedTime === currentStepDuration) {
      playSound();
    }
  }, [currentStepDuration, elapsedTime]);

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
      <div className="grid grid-cols-1 grid-rows-[1fr_4fr_1fr] flex-grow">
        <header className="flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold">
            Week {week} / Day {day}
          </h2>
          <p className="px-2 pt-4">{session.description}</p>
        </header>
        <section className="flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl font-bold">
            Step {currentStep + 1} of {totalSteps}
          </h2>
          <h3 className="font-extrabold text-green-800 text-6xl my-8">
            {formatStepType(currentStepType)}
          </h3>
          {isTimeVisible ? (
            <div className="text-4xl text-green-800 font-bold">
              {elapsedTime} / {currentStepDuration} sec
            </div>
          ) : (
            <div className="text-xl text-green-800 font-bold">
              ✅ Step Completed
            </div>
          )}
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
