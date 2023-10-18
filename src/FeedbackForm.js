import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const FeedbackForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    satisfaction: "",
    usageDuration: "",
    buyingExperience: "",
    lifeChanged: false,
    purchaseAgain: false,
  });
  const handleRatingClick = (value) => {
    setFormData({ ...formData, buyingExperience: value });
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can submit the form data to your server or storage.
    // For this example, we'll just redirect to a new page.
    navigate("/feedback-summary", { state: { formData } });
  };
  return (
    <div>
      <h2>Feedback Form: </h2>
      <h3>We Appreciate Your Valuable Feedback</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label>
            How satisfied were you when you used our product for the first time?
          </label>
          <select
            name="satisfaction"
            value={formData.satisfaction}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            <option value="Very Satisfied">Very Satisfied</option>
            <option value="Satisfied">Satisfied</option>
            <option value="Neutral">Neutral</option>
            <option value="Dissatisfied">Dissatisfied</option>
            <option value="Very Dissatisfied">Very Dissatisfied</option>
          </select>
        </div>
        <br />
        <div>
          <label>How long have you used our products?</label>
          <select
            name="usageDuration"
            value={formData.usageDuration}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            <option value="Never used">Never used</option>
            <option value="1 month">1 month</option>
            <option value="1 - 6 months">1 - 6 months</option>
            <option value="More than 6 months">More than 6 months</option>
          </select>
        </div>
        <br />
        <div>
          <label>How would you rate the buying experience?</label>
          <div className="rating">
            <div
              className={`circle ${
                formData.buyingExperience === "1" ? "selected" : ""
              }`}
              onClick={() => handleRatingClick("1")}
            >
              1
            </div>
            <div
              className={`circle ${
                formData.buyingExperience === "2" ? "selected" : ""
              }`}
              onClick={() => handleRatingClick("2")}
            >
              2
            </div>
            <div
              className={`circle ${
                formData.buyingExperience === "3" ? "selected" : ""
              }`}
              onClick={() => handleRatingClick("3")}
            >
              3
            </div>
            <div
              className={`circle ${
                formData.buyingExperience === "4" ? "selected" : ""
              }`}
              onClick={() => handleRatingClick("4")}
            >
              4
            </div>
            <div
              className={`circle ${
                formData.buyingExperience === "5" ? "selected" : ""
              }`}
              onClick={() => handleRatingClick("5")}
            >
              5
            </div>
          </div>
        </div>
        <br />
        <div>
          <label>
            Will you purchase or use our products again and recommend to your
            friends and family?
          </label>
          <div>
            <br />
            <label>Yes</label>
            <input
              type="radio"
              name="purchaseAgain"
              value="yes"
              onChange={handleChange}
            />
            <label>No</label>
            <input
              type="radio"
              name="purchaseAgain"
              value="no"
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default FeedbackForm;
