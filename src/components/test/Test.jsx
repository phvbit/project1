import React, { useState } from "react";
import './Test.css';
import USDtoVND from "./USD";
import VNDtoUSD from "./VND";

// Parent Component
function Test() {
  const [money, setMoney] = useState({ usd: 0, vnd: 0 });
  function handleChange(data) {
    setMoney(data);
  };

  return (
    <div className="test">
      <USDtoVND onHandleChange={handleChange} value={money.usd} />
      <VNDtoUSD onHandleChange={handleChange} value={money.vnd} />
    </div>
  );
}
export default Test;
