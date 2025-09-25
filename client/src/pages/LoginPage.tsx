import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import {FaApple} from 'react-icons/fa';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
    } catch (err) {
      setError('Invalid email or password.');
    }
  };

  return (
    <section className="h-[100vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 relative overflow-hidden bg-gradient-to-r from-pink-200 to-blue-200 p-6">
        <div className='bg-primary/60 text-white font-bold py-3 px-6 rounded-2xl shadow hover:shadow-lg transition-transform transform hover:-translate-y-1 z-10'>
            <h2 className="font-fredoka text-4xl mb-6 text-white font-bold text-center">Login</h2>

            <p className="text-center p-4 text-gray-700 mb-4">
                    Welcome back! Please enter your credentials to access your account. If you don't have an account yet, you can 
                    <a href="/signup" className="text-white hover:underline"> sign up here</a>.
                </p>

            <form onSubmit={handleSubmit} className='py-5'>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="form-control mt-1 block w-full px-3 py-2 text-white rounded-md shadow-sm focus:outline-none focus:border-blue-500 sm:text-sm"/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required className="form-control mt-1 block w-full px-3 py-2 text-white shadow-sm focus:outline-none focus:border-blue-500 sm:text-sm" />
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>

            <div className="justify-center items-center w-full px-4 md:px-0">

                <button type="submit" className="w-[100%] bg-primary text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 flex items-center justify-center"><span className="ml-2">Log In</span>
                </button>
                      
                <br/><hr/><br/>

                <button type="submit" className="w-[100%] bg-white text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-100 transition duration-200 flex items-center justify-center border"> <FcGoogle className="w-6 h-6" /><span className="ml-2">Sign in with Google</span>
                </button>                    
                      
                <br/>

                <button type="submit" className="w-[100%] bg-black text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-800 transition duration-200 flex items-center justify-center"><FaApple className="w-6 h-6" /><span className="ml-2">Sign in with Apple</span>
                </button>
            </div>
                    
            <p className="text-gray-700 mt-2 text-sm text-center py-5">
                If you have forgotten your password, you can reset it by clicking
                <a href="/reset-password" className="text-white hover:underline"> here</a>.
            </p>

        </div>
        
        <div className="container mx-auto flex items-center gap-12 px-6">
            <div className="flex-1 z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-5 leading-tight bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">
                Discover the Joy of Learning with AI-Powered Games for Kids.
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg font-semibold">
                Engage your child in fun, adaptive learning games that build skills in math, reading, science, and more.
            </p>
            <div className="flex gap-5">
                <a href='/' className="bg-primary text-white font-bold py-3 px-6 rounded-full shadow hover:shadow-lg transition-transform transform hover:-translate-y-1">
                Try for Free
                </a>
            </div>
            </div>
        <div className="relative z-0 text-center">
          <div className="absolute top-[-10px] left-[-700px] w-[500px] h-[500px] bg-primary opacity-30 rounded-full"></div>
          <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-purple-400 opacity-30 rounded-full"></div>
          <div className="absolute bottom-[-150px] left-[-150px] w-[500px] h-[500px] bg-blue-400 opacity-30 rounded-full"></div>
        
          <div className="absolute top-10 left-[-15rem] text-purple text-2xl">✦</div>
          <div className="absolute top-[-5rem] left-[-45rem] text-secondary text-xl">✦</div>
          <div className="absolute bottom-60 right-[20rem] text-primary text-2xl">✦</div>

          <div className="absolute top-[15rem] left-[25rem] text-primary text-3xl">✦</div>
          <div className="absolute top-[15rem] right-[70rem] text-secondary text-xl">✦</div>
          <div className="absolute bottom-60 left-[-50rem] text-purple text-2xl">✦</div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;