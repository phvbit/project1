import React from "react";
import './CountryCard.css';

function CountryCard(props) {
    return (
        <div onClick={props.onClickHandle} className="country-card" id={props.id}>
            <img src={props.flag} alt="Flag" />

            <div className="country-info">
                <h4>{props.name}</h4>
                <p><strong>Population: </strong>{props.pop}</p>
                <p><strong>Region: </strong>{props.reg}</p>
                <p><strong>Capital: </strong>{props.cap}</p>
                <p className="alpha3Code" style={{visibility: "hidden"}}>{props.code}</p>
            </div>

        </div>
    );

}
export default CountryCard;