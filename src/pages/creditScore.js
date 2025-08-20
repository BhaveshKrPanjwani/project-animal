import React, { useState, useEffect } from "react";

const CreditScore = () => {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    fetch("/creditScore.json") // Ensure file is in `public/`
      .then((res) => res.json())
      .then((data) => setBusinesses(data))
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  return (
    <div>
      <h2 className="page-heading">🐾 Animal Welfare Credit Score</h2> {/* Added heading back */}
      <div className="credit-score-container">
        {businesses.map((business, index) => (
          <div key={index} className="business-card">
            <img src={business.image} alt={business.name} />
            <div className="business-info">
              <h3>{business.name}</h3>
              <p><strong>Type:</strong> {business.type}</p>
              <p><strong>Score:</strong> {business.score}/100</p>
              <span className={`score-badge ${business.certified ? "certified" : "not-certified"}`}>
                {business.certified ? "✔️ Certified" : "❌ Not Certified"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreditScore;
