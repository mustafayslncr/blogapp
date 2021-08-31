import { Link } from "react-router-dom";
import "./Register.css"

export default function Register() {
    return (
        <div className="register">
                <span className="registerTitle">Kayıt Ol</span>
            <form  className="registerForm">
                <label>Kullanıcı Adı</label>
                <input type="text" className="registerInput" placeholder="Kullanıcı Adınızı giriniz" />
                <label>Email</label>
                <input type="text" className="registerInput" placeholder="E-postanızı Giriniz" />
                <label>Şifre</label>
                <input type="password" className="registerInput" placeholder="Parolanızı giriniz" />
                <button className="registerButton">Kayıt Ol</button>
            </form>
            <button className="registerLoginButton">
                <Link className="link" to="/login">OTURUM AÇ</Link>
                </button>
        </div>
    );
}
