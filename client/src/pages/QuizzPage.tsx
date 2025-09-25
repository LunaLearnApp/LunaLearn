import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Quizz = () => {
  
  return (
    <>
        <Header />
        <section className="py-16 bg-white">
            <div className="container p-10 mx-auto px-4">
                
                <div className="bg-gradient-to-r from-pink-200 to-blue-200 rounded-3xl p-8 md:p-12">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-fredoka text-6xl mb-6 text-primary text-center">Take the Quizz</h2>
                    <div className="bg-white/90 rounded-2xl p-6 mb-8">
                        <p className="text-center p-4 text-gray-700 mb-4">
                            Welcome back! Please enter your credentials to access your account. If you don't have an account yet, you can 
                            <a href="/signup" className="text-primary hover:underline"> sign up here</a>.
                        </p>

                        <form className="space-y-4 p-4" method="POST" action="/dashboard">
                            <div>
                                <label htmlFor="email" className="block text-1xl font-medium text-primary">Email</label>
                                <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-primary/60 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-1xl font-medium text-primary">Password</label>
                                <input type="password" id="password" name="password" required className="mt-1 block w-full px-3 py-2 border border-primary/60 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                            </div>
                            <button type="submit" className="w-full bg-primary text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">Log In</button>
                        </form>

                        <p className="text-gray-700 p-4 mt-4 text-sm text-right">
                            If you have forgotten your password, you can reset it by clicking
                            <a href="/reset-password" className="text-primary hover:underline"> here</a>.
                        </p>
                    </div>
                    
                </div>
                </div>
            </div>
        </section>
        <Footer />
    </>    
  );
};

export default Quizz;