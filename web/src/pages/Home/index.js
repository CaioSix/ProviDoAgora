import logo from "../../assets/conectbike.svg";
import "./styles.css";
import iconelogin from "../../assets/icone-login.svg";
import { CirculedNumber } from "../../components/CirculedNumber/index";
import { Link } from "react-router-dom";
import logoplaneta from "../../assets/logo-planeta.svg";
import playStory from "../../assets/playStory01.svg";
import apple from "../../assets/apple.svg";

export function Home() {
  return (
    <>
      <header>
        <nav>
          <img src={logo} alt="conectbike" />
          <ul>
            <li>
              <img className="me-2" src={iconelogin} />
              <Link className="link" to="/login">
                Fazer login
              </Link>
            </li>
            <li>
              <Link to="/cadastro">
                <button className="btn-cadastre-se">Cadastre-se</button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="section-1">
          <h1 className="titulo">Como a sua vida está impactando o planeta?</h1>
          <div className="row">
            <div className="col-6">
              <p className="mt-4">
                De acordo com um estudo feito em 2019 pela Organização Mundial
                da Saúde(OMS).
              </p>{" "}
              <br />
              <p>
                Ao menos sete milhões de pessoas morrem anualmente em todo o
                planeta em função de doenças relacionadas à poluição do ar.
              </p>{" "}
              <br />
              <p>
                Provocada por substâncias como o monóxido de carbono (CO) e
                outros gases tóxicos.
              </p>
            </div>
            <div className="col-6">
              <img src={logoplaneta} />
            </div>
          </div>
        </section>
        <section className="section-2">
          <h2>
            E como você pode contribuir com o planeta através da sua mudança?
          </h2>
          <div className="container">
            <div className="item">
              <CirculedNumber number="01" />
              <p className="bold">Seja a mudança</p>
              <p>
                Pedalar possui uma pegada de carbono menor que andar apé, pegar
                um onibus e dirigir um carro. Ajude o meio ambiente enquanto
                aproveita o ar livre.
              </p>
            </div>
            <div className="item">
              <CirculedNumber number="02" />
              <p className="bold">Procure, clique e pedale</p>
              <p>
                Encontre um grupo para pedalar juntos. Ir ao trabalho, a feira,
                ao centro fica muito melhor com companhia.
              </p>
            </div>
            <div className="item">
              <CirculedNumber number="03" />
              <p className="bold">Confie em quem pedala com você</p>
              <p>
                Para nós é muito importante que vocês se sintam seguros ao
                compartilhar um trajeto juntos. Por isso estamos trabalhando
                para que nossa plataforma seja a mais segura possivel.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <Link className="mt-5 ms-3" to="/app">
              <button className="btn-iniciativa">
                Faça parte dessa iniciativa
              </button>
            </Link>
          </div>
        </section>

        <section className="section-3 ">
          <h1 className="titulo text-center">
            Encontre um parceiro <br></br>
            para a sua viagem de bike
          </h1>
          <div className="d-flex justify-content-center mt-5">
            <form className=" container-input mt-5">

              <select name="select" id="localizacao">
                <option value="valor1" select>
                  Saindo de...
                </option>
                <option  selected>Saindo de...</option>
              <option  
                name="location"
                id="location"  
                value="Leste"
              >Zona Leste</option>
              <option  
                name="location"
                id="location"
                value="Oeste"
                >Zona Oeste</option>
              <option  
                name="location"
                id="location" 
                value="Norte"
                >Zona Norte</option>
              <option  
                name="location"
                id="location"
                value="Sul"
                >Zona Sul</option>
     
              </select>

              <select 
                name="select" 
                id="destino-final">
                <option value="valor1" select>
                  Indo para...
                </option>
                <option  selected>Saindo de...</option>
            <option  
              name="location"
              id="location"  
              value="Leste"
            >Zona Leste</option>
            <option  
              name="location"
              id="location"
              value="Oeste"
              >Zona Oeste</option>
            <option  
              name="location"
              id="location" 
              value="Norte"
              >Zona Norte</option>
            <option  
              name="location"
              id="location"
              value="Sul"
              >Zona Sul</option>
       
              </select>
              <input type="text" placeholder="Horário 00:00"></input>
              <button>
                <span>pesquisar</span>
              </button>
            </form>
          </div>
        </section>

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
      </main>
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
  );
}
