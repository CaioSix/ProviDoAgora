import React, { useState, useEffect } from 'react'

function UserForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail]=useState('');

  // useEffect(() => {

  //   )
  // }, [])

  async function handSubmit(e) {
    e.preventDefault();

    await onSubmit({
      name,
      bio,
      location,
      destination, 
      tel,
      email
    });

    setName('');
    setBio('');
    setTel('')
    setEmail('')

  }

  return (
    <form onSubmit={handSubmit}>
      <div className="input-block">
        <label htmlFor="name">Nome do Usuario </label>
        <input
          name="name"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="techs">Bio</label>
        <input
          name="bio"
          id="bio"
          value={bio}
          onChange={e => setBio(e.target.value)}
        />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Origem</label>
          <input
            name="location"
            id="location"
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="longitude">Destino</label>
          <input
            name="destination"
            id="destination"
            value={destination}
            onChange={e => setDestination(e.target.value)}
          />
        </div>
      </div>
      <div className="input-block">
          <label htmlFor="telefone"> Telefone para contato </label>
          <input
            name="telefone"
            id="telefone"
            value={tel}
            onChange={e => setTel(e.target.value)}
          />
      </div>
      <div className="input-block">
          <label htmlFor="email"> Email </label>
          <input
            name="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
      </div>

      <button type="submit">Salvar</button>
    </form>
  )
}

export default UserForm