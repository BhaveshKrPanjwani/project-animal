import React, { useState } from "react";
import "../style/donation.css"; // Ensure styles are specific to this page

const DonationPage = () => {
  const [amount, setAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you, ${donorName}, for your donation of ₹${amount}!`);
    setAmount("");
    setDonorName("");
    setEmail("");
    setPaymentMethod("credit-card");
  };

  return (
    <div className="donation-page">
      <h1 className="donation-page-header">Support Animal Welfare</h1>
      <p className="donation-page-description">
        Your donation helps provide shelter, food, and medical care for animals in need.
      </p>
      
      <div className="donation-page-content">
        <form className="donation-page-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            className="donation-page-input"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="donation-page-input"
            required
          />

          <input
            type="number"
            placeholder="Donation Amount (₹)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="donation-page-input"
            required
          />

          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="donation-page-select"
          >
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="upi">UPI</option>
            <option value="bank-transfer">Bank Transfer</option>
          </select>

          <button type="submit" className="donation-page-button">
            Donate Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationPage;
