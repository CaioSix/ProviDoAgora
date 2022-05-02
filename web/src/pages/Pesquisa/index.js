import './styles.css';

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import UserItem from '../../components/UserItem'
import UserSearch from '../../components/UserSearch'
import React, { useState } from 'react';
import api from '../../services/api'

function App() {
  const [users, setUsers] = useState([]);
async function handleAddUser(data){
 const response = await api.get(`/users/${data.destination}`)
 setUsers(response.data);
 console.log(response)

}

return (
  <main>
          <Header />
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
          {/* <Footer />           */}
  </main>
  );
}

export default App;



