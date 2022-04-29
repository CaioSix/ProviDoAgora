import React, { useState, useEffect} from 'react'

function UserForm ({ onSubmit }) {
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition (
          (position)=>{
            const { latitude, longitude } = position.coords;
    
            setLatitude(latitude);
            setLongitude(longitude);
          },
          (error)=>{
            console.log(error);
          },{
            timeout: 30000,
          }
    
        )
      },[])

      async function handSubmit(e) {
          e.preventDefault();  

          await onSubmit({
            name,
            bio,
            latitude, 
            longitude 
          });

          setName('');
          setBio('');
        
      }

    return(
        <form onSubmit={handSubmit}>
        <div className="input-block">
          <label htmlFor="name">Nome do Usuario </label>
          <input 
            name="name" 
            id="name" 
            value={name}
            onChange={ e=> setName(e.target.value)}  
          />
        </div>

        <div className="input-block">
          <label htmlFor="techs">Bio</label>
          <input 
            name="bio" 
            id="bio" 
            value={bio}
            onChange={ e=> setBio(e.target.value)}  
            />
        </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">latitude</label>
            <input 
              type="number" 
              name="latitude" 
              id="latitude" 
              value={latitude}
              onChange={ e=> setLatitude(e.target.value)}  
            />
          </div>
          <div className="input-block">
            <label htmlFor="longitude">longitude</label>
            <input 
              type="number" 
              name="longitude" 
              id="longitude"
              value={longitude}
              onChange={ e=> setLongitude(e.target.value)} 
            />
          </div>
        </div>

        <button type="submit">Salvar</button>
      </form>
    )
}

export default UserForm