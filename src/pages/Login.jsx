import logo from './styles/img/xp-inc-gray-white.png';

export default function Login(props) {
    return (
        <div className="login-page">
            <div className="login-page__container">
                <div className="login-page__container__logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="login-page__container__form">
                    <div className="login-page__container__form__title">
                        <h1>Login</h1>
                    </div>
                    <div className="login-page__container__form__input">
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="login-page__container__form__input">
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="login-page__container__form__button">
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}