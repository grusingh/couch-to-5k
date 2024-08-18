import Link from 'next/link';
import MarketingLayout from '@/components/layouts/MarketingLayout';

export default function Home() {
  return (
    <MarketingLayout>
      <div className="flex flex-col justify-center gap-4">
        <section className="bg-white py-12 px-6 lg:px-20 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-6">
              We are excited to have you here! Whether you are new to running or
              looking to get back into shape, our Couch to 5K program is
              designed to guide you every step of the way.
            </p>
            <p className="text-lg text-gray-700">
              Our mission is to help you build a healthy and active lifestyle by
              making running accessible and enjoyable. Through our structured
              training plans, expert advice, and supportive community, you will
              be running your first 5K in no time. Explore our resources,
              connect with others on the same journey, and take the first step
              toward your fitness goals.
            </p>
          </div>
        </section>
        <section className="max-w-3xl bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Couch to 5K?
          </h2>
          <p className="text-gray-700 mb-4">
            The Couch to 5K program is designed for absolute beginners who want
            to go from being inactive to running a 5K in just 9 weeks. Whether
            you’re looking to improve your fitness, lose weight, or simply
            challenge yourself, this program offers a gradual and achievable
            path to success.
          </p>
          <p className="text-gray-700">
            Our structured plan and supportive community will help you stay
            motivated and committed to your goals. Take the first step today and
            start your journey toward a healthier, happier you!
          </p>
        </section>

        <section className="max-w-3xl bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            How It Works
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li className="mb-2">
              Start slow with interval training that combines walking and
              running.
            </li>
            <li className="mb-2">
              Follow the weekly plan that gradually increases your stamina.
            </li>
            <li className="mb-2">
              Get tips and advice on proper running form, stretching, and
              recovery.
            </li>
            <li className="mb-2">
              Join our community for support and motivation.
            </li>
            <li>Track your progress and celebrate your milestones.</li>
          </ul>
        </section>

        <footer className="mt-10 text-center">
          <Link className="underline" href="/blog/why-run">
            Why Run?
          </Link>
        </footer>
      </div>
    </MarketingLayout>
  );
}
