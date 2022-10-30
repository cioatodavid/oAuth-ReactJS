import React from 'react';

const Login = () => {

  const googleLogin = () => {
    window.open('http://localhost:5000/auth/google', '_self');
  };


  return (
    <div className='shadow-2xl w-[900px] p-20 mt-32  mx-auto rounded-lg'>
      <div className="flex flex-row gap-10 items-center justify-center ">

        <div className='flex w-72 flex-col gap-4'>
          <button className='bg-neutral-400 hover:bg-neutral-500 duration-200 text-white p-2 rounded-lg'>GitHub</button>
          <button className='bg-blue-400 hover:bg-blue-500 duration-200 text-white p-2 rounded-lg'>Facebook</button>
          <button onClick={googleLogin} className='bg-red-400 hover:bg-red-500 duration-200 text-white p-2 rounded-lg'>Google</button>
        </div>

        <div className='border-r-2 border-separate border-indigo-100 h-40'></div>

        <div className='flex w-72 flex-col gap-4'>
          <input type='Email' placeholder='Email' className='border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent' />
          <input type='password' placeholder='Password' className='border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent' />
          <button className='bg-indigo-400 hover:bg-indigo-500 duration-200 text-white p-2 rounded-lg'>Login</button>
        </div>

      </div>
    </div>
  );
}

export default Login;
