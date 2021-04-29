import React from "react";

// Child Component with props func 
function USDtoVND(props) {
  function convert(usd) {
    return usd * 24000;
  }
  return (
    <div>
      <span>USD</span>
      <input type="text"
        onChange={(event) => {
          const usd = event.target.value;
          const vnd = convert(usd);
          props.onHandleChange({ usd, vnd });
        }}
        value={props.value}
      />
    </div>

  );
}
export default USDtoVND;