import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
function EditUser() {
  const [user, setuser] = useState({
    name: '',
    username: '',
    email: ''
  })
  const { name, username, email } = user


  const{id} = useParams();

  const loadUsers = async()=>{
    const result = await axios.get(`http://localhost:8080/user/${id}`)
    setuser(result.data);
  }

  useEffect(()=>{ loadUsers(); },[]);


  const onInputChange = e => {
    setuser({ ...user, [e.target.name]: e.target.value })
    console.log(e.target.name, e.target.value)
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    window.location = '/';
  }


  return (
   <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Edit User</h2>
        <form onSubmit={e => onSubmit(e)}> 
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={e => onInputChange(e)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={e => onInputChange(e)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your e-mail address"
              value={email}
              onChange={e => onInputChange(e)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full m-4 py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
            Submit
          </button>
          </form>
          <button
            type="cancel"
            className="w-full m-4 py-2 px-4 text-red-500 border-red-400 font-medium rounded-md hover:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            onClick={() => window.location = '/'}
            >
            Cancel
          </button>
      </div>
    </div>

  )
}

export default EditUser; 