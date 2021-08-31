import "./Settings.css"
import SideBar from "../../components/sidebar/Sidebar"

export default function Setting() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Hesabınızı Güncelleyin</span>
                    <span className="settingsDeleteTitle">Hesabı Sil</span>
                </div>
                <form className="settingsForm">
                    <label>Profil Fotoğrafı</label>
                    <div className="settingsPP">
                        <img
                            src="https://blog-biletall.mncdn.com/wp-content/uploads/2019/11/manzara-sevenlerin-takip-etmesi-gereken-instagram-hesaplari.jpg"
                            alt="" 
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>Kullanıcı Adı</label>
                    <input type="text" placeholder="Kullanıcı Adı"/>
                    <label>Email</label>
                    <input type="text" placeholder="...@gmail.com"/>
                    <label>Şifre</label>
                    <input type="password"/>
                    <button className="settingsSubmit">Güncelle</button>
                </form>
            </div>
            <SideBar />
        </div>
    )
}
 