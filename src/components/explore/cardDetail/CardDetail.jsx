import React from "react";
import './CardDetail.css';

function CardDetail(props) {
    return(
        <div className="card-detail">
            <button onClick={props.backClick} className="btn-outline-secondary"><i class="fas fa-arrow-left"></i> Back</button>
            <div className="d-flex js-btw align-bl">
                <img src={props.flag} alt=""/>
                <div className="country-detail">
                    <h3>{props.name}</h3>
                    <div className="country-more d-flex js-btw">
                        <div>
                            <p><strong>Native name: </strong>{props.nativeName}</p>
                            <p><strong>Population: </strong>{props.pop}</p>
                            <p><strong>Region: </strong>{props.reg}</p>
                            <p><strong>Sub Region: </strong>{props.subReg}</p>
                            <p><strong>Capital: </strong>{props.cap}</p>
                        </div>
                        <div>
                            <p><strong>Top Level Domain: </strong>{props.domain}</p>
                            <p><strong>Currencies: </strong>{props.currencies}</p>
                            <p><strong>Language: </strong>{props.languages}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 
export default CardDetail;