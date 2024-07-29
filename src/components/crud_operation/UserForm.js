import React, { useState, useEffect } from 'react';

const UserForm = ({ currentUser, addUser, updateUser }) => {
    const [user, setUser] = useState({ id: null, name: '', email: '' });

    useEffect(() => {
        if (currentUser) {
            setUser(currentUser);
        }
    }, [currentUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.id === null) {
            addUser(user);
        } else {
            updateUser(user);
        }
        setUser({ id: null, name: '', email: '' });
    };

    return (
        <div>
            <h2 style={{marginTop:"60px"}}>{user.id ? 'Edit User' : 'Add User'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={user.name}
                    onChange={handleChange}
                    required
                    style={{
                        marginBottom: "20px",
                        width: "30%",
                        borderRadius: "10px",
                        fontSize: "14px"
                    }}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                    required
                    style={{
                        marginBottom: "20px",
                        width: "30%",
                        borderRadius: "10px",
                        fontSize: "14px"
                    }}
                />
                <button type="submit">{user.id ? 'Update' : 'Add'}</button>
            </form>
        </div>
    );
};

export default UserForm;