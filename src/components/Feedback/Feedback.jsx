import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleUpdate = event => {
    const { name } = event.target;
    this.setState(prev => ({ [name]: prev[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;

    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    if (this.countTotalFeedback() > 0) {
      return Math.round((good / this.countTotalFeedback()) * 100) + '%';
    }
    return 0 + '%';
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleUpdate}
        ></FeedbackOptions>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
      </Section>
    );
  }
}

Feedback.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

Feedback.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  onLeaveFeedback: () => {},
  total: 0,
  positivePercentage: '0%',
};
