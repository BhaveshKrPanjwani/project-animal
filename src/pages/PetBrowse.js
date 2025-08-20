import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PetBrowse = () => {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/pets")
      .then((res) => res.json())
      .then((data) => {
        setPets(data);
        setFilteredPets(data);
      })
      .catch((error) => console.error("Error fetching pets:", error));
  }, []);

  useEffect(() => {
    let results = pets;

    if (searchQuery) {
      results = results.filter((pet) =>
        pet.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filterType) {
      results = results.filter((pet) => pet.type === filterType);
    }

    setFilteredPets(results);
  }, [searchQuery, filterType, pets]);

  const handleAdopt = (petId) => {
    navigate(`/adopt/${petId}`);
  };

  return (
    <div className="pet-container">
      {/* Quiz Button */}
      <button className="quiz-btn" onClick={() => navigate("/quiz")}>
        Take the Quiz
      </button>

      {/* Search and Filter Section */}
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search pet by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option value="">All Pets</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Fish">Fish</option>
          <option value="Bird">Bird</option>
        </select>
      </div>

      {/* Pet Listings */}
      <div className="pet-list">
        {filteredPets.length > 0 ? (
          filteredPets.map((pet) => (
            <div key={pet.id} className="pet-card">
              <img src={pet.image} alt={pet.name} className="pet-image" />
              <h3>{pet.name}</h3>
              <p>Breed: {pet.breed}</p>
              <p>{pet.description}</p>
              <p>Location: {pet.location}</p>
              <button className="adopt-btn" onClick={() => handleAdopt(pet.id)}>
                Adopt {pet.name}
              </button>
            </div>
          ))
        ) : (
          <p>No pets found.</p>
        )}
      </div>
    </div>
  );
};

export default PetBrowse;
