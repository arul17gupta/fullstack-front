import React, { useEffect, useState } from 'react'
import axios from 'axios'



function Home() {

const[users,setUsers] = useState([]);

useEffect(()=>{
    loadUsers();
},[]);

const loadUsers = async()=>{

    const result = await axios.get('http://localhost:8080/users')
setUsers(result.data);
}

return (

    
    <div className="container mx-auto p-4">
        <table className="min-w-full bg-white border border-gray-200">
            <thead>
                <tr className="w-full bg-gray-200 text-left">
                    <th className="py-2 px-4 border-b">#</th>
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
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">View</button>
                        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2">Edit</button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
)
}

export default Home