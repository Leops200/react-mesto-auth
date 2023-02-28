import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
            <div className="logo"></div>
        </header>
        <main className="content page__content">

            <section className="profile content__section">
                <div className="profile__box">
                    <div className="profile__avatar-box">
                        <img src="<%=require('./images/mesto_logo.png')%>" className="profile__avatar" alt="Аватарка"/>
                        <button className="profile__avatar-btn"></button>
                    </div>
                        <div className="profile__user-box">
                        <h1 className="profile__user-name">Жак-Ив Кусто</h1>
                        <button className="button profile__edit-btn" type="button"></button>
                            <p className="profile__user-activity">Исследователь океана</p>
                        </div>
                    <button className="button profile__add-btn" type="button"></button>
                </div>
            </section>

            <section className="elements content__section" aria-label="Фотогалерея"></section>
        </main>
        <footer className="footer">
            <p className="footer__copyright">&#xA9; 2022 Mesto Russia</p>
        </footer>
        <div className="popup popup_profile" id="popup__profile">
            <div className="popup__container">
                <h2 className="popup__title">Редактировать профиль</h2>
                <button className="button popup__close-btn popup__close-btn_profile" type="button"></button>
                <form
                    className="popup__form popup__form-edit"
                    novalidate
                    id="profile-edit"
                    name="profile-edit"
                >
                    <input
                        id="name-input"
                        className="popup__form-input popup__form-input_other-name"
                        autofocus
                        type="text"
                        form="profile-edit"
                        placeholder="Ваше имя"
                        name="name"
                        minlength="2"
                        maxlength="40"
                        required
                    />
                    <span className="name-input-error popup__form-inpt-err name-inpt-err"></span>
                    <input
                        className="popup__form-input popup__form-input_other-about"
                        type="text"
                        form="profile-edit"
                        placeholder="О себе"
                        name="about"
                        id="about-input"
                        required
                        minlength="2"
                        maxlength="200"
                    />
                    <span className="popup__form-inpt-err about-input-error"></span>
                    <button className="button popup__form-btn-save" type="submit" form="profile-edit">Сохранить</button>
                </form>
            </div>
        </div>
        <section className="popup popup_new-card" id="new__card">
            <div className="popup__container">
                <h2 className="popup__title popup__title-new-card">Новое место</h2>
                <button className="button popup__close-btn popup__close-btn_card" type="button"></button>
                <form
                    className="popup__form popup__form-new-card"
                    id="new-card"
                    name="new-card"
                    novalidate
                >
                    <input
                        className="popup__form-input popup__form-input_place-name"
                        type="text"
                        id="place-name"
                        form="new-card"
                        placeholder="Название"
                        minlength="2"
                        maxlength="30"
                        name="name"
                        required
                    />
                    <span className="popup__form-inpt-err place-name-error"></span>
                    <input
                        className="popup__form-input popup__form-input_link"
                        type="url"
                        form="new-card"
                        placeholder="Ваша ссылка"
                        name="link"
                        id="url-inpt"
                        required
                    />
                    <span className="popup__form-inpt-err url-inpt-error"></span>
                    <button className="button popup__form-btn-save popup__form-btn-save_dsbl" type="submit" form="new-card">Создать</button>
                </form>
            </div>
        </section>
        <div className="popup popup_zoom">
            <div className="popup__container-zoom">
                <button className="button popup__close-btn popup__close-btn_zoom" type="button"></button>
                <div className="popup__zoom-vis">
                    <img className="popup__img" src="#" alt="#"/>
                    <h2 className="popup__img-title">Название места</h2>
                </div>
            </div>
        </div>
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
        <div className="popup popup_avatar" id="popup__avatar">
            <div className="popup__container">
                <h2 className="popup__title">Обновить аватар</h2>
                <button className="button popup__close-btn popup__close-btn_avatar" type="button"></button>
                <form
                    className="popup__form popup__form-avatar"
                    novalidate
                    id="form__avatar"
                    name="avatar"
                >
                    <input
                        className="popup__form-input 
                        popup__form-input_avatar"
                        type="url"
                        placeholder="Ссылка на картинку"
                        name="avatar"
                        id="avatar"
                        required
                        minlength="2"
                        maxlength="200"
                    />
                    <span className="popup__form-inpt-err avatar-error"></span>
                    <button className="button popup__form-btn-save" >Сохранить</button>
                </form>
            </div>
        </div> 
    </div>
  );
}

export default App;
