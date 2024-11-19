import React, { useState } from "react";
import axios from "axios";

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
          api_key: "sekret", // Wstaw swój klucz API
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
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>NASA Fun Facts</h1>
      <button
        onClick={fetchFact}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#45a049",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Generate Fun Fact
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {fact && (
        <div style={{ marginTop: "20px" }}>
          <h2>{fact.title}</h2>
          <p>{fact.explanation}</p>
          {fact.url && <img src={fact.url} alt={fact.title} style={{ maxWidth: "100%", borderRadius: "10px" }} />}
        </div>
      )}
    </div>
  );
};

export default NasaFunFacts;
