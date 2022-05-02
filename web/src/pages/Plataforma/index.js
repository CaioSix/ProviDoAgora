import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import '../../global.css';
import './styles.css';
import '../../Main.css';
import '../../Sidebar.css';
import UserItem from '../../components/UserItem'
import UserForm from '../../components/UserForm'



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
          <Header />
      <aside>
        <h3>Cadastro</h3>
        <UserForm onSubmit={handleAddUser} />
      </aside>
      {/* <main>
        <ul>
          {users.map( user => (
           <UserItem
            key={user.name}
            user={user}
           />
          ))}
        </ul>
      </main> */}
    </div>
  );
}

export default App;
