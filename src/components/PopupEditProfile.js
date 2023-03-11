import React from "react";
import PopupWithForm from './PopupWithForm.js';

function PopupEditProfile({isOpen, onClose}) {
  return(
    <PopupWithForm
    isOpen={isOpen}
    onClose={onClose}
    name='edit'
    title='Редактировать профиль'
    buttonText='Сохранить'>
      <input
      className="popup__form-input popup__form-input_other-name"
      id="name-input"
      type="text"
      name="name"
      placeholder="Ваше имя"
      required/>
      <span className="name-input-error popup__form-inpt-err name-inpt-err"
      id="name-error"></span>
      <input
      className="popup__form-input popup__form-input_other-about"
      id="about-input"
      type="text"
      name="about"
      placeholder="О себе"

      required/>
      <span className="popup__form-inpt-err about-input-error"
      id="about-error"></span>
    </PopupWithForm> 
  )
};

export default PopupEditProfile;