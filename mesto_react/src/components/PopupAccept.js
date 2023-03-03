import React from "react";

function PopupAccept() {
  return(
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
  )
};

export default PopupAccept;