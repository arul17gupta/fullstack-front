import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';



function Home() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const { id } = useParams();

    const loadUsers = async () => {

        const result = await axios.get('http://localhost:8080/users')
        setUsers(result.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/user/${id}`);
        loadUsers();
    }

    return (


        <div className="container mx-auto p-4">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="w-full bg-gray-200 text-left">
                        <th className="py-2 px-4 border-b">S.No:</th>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Username</th>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">{index + 1}</td>
                                <td className="py-2 px-4 border-b">{user.name}</td>
                                <td className="py-2 px-4 border-b">{user.username}</td>
                                <td className="py-2 px-4 border-b">{user.email}</td>
                                <td className="py-2 px-4 border-b"></td>
                                <Link
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mx-2"
                                    to={`/viewuser/${user.id}`}
                                >
                                    View
                                </Link>
                                <Link
                                    className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white mx-2"
                                    to={`/edituser/${user.id}`}
                                >
                                    Edit
                                </Link>
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mx-2"
                                    onClick={() => deleteUser(user.id)}
                                >
                                    Delete
                                </button>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home