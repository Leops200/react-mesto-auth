import React from "react";

function Card({card}) {


  return(
    <div id="card-template">
      <li className="card">
        <button className="button card__del-btn" type="button"></button>
        <img src={card.link} alt={card.name} className="card__image"/>
        <div className="card__about">
          <h2 className="card__title">{card.name}</h2>
          <div className="card__like">
            <button className="button card__like-btn" type="button"></button>
            <span className="card__like-count">{card.likes.length}</span>
          </div>
        </div>
      </li>
    </div>
  )
};

export default Card;