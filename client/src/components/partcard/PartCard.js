import React from "react";
import "./partcard.css";

const PartCard = ({ part }) => {
  return (
    <div>
      <div className="body-part-card">
        <div className="body-part-gl">
          <div className="container">
            <div className="box-part">
              <span></span>
              <div className="content-part">
                <h2>
                  {part?.name} {part?.lastname}
                </h2>
                <h4>Club:{part?.Club}</h4>
                <h4>Adress:{part?.adresse}</h4>
                <h4>Distance:{part?.distance}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartCard;
