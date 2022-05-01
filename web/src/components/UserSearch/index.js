import React, { useState, useEffect } from 'react'

function UserForm({ onSubmit }) {

  const [destination, setDestination] = useState('');


  async function handSubmit(e) {
    e.preventDefault();

    await onSubmit({
      destination, 

    });

    // setDestination('');
 

  }

  return (
    <form onSubmit={handSubmit}>

      <div className="input-block">
        <label >Destino</label>
        <input
          name="destination"
          id="destination"
          value={destination}
          onChange={e => setDestination(e.target.value)}
        />
      </div>

      <button type="submit">Pesquisar</button>
    </form>
  )
}

export default UserForm