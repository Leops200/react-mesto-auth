import React, { useEffect, useState } from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main({onEditAvatar, onEditProfile, onAddPlace}) {
    const[avatar, setAvatar] = useState("");
    const[userName, setUserName] = useState("");
    const[userActivity, setUserActivity] = useState("");
    const[cards, setCards] = useState([]);

useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitCards()])
      .then(([userData, cardsData]) => {
        setAvatar(userData.avatar);
        setUserName(userData.name);
        setUserActivity(userData.about);
        setCards(cardsData);
      })
      .catch((err) => {console.log(err);});
},[]);

  return(
    <main className="content page__content">
            <section className="profile content__section">
                <div className="profile__box">
                    <div className="profile__avatar-box">
                        <img src={avatar} className="profile__avatar" alt="Аватарка"/>
                        <button onClick = {onEditAvatar}className="profile__avatar-btn">
                        </button>
                    </div>
                        <div className="profile__user-box">
                        <h1 className="profile__user-name">{userName}</h1>
                        <button onClick = {onEditProfile}
                        className="button profile__edit-btn" type="button"></button>
                            <p className="profile__user-activity">{userActivity}</p>
                        </div>
                    <button onClick = {onAddPlace}
                    className="button profile__add-btn" type="button"></button>
                </div>
            </section>
            <section className="elements content__section" aria-label="Фотогалерея">
              {cards.map((card) => {
                return(
                  <Card
                    card={card}
                    name={card.name}
                    link={card.link}
                    rey={card._id}
                  />
                );
              })}
            </section>
    </main>
  )
};

export default Main;