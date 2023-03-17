
import { useState, useEffect } from 'react';

import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';
import PopupEditProfile from './PopupEditProfile.js';
import PopupChangeAvatar from './PopupChangeAvatar.js';
import PopupNewCardAdd from './PopupNewCardAdd.js';
import ImagePopup from './ImagePopup.js';

import {CurrentUserContext} from '../contexts/CurrentUserContext';
import api from '../utils/api.js';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

    const[isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const[isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const[isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const[createCard, setCreateCard] = useState({});

    useEffect(() => {
      Promise.all([api.getUserInfo(), api.getInitCards()])
        .then(([userData, cardsData]) => {
          setCurrentUser(userData);
          //setUserName(userData.name);
          //setUserActivity(userData.about);
          setCards(cardsData);
        })
        .catch((err) => {console.log(err);});
  },[]);

    const handleEditProfileClick = () => {setIsEditProfilePopupOpen(true);};

    const handleAddPlaceClick = () => {setIsAddPlacePopupOpen(true);};

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
      };

    const handleCardClick = (card) => {
      setCreateCard(card);
    };

    function handleCardLike(card) {
      const isLiked = card.likes.some((i) => i._id === currentUser._id);
      api.changeLikeStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((i) => (i._id === card._id ? newCard : i)));
      });
    }

const closePopups = () => {
    console.log('closePopups');
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setCreateCard({});
}

return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className="App page" >
      <Header/>
      <Main
        cards={cards}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onCardLike = {handleCardLike}
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
  </CurrentUserContext.Provider>
);
}

export default App;
