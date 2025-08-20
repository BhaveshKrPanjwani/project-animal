import { useState } from "react";

const PetQuiz = ({ onQuizComplete }) => {
  const [answers, setAnswers] = useState({
    activity: "",
    size: "",
    allergy: "",
    location: "",
  });

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  let recommendedPet = "Dog";

  if (answers.allergy === "yes") {
    recommendedPet = "Fish";
  } else if (answers.size === "small") {
    recommendedPet = "Cat";
  } else if (answers.activity === "low") {
    recommendedPet = "Rabbit";
  }

  if (typeof onQuizComplete === "function") {
    onQuizComplete(recommendedPet, answers.location);
  } else {
    console.error("onQuizComplete is not a function");
  }
};


  return (
    <form onSubmit={handleSubmit} className="quiz-form">
      <h2>Find Your Perfect Pet</h2>

      <label>Activity Level:</label>
      <select name="activity" onChange={handleChange} required>
        <option value="">Select...</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <label>Preferred Pet Size:</label>
      <select name="size" onChange={handleChange} required>
        <option value="">Select...</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>

      <label>Do you have pet allergies?</label>
      <select name="allergy" onChange={handleChange} required>
        <option value="">Select...</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <label>Enter Your Location:</label>
      <input type="text" name="location" onChange={handleChange} required />

      <button type="submit">Find My Pet</button>
    </form>
  );
};

export default PetQuiz;
