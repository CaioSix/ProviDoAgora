import React from "react";
import logo from "../../assets/conectbike.svg"
import { Link } from "react-router-dom";
import './styles.css';

const Header = () =>{
    return(
      <header className="header-teste">
        <nav>
          <Link to="/">
              <img src={logo} alt="conectbike" />      
          </Link>
          <ul>
            <li>
              <Link to="/pesquisa">
                <button className="btn-cadastre-se">Pesquise Alguém Próximo</button>
              </Link>
              <Link to="/app">
                <button className="btn-cadastre-se">Cadastre-se</button>
              </Link>
            </li>
          </ul>
        </nav>
        </header>
    )
}

export default Header
