import { useEffect, useState } from "react";

const PetList = ({ petType, location }) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/pets")
      .then((res) => res.json())
      .then((data) => {
        const filteredPets = data.filter(
          (pet) => pet.type === petType && pet.location.toLowerCase() === location.toLowerCase()
        );
        setPets(filteredPets);
      });
  }, [petType, location]);

  return (
    <div className="pet-list">
      <h2>Available {petType}s in {location}</h2>
      {pets.length === 0 ? <p>No pets found in your area.</p> : null}
      
      <div className="pet-container">
        {pets.map((pet, index) => (
          <div key={index} className="pet-card">
            <img src={pet.image} alt={pet.name} />
            <h3>{pet.name}</h3>
            <p><strong>Breed:</strong> {pet.breed}</p>
            <p>{pet.description}</p>
            <p><strong>Location:</strong> {pet.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetList;
