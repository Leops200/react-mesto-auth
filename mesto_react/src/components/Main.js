import React from "react";


function Main() {


    const openPopupProfile = () => {
        document.querySelector('.popup_profile').classList.add('popup_opened');
        console.log('clickEditProfile!');
    };

    const openPopupAvatar = () => {
        document.querySelector('.popup_avatar').classList.add('popup_opened');
        console.log('clickAvatarBTN!');
    };

    const openPopupNewCard = () => {
        document.querySelector('.popup_new-card').classList.add('popup_opened');
        console.log('clicNewCardBTN!');
    }

  return(
    <main className="content page__content">
            <section className="profile content__section">
                <div className="profile__box">
                    <div className="profile__avatar-box">
                        <img src="<%=require('./images/mesto_logo.png')%>" className="profile__avatar" alt="Аватарка"/>
                        <button onClick = {openPopupAvatar}className="profile__avatar-btn">
                        </button>
                    </div>
                        <div className="profile__user-box">
                        <h1 className="profile__user-name">Жак-Ив Кусто</h1>
                        <button onClick = {openPopupProfile}
                        className="button profile__edit-btn" type="button"></button>
                            <p className="profile__user-activity">Исследователь океана</p>
                        </div>
                    <button onClick = {openPopupNewCard}
                    className="button profile__add-btn" type="button"></button>
                </div>
            </section>
            <section className="elements content__section" aria-label="Фотогалерея"></section>
    </main>
  )
};

export default Main;