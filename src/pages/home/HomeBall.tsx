import NavBar from "./NavBar";
import Ticket from "./tiket/Ticket";
import React, { useEffect, useState } from "react";

const HomeBall = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const url = "https://api-football-v1.p.rapidapi.com/v3/timezone";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "30943a890bmsh13ba9508aaca905p17c466jsnd560fd6335c1",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };

    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setMatches(result.response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="Tikets">
        <Ticket />
      </div>
      <h1>Partidos de Fútbol</h1>

      {matches.length > 0 ? (
        <ul>
          {matches.map((match, index) => (
            <li key={index}>{match}</li>
          ))}
        </ul>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default HomeBall;
