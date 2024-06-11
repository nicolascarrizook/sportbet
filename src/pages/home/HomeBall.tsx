import Tabs from "./tiket/Ticket";
import BetType from "./tiket/BetType";
import BetOptions from "./tiket/BetOptions";
import EmptyTicket from "./tiket/EmptyTicket";
import "./styles.css";
import NavBar from "./NavBar";
import React, { useEffect, useState } from "react";
type TabType = "ticketApuestas" | "cierreApuestas";

const HomeBall = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>("ticketApuestas");
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
      <div className="app-container">
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <BetType />
        <BetOptions />
        <EmptyTicket />
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
