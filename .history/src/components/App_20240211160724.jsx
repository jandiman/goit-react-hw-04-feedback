import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notifs } from './Notifs/Notifs';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const total = countTotalFeedback();

    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  const handleClick = type => {
    setFeedback(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const options = ['good', 'neutral', 'bad'];

  return (
    <div>
      <Section title="Please leave a feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notifs message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
