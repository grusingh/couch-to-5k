import Layout from '@/components/workout/Layout';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Select from '@/components/workout/Select';
import Button from '@/components/Button';

const weekCount = 9;
const daysInWeek = 3;
const weekOptions = Array.from({ length: weekCount }, (_, i) => i + 1);
const dayOptions = Array.from({ length: daysInWeek }, (_, i) => i + 1);

export default function Home() {
  const router = useRouter();
  const [week, setWeek] = useState(1);
  const [day, setDay] = useState(1);

  function handleStart() {
    router.push(`/workout/session?week=${week}&day=${day}`);
  }

  return (
    <Layout>
      <div className="grid grid-cols-1 grid-rows-3 flex-grow">
        <div className="flex justify-around">
          <Select
            label="Week"
            value={week}
            options={weekOptions}
            onSelect={(v) => setWeek(v)}
          />
          <Select
            label="Day"
            value={day}
            options={dayOptions}
            onSelect={(v) => setDay(v)}
          />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center mt-8">
            Week {week} / Day {day}
          </h2>
        </div>

        <div className="flex justify-center items-center">
          <Button onClick={handleStart}>Start</Button>
        </div>
      </div>
    </Layout>
  );
}
