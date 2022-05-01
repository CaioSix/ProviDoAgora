import React, { useState, useEffect } from 'react'
import './styles.css'

function UserForm({ onSubmit }) {

  const [destination, setDestination] = useState('');
  const [location, setLocation] = useState('');
  const [] = useState('');


  async function handSubmit(e) {
    e.preventDefault();

    await onSubmit({
      destination, location

    });

    // setDestination('');
 

  }

  return (
    <form className='form-pesquisa' onSubmit={handSubmit}>
        <select name="location" id="location"  onChange={e => setLocation(e.target.value)}>
            <option disabled selected>Saindo de...</option>
            <option value="zona-leste">Zona Leste</option>
            <option value="zona-oeste">Zona Oeste</option>
            <option value="zona-norte">Zona Norte</option>
            <option value="zona-sul">Zona Sul</option>
         </select> 

        <select name="destination" id="destination"   onChange={e => setDestination(e.target.value)}>
            <option disabled selected>Indo para...</option>
            <option value="zona-leste">Zona Leste</option>
            <option value="zona-oeste">Zona Oeste</option>
            <option value="zona-norte">Zona Norte</option>
            <option value="zona-sul">Zona Sul</option>
        </select>

        <select name="select-horario">
            <option disabled selected>Horário de partida...</option>
            <option value="00">00:00</option>
            <option value="01">01:00</option>
            <option value="02">02:00</option>
            <option value="03">03:00</option>
            <option value="04">04:00</option>
            <option value="05">05:00</option>
            <option value="06">06:00</option>
            <option value="07">07:00</option>
            <option value="08">08:00</option>
            <option value="09">09:00</option>
            <option value="10">10:00</option>
            <option value="11">11:00</option>
            <option value="12">12:00</option>
            <option value="13">13:00</option>
            <option value="14">14:00</option>
            <option value="15">15:00</option>
            <option value="16">16:00</option>
            <option value="17">17:00</option>
            <option value="18">18:00</option>
            <option value="19">19:00</option>
            <option value="20">20:00</option>
            <option value="21">21:00</option>
            <option value="22">22:00</option>
            <option value="23">23:00</option>
        </select>
        
        <button className='btnPesquisar' type="submit">Pesquisar</button>
    </form>
  )
}

export default UserForm