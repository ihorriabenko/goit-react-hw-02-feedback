import React from 'react';

import Section from './components/Feedback/Section';
import Notification from './components/Feedback/Notification';
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Statistics from './components/Feedback/Statistics';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  setVote = (vote) => {
    this.setState(prevState => {
      return {
        [vote]: prevState[vote] +1,
      }
    })
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  }

  countTotalFeedback = () => {
    this.setState(prevState => {
      return {
        total: prevState.good + prevState.bad + prevState.neutral,
      };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return {
        positiveFeedback: Math.round((prevState.good / prevState.total) * 100),
      };
    });
  };

  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.state;
    return (
      <Section title="Please leave feedback">
      <Notification message="There is no feedback"></Notification>
        <FeedbackOptions options={this.state} onLeaveFeedback={this.setVote}></FeedbackOptions>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positiveFeedback}
        ></Statistics>
      </Section>
    );
  }
}

export default App;