import React from 'react'
import { Link } from 'react-router-dom'

function navbar() {
  return (
    <div>
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="text-white text-lg">My App</div>
       
          <Link to="/adduser" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add User
          </Link>
        
      </nav>
    </div>
  )
}

export default navbar