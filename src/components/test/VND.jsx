import React from "react";

function VNDtoUSD(props) {
    function convert(vnd) {
        return vnd / 24000;
    }
    return(
        <div>
            <span>VND</span>
            <input type="text"
            onChange = {(event) => {
                const vnd = event.target.value;
                const usd = convert(vnd);
                props.onHandleChange({usd, vnd});
            }}
            value = {props.value}
            />
        </div>

    );
}
export default VNDtoUSD;