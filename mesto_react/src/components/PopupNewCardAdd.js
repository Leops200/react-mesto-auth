import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function PopupNewCardAdd({isOpen, onClose}){
  return(
    <PopupWithForm
    isOpen={isOpen} onClose={onClose}
    name='add'
    title='Новое место'
    buttonText='Создать'>
      <input 
      className="popup__form-input popup__form-input_place-name"
      type="text"
      id="place-name"
      placeholder="Название"
      name="name"
      required
      />
      <span className="popup__form-inpt-err place-name-error" id="place-name-error">
      </span>
      <input className="popup__form-input popup__form-input_link"
      id="url-inpt"
      type="url"
      placeholder="Ваша ссылка"
      name="link"
      required
      />
      <span className="popup__form-inpt-err url-inpt-error" id="url-inpt-error"></span>
    </PopupWithForm>
  )
};

export default PopupNewCardAdd;