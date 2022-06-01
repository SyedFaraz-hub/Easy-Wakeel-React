import React from "react";
import cardImage1 from "../Assects/Cards/rent.png"
import cardImage2 from "../Assects/Cards/child-custody.png"
import cardImage3 from "../Assects/Cards/divorce.png"
import cardImage4 from "../Assects/Cards/inheritance.png"
import cardImage5 from "../Assects/Cards/labour.png"
import cardImage6 from "../Assects/Cards/legal-drafting.png"
import cardImage8 from "../Assects/Cards/property.png"
import cardImage11 from "../Assects/Cards/women.png"

const Card = () => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-3 my-4">
            <div class="card" style={{width: "100%"}}>
              <img src={cardImage1} class="card-img-top" alt="..." />
            </div>
          </div>
          <div class="col-md-3 my-4">
          <div class="card" style={{width: "100%"}}>
              <img src={cardImage2} class="card-img-top" alt="..." />
            </div>
          </div>
          <div class="col-md-3 my-4">
          <div class="card" style={{width: "100%"}}>
              <img src={cardImage3} class="card-img-top" alt="..." />
            </div>
          </div>
          <div class="col-md-3 my-4">
          <div class="card" style={{width: "100%"}}>
              <img src={cardImage4} class="card-img-top" alt="..." />
            </div>
          </div>
          <div class="col-md-3 col-sm-12 my-4">
          <div class="card" style={{width: "100%"}}>
              <img src={cardImage5}  class="card-img-top" alt="..." />
            </div>
          </div>
          <div class="col-md-3 my-4">
          <div class="card" style={{width: "100%"}}>
              <img src={cardImage6} class="card-img-top" alt="..." />
            </div>
          </div>
          <div class="col-md-3 my-4">
          <div class="card" style={{width: "100%"}}>
              <img src={cardImage11} class="card-img-top" alt="..." />
            </div>
          </div>
          <div class="col-md-3 my-4">
          <div class="card" style={{width: "100%"}}>
              <img src={cardImage8} class="card-img-top" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
