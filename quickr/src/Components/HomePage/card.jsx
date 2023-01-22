import React from "react";
import "../css/card.css"
function Card({ img, category }) {
  return (
   
      <div className="mycard">

        <img  src={img} alt={category} />
        <div>{category}</div>
      </div>
   
  );
}

export default Card;
