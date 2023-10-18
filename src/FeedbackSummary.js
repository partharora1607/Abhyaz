import React from "react";
import { useLocation } from "react-router-dom";
const FeedbackSummary = () => {
  const location = useLocation();
  const { formData } = location.state;
  return (
    <div>
      <h2>Feedback Summary</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};
export default FeedbackSummary;
