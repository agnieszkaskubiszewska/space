import React, { useState } from "react";
import axios from "axios";
import './Nasa.css'

const getRandomDate = () => {
  const start = new Date(1995, 5, 16); 
  const end = new Date(); 
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return randomDate.toISOString().split("T")[0]; 
};

const NasaFunFacts = () => {
  const [fact, setFact] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  const fetchFact = async () => {
    setLoading(true);
    setError(null);

    try {
      const randomDate = getRandomDate(); 
      const response = await axios.get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: process.env.REACT_APP_NASA_API_KEY, 
          date: randomDate,
        },
      });

      setFact(response.data);
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
