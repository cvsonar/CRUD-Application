import { Button } from 'bootstrap';
import React from 'react';

const UserList = ({ users, editUser, deleteUser }) => {
    return (
        <div>
            <h2>User List</h2>
            <div className='container'>
                {users.map((user) => (
                    <table key={user.id} align="center" cellpadding="15" cellspacing="0" bordercolor="green" border="1">
                        <tr>
                            <th>name</th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><button onClick={() => editUser(user)}>Edit</button></td>
                            <td><button onClick={() => deleteUser(user.id)}>Delete</button></td>
                        </tr>
                    </table>
                ))}
            </div>
        </div>
    );
};

export default UserList;