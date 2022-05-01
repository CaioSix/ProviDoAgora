import React from 'react'
import './styles.css'
import {ChatModal} from '../ChatModal/index'

function UserItem({user}){
  console.log(user)
    return(
        <li key={user.name} className="dev-item">
          {console.log(user)}
        <header>
          {/* <img src={dev.avatar_url} alt={dev.name}/> */}
          <div className="user-info">
            <strong>{user.name}</strong>
            {/* <span>{dev.techs.join(', ')}</span> */}
          </div>
        </header>
        <p> {user.bio}</p>
        <p> Saindo da Zona  <strong>{user.location}</strong></p>
        <p> Indo para Zona <strong>{user.destination}</strong></p>
        <p> Horario de Partida: <strong>{user.hour} H</strong></p>
        <ChatModal user={user}/>
    </li>
    )
}

export default UserItem