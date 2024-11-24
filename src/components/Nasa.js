import React, { useState } from "react";
import axios from "axios";
import './Nasa.css'

const getRandomDate = () => {
  const start = new Date(1995, 5, 16); // APOD dostępne od tej daty
  const end = new Date(); // Dzisiejsza data
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return randomDate.toISOString().split("T")[0]; // Format YYYY-MM-DD
};

const NasaFunFacts = () => {
  const [fact, setFact] = useState(null); // Przechowuje dane z API
  const [loading, setLoading] = useState(false); // Obsługa ładowania
  const [error, setError] = useState(null); // Obsługa błędów

  const fetchFact = async () => {
    setLoading(true);
    setError(null);

    try {
      const randomDate = getRandomDate(); // Generowanie losowej daty
      const response = await axios.get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: "4rCD5fB01JP5acQc0XaZv2pvuUizl4zIuYNMqoGo", // Wstaw swój klucz API
          date: randomDate,
        },
      });

      setFact(response.data); // Zapisanie ciekawostki do stanu
    } catch (err) {
      setError("Could not fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div  className="fun-facts">
      <h1>NASA Fun Facts</h1>
      <button className="nasa-btn"
        onClick={fetchFact}
      >
        {fact ? 'More Fun Fact' : 'Generate Fun Fact'}
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {fact && (
        <div className="facts">
          <div style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
            <h2>{fact.title}</h2>
            <p>{fact.explanation}</p>
            {fact.url && <img src={fact.url} alt={fact.title} style={{ maxWidth: "50%", borderRadius: "10px" }} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default NasaFunFacts;
