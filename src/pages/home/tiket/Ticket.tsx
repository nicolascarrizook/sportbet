import React from "react";

interface TabsProps {
  selectedTab: "ticketApuestas" | "cierreApuestas";
  setSelectedTab: (tab: "ticketApuestas" | "cierreApuestas") => void;
}

const Tabs: React.FC<TabsProps> = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="tabs">
      <button
        className={selectedTab === "ticketApuestas" ? "active" : ""}
        onClick={() => setSelectedTab("ticketApuestas")}
      >
        Ticket apuestas
      </button>
      <button
        className={selectedTab === "cierreApuestas" ? "active" : ""}
        onClick={() => setSelectedTab("cierreApuestas")}
      >
        Cierre apuestas
      </button>
    </div>
  );
};

export default Tabs;
