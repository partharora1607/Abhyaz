import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackForm from "./FeedbackForm";
import FeedbackSummary from "./FeedbackSummary";
import "./App.css"; // Import the CSS file
function App() {
  return (
    <Router>
      <div className="form-container">
        <Routes>
          <Route path="/" element={<FeedbackForm />} />
          <Route path="/feedback-summary" element={<FeedbackSummary />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
