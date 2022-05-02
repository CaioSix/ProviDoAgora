import React from "react";
import { Link } from "react-router-dom";

const SectionSearch = ()=>{
    return(
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
            <Link to="/pesquisa">
              <button className="btn-cadastre-se">Pesquisar</button>
            </Link>
            
          </form>
        </div>
      </section>

    )
}

export default SectionSearch