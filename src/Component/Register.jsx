import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const RegisterForm = () => {
   const [name, setName] = useState();
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const navigate = useNavigate()

   const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:5000/register',{name, email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
    navigate('/login')
    alert("register successful")


   }
   
   return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold text-center mb-2 text-black">Register</h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          Kindly fill in this form to register.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
       
          <div>
            <label htmlFor="name" className="block text-black mb-1">Name</label>
            <input
              type="text"
              name='name'
              id="name"
              placeholder="Enter name"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400 text-black"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

 
          <div>
            <label htmlFor="email" className="block text-black mb-1">Email</label>
            <input
              type="email"
              id="email"
              name='email'
              placeholder="Enter email"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500  text-black placeholder-gray-400"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

        
          <div>
            <label htmlFor="password" className="block text-black mb-1">Password</label>
            <input
              type="password"
              id="password"
              name='password'
              placeholder="Enter password"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500  text-black placeholder-gray-400"
              onChange={(e) =>setPassword(e.target.value)}
            />
          </div>

        
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition duration-200"
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account? <Link to='/login' href="#" className="text-purple-600 underline">Log in.</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
