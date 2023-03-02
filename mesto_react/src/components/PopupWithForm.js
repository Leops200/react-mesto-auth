import React from "react";

function PopupWithForm(props) {
  return(
    <div className={`popup popup__${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <button className="button popup__close-btn" onClick={props.onClose}></button>
        <form className="popup__form" name={`${props.name}`} noValidate>
          {props.children}
          <button className="button popup__form-btn-save" type="submit">{props.buttonText}</button>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;