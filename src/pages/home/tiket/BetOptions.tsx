import React from "react";

const BetOptions: React.FC = () => {
  return (
    <div className="bet-options">
      <div className="option">
        <input type="radio" id="saldo" name="betOption" defaultChecked />
        <label htmlFor="saldo">Saldo disponible</label>
      </div>
      <div className="option">
        <input type="radio" id="freePlay" name="betOption" />
        <label htmlFor="freePlay">Free play</label>
      </div>
    </div>
  );
};

export default BetOptions;
