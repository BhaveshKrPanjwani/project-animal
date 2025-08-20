import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const AdoptPage = () => {
  const { petId } = useParams();
  const [pet, setPet] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/pets/${petId}`)
      .then((res) => res.json())
      .then((data) => setPet(data))
      .catch((error) => console.error("Error fetching pet details:", error));
  }, [petId]);

  const handleAdopt = () => {
    alert(`Thank you for adopting ${pet.name}! 🎉`);
    navigate("/");
  };

  if (!pet) {
    return <p>Loading pet details...</p>;
  }

  return (
    <div className="adopt-page">
      <h2>Adopt {pet.name}</h2>
      <img src={pet.image} alt={pet.name} className="adopt-image" />
      <p><strong>Breed:</strong> {pet.breed}</p>
      <p><strong>Description:</strong> {pet.description}</p>
      <p><strong>Location:</strong> {pet.location}</p>

      <button className="confirm-adopt-btn" onClick={handleAdopt}>
        Confirm Adoption
      </button>
    </div>
  );
};

export default AdoptPage;
