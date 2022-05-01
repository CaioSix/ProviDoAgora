import React, { useState, useEffect } from 'react'

function UserForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail]=useState('');
  const [hour, setHour]=useState('');

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
      email,
      hour
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
        <label htmlFor="longitude">Origem</label> 
          <select
            name="location"
            id="location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            >
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
        </div>
        <div className="input-block">
          <label htmlFor="longitude">Destino</label> 
           <select
                name="destination"
                id="destination"
                value={destination}
                onChange={e => setDestination(e.target.value)}
            >
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
      <div className="input-block">
          <label htmlFor="email"> Horario </label>
          <select
             name="hour"
            id="hour"
            value={hour}
            onChange={e => setHour(e.target.value)}>
           
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
          
      </div>

     

      <button type="submit">Salvar</button>
    </form>
  )
}

export default UserForm