import logo from '../../assets/conectbike.svg'
import './styles.css'
import {CirculedNumber} from '../../components/CirculedNumber/index'
import { Button } from '../../components/Button'
import {Link} from "react-router-dom";

export function Home() {
    return (
        <>
            <header>
                <nav>
                    <img src={logo} alt='conectbike'/>
                    <ul>
                        <li> 
                            <Link to="/app">Fazer login</Link>
                        </li>
                        <li>
                            <Link to="/app">
                                <Button text="Cadastre-se"/>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <section className='section-1'>
                    <h1>Como a sua vida está impactando o planeta?</h1>
                    <p>De acordo com um estudo feito em 2019 pela Organização Mundial da Saúde(OMS).</p> <br/>
                    <p>Ao menos sete milhões de pessoas morrem anualmente em todo o planeta em função de doenças relacionadas à poluição do ar.</p> <br/>
                    <p>Provocada por substâncias como o monóxido de carbono (CO) e outros gases tóxicos.</p>
                </section>
                <section className='section-2'>
                    <h2>E como você pode contribuir com o planeta através da sua mudança?</h2>
                    <div className='container'>
                        <div className='item'>
                            <CirculedNumber number="01"/>
                            <p className='bold'>Seja a mudança</p>
                            <p>Pedalar possui uma pegada de carbono menor que andar apé, pegar um onibus e dirigir um carro. Ajude o meio ambiente enquanto aproveita o ar livre.</p>
                        </div>
                        <div className='item'>
                            <CirculedNumber number="02"/>
                            <p className='bold'>Procure, clique e pedale</p>
                            <p>Encontre um grupo para pedalar juntos. Ir ao trabalho, a feira, ao centro fica muito melhor com companhia.</p>
                        </div>
                        <div className='item'>
                            <CirculedNumber number="03"/>
                            <p className='bold'>Confie em quem pedala com você</p>
                            <p>Para nós é muito importante que vocês se sintam seguros ao compartilhar um trajeto juntos. Por isso estamos trabalhando para que nossa plataforma seja a mais segura possivel.</p>
                        </div>
                    </div>

                    <Link to="/app">
                        <Button text="Faça parte dessa iniciativa"/>
                    </Link>
                </section>
            </main>
        </>
    )
}