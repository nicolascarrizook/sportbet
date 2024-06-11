import React, { useState } from "react";

const BetType: React.FC = () => {
  const [selectedType, setSelectedType] = useState<"simple" | "combinada">(
    "simple"
  );

  return (
    <div className="bet-type">
      <button
        className={selectedType === "simple" ? "active" : ""}
        onClick={() => setSelectedType("simple")}
      >
        SIMPLE
      </button>
      <button
        className={selectedType === "combinada" ? "active" : ""}
        onClick={() => setSelectedType("combinada")}
      >
        COMBINADA
      </button>
    </div>
  );
};

export default BetType;
