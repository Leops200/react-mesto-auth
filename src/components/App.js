
import React from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';
import PopupEditProfile from './PopupEditProfile.js';
import PopupChangeAvatar from './PopupChangeAvatar.js';
import PopupNewCardAdd from './PopupNewCardAdd.js';
import ImagePopup from './ImagePopup.js';

function App() {
    const[isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const[isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const[isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const[createCard, setCreateCard] = React.useState({});

    const handleEditProfileClick = () => {setIsEditProfilePopupOpen(true);};

    const handleAddPlaceClick = () => {setIsAddPlacePopupOpen(true);};

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
      };

      const handleCardClick = (card) => {
        setCreateCard(card);
      };

const closePopups = () => {
    console.log('closePopups');
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setCreateCard({});
}

  return (
    <div className="App page" >
      <Header/>
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer/>
      <PopupEditProfile
      isOpen={isEditProfilePopupOpen}
      onClose={closePopups}/>
      <PopupNewCardAdd
      isOpen={isAddPlacePopupOpen}
      onClose={closePopups}/>
      <ImagePopup card={createCard} onClose={closePopups}/>
        <PopupChangeAvatar
        isOpen={isEditAvatarPopupOpen}
        onClose={closePopups}/>
    </div>
  );
}

export default App;
