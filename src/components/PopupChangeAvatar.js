import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function PopupChangeAvatar({isOpen, onClose}) {
  return(
    <PopupWithForm
      isOpen={isOpen} onClose={onClose}
      name='avatar'
      title='Обновить аватар'
      buttonText='Сохранить'>
        <input
        className="popup__form-input 
        popup__form-input_avatar"
        type="url"
        name="avatar"
        placeholder="Ссылка на картинку"
        id="avatar"
        required
        />
        <span className="popup__form-inpt-err avatar-error"
        id="avatar-err"></span>
    </PopupWithForm>
  )
};

export default PopupChangeAvatar;