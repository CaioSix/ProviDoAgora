import React, { useState, useEffect } from 'react';
import api from './services/api'

import './global.css';
import './App.css';
import './Main.css';
import './Sidebar.css';
import UserItem from './components/Usertem'
import UserForm from './components/UserForm'



function App() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    async function loadUser(){
      const response = await api.get('/users');

      setUsers(response.data);
    }

    loadUser();
  },[])

async function handleAddUser(data){
 const response = await api.post('/users', data)
 setUsers([...users, response.data]);
}

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <UserForm onSubmit={handleAddUser} />
      </aside>
      <main>
        <ul>
          {users.map( user => (
           <UserItem
            key={user.name}
            dev={user}
           />
          ))}
         
        
        </ul>
      </main>
    </div>
  );
}

export default App;
