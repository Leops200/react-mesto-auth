import React from 'react';
import './App.css';
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';
import PopupEditProfile from './PopupEditProfile.js';
import PopupChangeAvatar from './PopupChangeAvatar.js';
import PopupNewCardAdd from './PopupNewCardAdd.js';

function App() {
    const[isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const[isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const[isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

    const handleEditProfileClick = () => {setIsEditProfilePopupOpen("popup_opened");};

    const handleAddPlaceClick = () => {setIsAddPlacePopupOpen("popup_opened");};

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen("popup_opened");
      };

const closePopups = () => {
    console.log('closePopups');
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
}

  return (
    <div className="App page" >
      <Header/>
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer/>
      <PopupEditProfile
      isOpen={isEditProfilePopupOpen}
      onClose={closePopups}/>
      <PopupNewCardAdd
      isOpen={isAddPlacePopupOpen}
      onClose={closePopups}/>
        <div className="popup popup_zoom">
            <div className="popup__container-zoom">
                <button className="button popup__close-btn popup__close-btn_zoom" type="button"></button>
                <div className="popup__zoom-vis">
                    <img className="popup__img" src="#" alt="#"/>
                    <h2 className="popup__img-title">Название места</h2>
                </div>
            </div>
        </div>
        <div className="popup popup_accept">
            <div className="popup__container">
                <button className="button popup__close-btn popup__close-btn_accept"></button>
                <h2 className="popup__title">Вы уверены?</h2>
                <form
                 className="popup__form popup__form-accept"
                 id="form-accept"
                 name="accept"
                 novalidate>
                 <button className="button popup__form-btn-save">Да</button>
                </form>
            </div>
        </div>
        <PopupChangeAvatar
        isOpen={isEditAvatarPopupOpen}
        onClose={closePopups}/>
    </div>
  );
}

export default App;
