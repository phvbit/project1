import React from "react";
import './NotFound.css';

function NotFound(props) {
  return (
    <div className="card-detail nf-popup">
      <button onClick={props.backClick} className="btn-outline-secondary"><i class="fas fa-arrow-left"></i> Back</button>
      <div className="d-flex js-btw">
        <img src="pepe.png" alt="NotFoundIMG" />
        <div className="nf-text">
          <h1>Oops!</h1>
          <h4>Try Again.</h4>
        </div>

      </div>

    </div>
  );
}
export default NotFound;