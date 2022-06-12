import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
function Users(){

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUsers(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])
if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
            <h2>Lista de usuarios</h2>
            <ul>
                {users.map(user => (
                <li className='listaUsers'>
                    <Link to={`/UserDetail/${user.id}`}>{user.name}</Link>
                </li>
                ))}
            </ul>
            </div>
        );
        
    }
    
}

export default Users;