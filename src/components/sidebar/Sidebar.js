import './Sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">HAKKIMDA</span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV7kBN7ME-lfTXgpOKcrq495b5gPzkkyFLmvhZyfFH06OHCHqUI70tOd5AwZoaaPTZ10o&usqp=CAU" alt="" />
                <p>Web Tasarımı & Web Geliştirme üzerine çalışmalar yapmaktayım.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">KATEGORİ</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Hayat</li>
                    <li className="sidebarListItem">Müzik</li>
                    <li className="sidebarListItem">Stil</li>
                    <li className="sidebarListItem">Spor</li>
                    <li className="sidebarListItem">Sinema</li>
                    <li className="sidebarListItem">Teknoloji</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">TAKİP ET</span>
                <div className="sidebarSocial">
                    <i className="navIcon fab fa-facebook-square"></i>
                    <i className="navIcon fab fa-twitter-square"></i>
                    <i className="navIcon fab fa-pinterest-square"></i>
                    <i className="navIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
