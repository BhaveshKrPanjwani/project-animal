// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import PetAdoptionQuiz from "./pages/PetQuiz";
import PetSchedule from "./pages/PetSchedule";
import SellPetForm from "./pages/SellPetForm";
import PetResults from "./pages/PetResult"; // New Results Page
import PetBrowse from "./pages/PetBrowse";
import CreditScore from "./pages/creditScore";
import DonationPage from "./pages/DonationPage";
import AdoptPage from "./pages/AdoptPAge.js";
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const navigate = useNavigate();

  const handleQuizComplete = (recommendedPet, location) => {
    console.log(`Recommended Pet: ${recommendedPet}, Location: ${location}`);
    navigate(`/pet-results?pet=${recommendedPet}&location=${location}`);
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/quiz" element={<PetAdoptionQuiz onQuizComplete={handleQuizComplete} />} />
      <Route path="/pet-schedule" element={<PetSchedule />} />
      <Route path="/sell-pet" element={<SellPetForm />} />
      <Route path="/pet-results" element={<PetResults />} />
      <Route path="/pets" element={<PetBrowse />} />
      <Route path="/credit-score" element={<CreditScore />} />
      <Route path="/donations" element={<DonationPage/>}/>
      <Route path="/adopt/:petId" element={<AdoptPage />} />
    </Routes>
  );
}

export default App;
