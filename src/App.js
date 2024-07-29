import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';
import UserForm from './components/crud_operation/UserForm';
import UserList from './components/crud_operation/UserList';
import { useState } from 'react';

function App() {

  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const editUser = (user) => {
    setCurrentUser(user);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    setCurrentUser(null);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1>CRUD Application</h1>
      <UserForm currentUser={currentUser} addUser={addUser} updateUser={updateUser} />
      <UserList users={users} editUser={editUser} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
