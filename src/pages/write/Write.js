import "./Write.css"

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg"
                src="https://blog-biletall.mncdn.com/wp-content/uploads/2019/11/manzara-sevenlerin-takip-etmesi-gereken-instagram-hesaplari.jpg" 
                alt="" 
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input type="text" placeholder="Başlık" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Hikayeni Anlat..." 
                    type="text" 
                    className="writeInput writeText">
                    </textarea>   
                </div>
                <button className="writeSubmit">Yayınla</button>
            </form>
        </div>
    )
}
