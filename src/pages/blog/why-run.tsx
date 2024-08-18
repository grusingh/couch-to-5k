import MarketingLayout from '@/components/layouts/MarketingLayout';
import React from 'react';

const WhyRun = () => {
  return (
    <MarketingLayout>
      <section className="bg-gray-50 py-12 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Why Run?
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            Running is one of the most accessible and effective forms of
            exercise, offering a wide range of physical, mental, and emotional
            benefits. Whether you’re a beginner or a seasoned athlete, running
            can play a crucial role in improving your overall well-being. Here’s
            why you should consider lacing up your shoes and hitting the
            pavement:
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                1. Boost Your Physical Health
              </h3>
              <p className="text-gray-700">
                Running is an excellent cardiovascular workout that strengthens
                your heart, improves circulation, and lowers your risk of heart
                disease. Regular running can also help manage weight, increase
                lung capacity, and improve bone density. It’s a full-body
                exercise that targets multiple muscle groups, helping you build
                strength and endurance.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                2. Enhance Your Mental Well-being
              </h3>
              <p className="text-gray-700">
                Running is not just about physical fitness; it’s also a powerful
                tool for mental health. The rhythmic nature of running can help
                reduce stress, anxiety, and depression by promoting the release
                of endorphins, also known as “runner’s high.” This natural mood
                booster can leave you feeling happier and more relaxed after
                each run. Moreover, running provides a unique opportunity to
                clear your mind, meditate, or even solve problems as you focus
                on your breathing and movement.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                3. Build Discipline and Resilience
              </h3>
              <p className="text-gray-700">
                Running teaches discipline and resilience by challenging you to
                push through discomfort and fatigue. It’s a mental game as much
                as it is a physical one. As you progress, you’ll develop a
                strong sense of accomplishment, which can translate into other
                areas of your life. Setting and achieving running goals, whether
                it’s completing a certain distance or improving your pace, can
                boost your confidence and motivation to tackle other challenges.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                4. Connect with a Community
              </h3>
              <p className="text-gray-700">
                Running is a social activity that can help you connect with
                like-minded individuals. Joining a running group or
                participating in local races allows you to meet new people,
                share experiences, and gain support from a community that shares
                your passion for running. This sense of belonging can further
                enhance your motivation and make running an enjoyable and
                rewarding experience.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                5. Enjoy the Outdoors
              </h3>
              <p className="text-gray-700">
                Running gives you the chance to spend time outdoors and
                appreciate the beauty of your surroundings. Whether you’re
                running through a park, along a beach, or in your neighborhood,
                you’ll experience nature in a way that’s refreshing and
                revitalizing. The simple act of being outside, away from screens
                and daily stressors, can greatly improve your mood and energy
                levels.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                6. It’s Free and Flexible
              </h3>
              <p className="text-gray-700">
                One of the best things about running is its simplicity and
                accessibility. You don’t need any special equipment or a gym
                membership to start running. All you need is a pair of good
                running shoes and the willingness to step out the door. You can
                run at any time that fits your schedule, making it a convenient
                form of exercise that adapts to your lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default WhyRun;
