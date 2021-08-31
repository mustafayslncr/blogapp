import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { TYPES } from "../../redux/constants"
import "./Login.css"


export default function Login() {
    const [hata,setHata] = useState(false)
    const [email,setEmail] = useState('')
    const [parola,setParola] = useState('')
    const history = useHistory()
    const dispatch = useDispatch()
   
    
    const signIn = (e) => {
        e.preventDefault()
        if(!email || !parola || !email.includes("@hotmail.com")){
           setHata(true)
        }else{
            dispatch({
                type:TYPES.LOGIN,payload:true
            })
            history.push('/')     
        }
        
    }
    return (
        <div className="login">
             
                <span className="loginTitle">Oturum Aç</span>
            <form  className="loginForm">
                <label>Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="loginInput" placeholder="E-postanızı giriniz" />
                <label>Şifre</label>
                <input value={parola} onChange={e => setParola(e.target.value)} type="password" className="loginInput" placeholder="Parolanızı giriniz" />
                {
                    hata && (<div className="loginerror">E-postanızı veya şifrenizi yanlış girdiniz.</div> )
                }
                <button onClick={signIn} className="loginButton">Oturum Aç</button>
            </form>
          
            <button className="loginRegisterButton">
                <Link className="link" to="/register">KAYIT OL</Link>
            </button>
        </div>
    )
}
