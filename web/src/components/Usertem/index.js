import React from 'react'
import './styles.css'

function DevItem({user}){
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
        {/* <a href={`https://github.com/${dev.github_username}`}> Acessar o perfil nom gitHub</a> */}
    </li>
    )
}

export default DevItem