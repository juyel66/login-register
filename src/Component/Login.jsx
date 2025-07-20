import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const handleLogin = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:5000/login', {email, password})
        .then(result => {
            console.log(result)
            if(result.data === "Success"){
                navigate("/")
                alert("login Success")
            }
        })
        
        .catch(err => console.log(err))


        
    }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2 text-black">Login</h2>
        <p className="text-center text-sm text-gray-500 mb-6">Welcome back! Please enter your credentials.</p>

        <form onSubmit={handleLogin} className="space-y-4">
        
          <div>
            <label className="block mb-1 text-black font-medium">Email</label>
            <input
              type="email"
              name='email'
              placeholder="Enter your email"
              className="w-full  px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-black"
              onChange={(e) => setEmail(e.target.value) }
              required
            />
          </div>

 
          <div>
            <label className="block mb-1 text-black font-medium">Password</label>
            <input
              type="password"
              name='password'
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-black"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

       
          <button
            type="submit"
            className="w-full bg-purple-600 cursor-pointer text-white py-2 rounded  transition duration-200"
          >
            Login
          </button>
        </form>
         <div className="text-center mt-4">
        <span className="text-gray-500">Don't have an account?</span>
        <Link
          to="/register"
          className="ml-2 text-blue-500 hover:underline font-medium"
        >
          Register
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Login;
