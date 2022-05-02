import React, { useState, useEffect } from 'react'
import './styles.css'

function UserForm({ onSubmit }) {

  const [destination, setDestination] = useState('');
  const [location, setLocation] = useState('');


  async function handSubmit(e) {
    e.preventDefault();

    await onSubmit({
      destination,
      

    });

    // setDestination('');
 

  }

  return (
    <form className='form-pesquisa' onSubmit={handSubmit}>
        <select name="location" id="location"  onChange={e => setLocation(e.target.value)}>
            <option disabled selected>Saindo de...</option>
            <option value="Leste">Zona Leste</option>
            <option value="Oeste">Zona Oeste</option>
            <option value="Norte">Zona Norte</option>
            <option value="Sul">Zona Sul</option>
         </select> 

        <select name="destination" id="destination"   onChange={e => setDestination(e.target.value)}>
            <option disabled selected>Indo para...</option>
            <option value="Leste">Zona Leste</option>
            <option value="Oeste">Zona Oeste</option>
            <option value="Norte">Zona Norte</option>
            <option value="Sul">Zona Sul</option>
        </select>

        <button className='btnPesquisar' type="submit">Pesquisar</button>
    </form>
  )
}

export default UserForm