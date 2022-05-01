import './styles.css';
import '../../Main.css';
import '../../Sidebar.css';
import UserItem from '../../components/UserItem'
import UserSearch from '../../components/UserSearch'
import React, { useState, useEffect } from 'react';
import api from '../../services/api'

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
<main>
  <section className='section-campo-pesquisa'>      
      <h1 className='texto-pesquisa'>Encontre um parceiro para a sua viagem de bike</h1>
      <UserSearch onSubmit={handleAddUser}/>
  </section>
  <section>
        <ul>
          {users.map( user => (
           <UserItem
            key={user.name}
            user={user}
           />
          ))}
        </ul>
  </section>
</main>
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