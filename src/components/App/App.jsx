import { useEffect, useState } from "react";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

function App() {
  const [feedbackValues, setFeedbackValues] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem(
      "saved-feedback",
      JSON.stringify(feedbackValues)
    );
  }, [feedbackValues]);

  const updateFeedback = (feedbackType) => {
    setFeedbackValues({
      ...feedbackValues,
      [feedbackType]: feedbackValues[feedbackType] + 1,
    });
  };

  const handleReset = () => {
    setFeedbackValues({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback =
    feedbackValues.good + feedbackValues.neutral + feedbackValues.bad;

  const positiveFeedback = Math.round(
    (feedbackValues.good / totalFeedback) * 100
  );

  return (
    <div>
      <Description />
      <Options
        onUpdateFeedback={updateFeedback}
        onResetFeedback={handleReset}
        totalValue={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          value={feedbackValues}
          totalValue={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
