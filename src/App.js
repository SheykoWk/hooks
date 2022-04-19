import { useContext } from 'react';
import './App.css';
import Texto from './Components/Texto'
import UsersList from './Components/UsersList';
import { UsersContext } from './context/UsersContext';

// useContext 

function App() {

  const userDef = {
    name: 'Sahid',
    age: 21,
    country: 'MEX'
  }

  const [users, addUser] = useContext(UsersContext)  

  return (
    <div className='App'>
      <header className="App-header">
        <button onClick={() => addUser(userDef)}>Agregar usuario</button>
        <UsersList />
        <Texto />
      </header>
    </div>
  );
}

export default App;



