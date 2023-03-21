/*
Здравствуйте Геннадий! Прежде всего благодарю Вас за Ревью! Отдельное спасибо Вам за точные и понятные коммертарии к замечаниям. Вообще, спасибо за Ваш труд, он очень важен для новичков, таких, как я. 
Не нашёл простого решения для закрытия попапа с картинкой клавишей "ESC", если только добавлять "isOpen" этому попапу, но мне показалось это нагромождением... В остальном, постарался исправить все замечания, но не исключаю и того, что мог ещё что-то не так сделать. проверьте меня пожалуйста. 
   Спасибо. Жду новых замечаний)
*/
import { useState, useEffect } from 'react';

import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import ImagePopup from './ImagePopup.js';

import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api.js';
import PopupAccept from './PopupAccept.js';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isEditProfilePopupChanging, setIsEditProfilePopupChanging] = useState(false);
  const [isEditAvatarPopupChanging, setIsEditAvatarPopupChanging] = useState(false);
  const [isAddPlacePopupChanging, setIsAddPlacePopupChanging] = useState(false);

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAcceptPopupOpen, setIsAcceptPopupOpen] = useState(false);
  const [isAcceptPopupChanging, setAcceptPopupButtonText] = useState(false);
  const [cardDel, setCardDel] = useState({});
  const [selectedCard, setSelectedCard] = useState({});

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        //setUserName(userData.name);
        //setUserActivity(userData.about);
        setCards(cardsData);
      })
      .catch((err) => { console.log(err); });
  }, []);

  const handleEditProfileClick = () => { setIsEditProfilePopupOpen(true); };

  const handleAddPlaceClick = () => { setIsAddPlacePopupOpen(true); };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCardDelClick = (card) => {
    setIsAcceptPopupOpen(true);
    setCardDel(card);
  };

  // Обрабатываем клик по лайку
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((i) => (i._id === card._id ? newCard : i)));
      })
      .catch((err) => {
        console.log(err);
      })
  };
  //удаление карточки 
  const handleCardDel = (card) => {
    setAcceptPopupButtonText(true);
    api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((i) => i._id !== card._id));
        closePopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setAcceptPopupButtonText(false);
        setCardDel({});
      });
  };

  //Обновляем информацию пользователя
  const updateUserInfo = (data) => {
    setIsEditProfilePopupChanging(true);
    api.addInfo(data)
      .then((newData) => { setCurrentUser(newData); })
      .then(() => { closePopups(); })
      .catch((err) => { console.log(err); })
      .finally(() => { setIsEditProfilePopupChanging(false); })
  };
  //Обновляем аватарку
  const updateAvatar = (data) => {
    setIsEditAvatarPopupChanging(true);
    api.addAvatar(data)
      .then((newData) => { setCurrentUser(newData); })
      .then(() => { closePopups(); })
      .catch((err) => { console.log(err); })
      .finally(() => { setIsEditAvatarPopupChanging(false); })
  };

  const handleAddCardSubmit = (data) => {
    setIsAddPlacePopupChanging(true)
    api.addNewCard(data)
      .then((newData) => { setCards([newData, ...cards]); })
      .then(() => { closePopups(); })
      .catch((err) => { console.log(err); })
      .finally(() => { setIsAddPlacePopupChanging(false); })
  }

  // Закрытие по ESC

  const isOpen = isAcceptPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || isEditAvatarPopupOpen

  useEffect(() => {
    function handleEscClose(e) {
      if (e.key === "Escape") {
        closePopups();
        console.log('ESCpress');
      }
    }
    if (isOpen) {
      window.addEventListener("keydown", handleEscClose);
      return () => window.removeEventListener("keydown", handleEscClose);
    }
  }, [isOpen]);

  // закрываем попапы
  const closePopups = () => {
    console.log('closePopups');
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsAcceptPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App page" >
        <Header />
        <Main
          cards={cards}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelClick}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closePopups}
          onSaving={isEditProfilePopupChanging}
          onUseUpdates={updateUserInfo}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closePopups}
          onSaving={isAddPlacePopupChanging}
          onAddCard={handleAddCardSubmit}
        />
        <ImagePopup
          card={selectedCard}
          onClose={closePopups}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closePopups}
          onSaving={isEditAvatarPopupChanging}
          onAvatarUpdates={updateAvatar}
        />
        <PopupAccept
          isOpen={isAcceptPopupOpen}
          onClose={closePopups}
          onDeleteCard={handleCardDel}
          onSaving={isAcceptPopupChanging}
          card={cardDel}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
