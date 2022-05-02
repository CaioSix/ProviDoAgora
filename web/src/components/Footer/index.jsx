import React from "react";
import { Link } from "react-router-dom";
import playStory from "../../assets/playStory01.svg";
import apple from "../../assets/apple.svg";

const Footer = () =>{
    return(
        <>
            <section className="section-4">
            <h3>Assine a nossa newsletter</h3>
            <p>
            Confira as notícias mais recentes <br></br>
            sobre o meio ambiente, iniciativas e dicas.
            </p>

            <div className="w-100 d-flex align-items-center mt-5">
            <input type="mail" placeholder="E-mail"></input>
            <button>
                <span>Enviar</span>
            </button>
            </div>
            </section>
            <footer>
        <div className="row ">
          <div className="col-9">
            <p>Acesse a Central de Ajuda</p>
            <h4>Empresa</h4>
            <li>Quem somos</li>
            <li>O que oferecemos</li>
            <li>Carreiras</li>
          </div>

          <div className="col-3 d-flex align-items-end pb-5">
          <Link to="/app"><img src={playStory} alt="playStory" /></Link>
          <Link to="/app" className="logo-apple"> <img src={apple} alt="apple" /></Link>

          </div>
        </div>
      </footer>
        </>
    )
}

export default Footer