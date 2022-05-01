import "./style.css"
import logo from '../../assets/conectbike-colorida.svg'
import instagram from '../../assets/icon-instagram.svg'
import facebook from '../../assets/icon-facebook.svg'
import google from '../../assets/icon-google.svg'

export function Login() {
    return (
        <div className="login-container">
            <form className="form-login">
                <img className="logo" src={logo} width='250px' />
                <div className="label-float">
                    <input type="text" placeholder=" " />
                    <label>Nome de Usuário</label>
                </div>
                <div className="label-float">
                    <input type="text" placeholder=" " />
                    <label>Senha</label>
                </div>
                <p>Esqueceu a sua senha?</p>
                <button type='submit'><span>Entrar</span></button>
                <div className="d-flex">
                    <img className="icone" src={facebook} />
                    <img className="icone" src={google} />
                    <img className="icone" src={instagram} />
                </div>
            </form>
        </div>
    )
}