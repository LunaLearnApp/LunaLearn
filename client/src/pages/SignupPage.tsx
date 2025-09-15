import { FcGoogle } from 'react-icons/fc';
import {FaApple} from 'react-icons/fa';

const SignupPage = () => {
  
  return (
    <section className="py-16 bg-white">
      <div className="flex items-center justify-center container p-10 mx-auto px-4">
        
        <div className="flex items-center justify-center overflow-hidden w-[40vw] h-[120vh] bg-gradient-to-r from-pink-200 to-blue-200 rounded-3xl p-2 md:p-2">    

          <div className="max-w-3xl mx-auto">
            <h2 className="font-fredoka text-6xl mb-6 text-primary text-center">Sign Up</h2>
            
            <div className="bg-white/90 w-[30vw] h-[100vh] rounded-2xl p-6 mb-8">
              <p className="text-center p-4 text-gray-700 mb-4">
                    Welcome Please enter your credentials to create your account. If you do have an account, you can 
                    <a href="/login" className="text-primary hover:underline"> log in here</a>.
              </p>

              <form className="space-y-4 p-2" method="POST" action="/login">
                <div>
                    <label htmlFor="email" className="block text-1xl font-medium text-primary">Email</label>
                    <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-primary/60 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                </div>
                <div>
                    <label htmlFor="password" className="block text-1xl font-medium text-primary">Password</label>
                    <input type="password" id="password" name="password" required className="mt-1 block w-full px-3 py-2 border border-primary/60 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                </div>
                <div>
                    <label htmlFor="confirmPassword" className="block text-1xl font-medium text-primary">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required className="mt-1 block w-full px-3 py-2 border border-primary/60 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                </div>

                <div className="justify-center items-center w-full px-4 md:px-0">

                  <button type="submit" className="w-[100%] bg-primary text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
                    <span className="ml-2">Sign Up</span>
                  </button>
        
                  <br/><br/>
                  <hr/><br/>

                  <button type="submit" className="w-[100%] bg-white text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-100 transition duration-200 flex items-center justify-center border"> <FcGoogle className="w-6 h-6" /><span className="ml-2">Sign Up with Google</span>
                  </button>                    

                  <br/>

                  <button type="submit" className="w-[100%] bg-black text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-800 transition duration-200 flex items-center justify-center"><FaApple className="w-6 h-6" /><span className="ml-2">Sign Up with Apple</span>
                  </button>

                </div>
              
              </form>

               

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;