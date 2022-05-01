import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import '../../global.css';
import './styles.css';
import '../../Main.css';
import '../../Sidebar.css';
import UserItem from '../../components/UserItem'
import UserSearch from '../../components/UserSearch'

//Testeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee

function App() {
  const [users, setUsers] = useState([]);

async function handleAddUser(data){
 const response = await api.get(`/users/${data.destination}`)
 setUsers(response.data);
 console.log(response)
//  console.log(response)
//  console.log(users)
}

  return (
    <div id="app">
      <aside>
        <strong>Busca</strong>
        <UserSearch onSubmit={handleAddUser} />
      </aside>
      <main>
        <ul>
          {users.map( user => (
           <UserItem
            key={user.name}
            user={user}
           />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;




  // useEffect(()=>{
    // async function loadUser(){
      // const response = await api.get(`/users/`);

      // setUsers(response.data);
      // console.log(response)
  //   }

  //   loadUser();
  // },[])