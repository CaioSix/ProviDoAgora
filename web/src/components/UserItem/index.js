import React from 'react'
import './styles.css'
import {ChatModal} from '../ChatModal/index'

function UserItem({user}){
  console.log(user)
    return(
        <li key={user.name} className="dev-item">
        <header>
          {/* <img src={dev.avatar_url} alt={dev.name}/> */}
          <div className="user-info">
            <strong>{user.name}</strong>
            {/* <span>{dev.techs.join(', ')}</span> */}
          </div>
        </header>
        <p> {user.bio}</p>
        <p> De onde eu sou {user.location}</p>
        <p> Para onde eu vou {user.destination}</p>
        <ChatModal user={user}/>
    </li>
    )
}

export default UserItem