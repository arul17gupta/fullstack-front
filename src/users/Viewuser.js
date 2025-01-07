import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container mx-auto">
    <div className="flex justify-center">
      <div className="w-full md:w-1/2 border rounded-lg p-6 mt-4 shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">User Details</h2>
  
        <div className="card bg-white rounded-lg shadow">
          <div className="card-header border-b p-4">
            <p className="text-lg font-medium">Details of user id: {user.id}</p>
            <ul className="list-none mt-4">
              <li className="py-2 border-b">
                <span className="font-bold">Name:</span> {user.name}
              </li>
              <li className="py-2 border-b">
                <span className="font-bold">Username:</span> {user.username}
              </li>
              <li className="py-2">
                <span className="font-bold">Email:</span> {user.email}
              </li>
            </ul>
          </div>
        </div>
        <Link
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 block text-center mt-4"
          to={"/"}
        >
          Back to Home
        </Link>
      </div>
    </div>
  </div>
  
  );
}