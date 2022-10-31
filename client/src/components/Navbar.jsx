import { Link } from 'react-router-dom'

const Navbar = ({ user }) => {

  const logout = () => {
    window.open('http://localhost:5000/auth/logout', '_self');
  };

  return (
    <div className="flex flex-row shadow-md bg-white  text-neutral-900 py-3 px-10 items-center justify-between">
      <div className="flex flex-row items-center">
        <h1 className="text-2xl font-bold">NAVBAR</h1>
      </div>


      {user ? (
        <div className="flex flex-row items-center">

          <h1 className='text-lg font-semibold'>
            Bem vindo, {user.name}
          </h1>


          <div className=" ml-4 border-2 p-0.5 border-indigo-500 rounded-full" >
            <img
              className="w-8 h-8 rounded-full  cursor-pointer"
              src={user.avatar}
              alt="profile"
              referrerPolicy='no-referrer'
            />
          </div>

          <Link to="/post/new">
            <button className="bg-lime-500 text-white p-2 ml-4 rounded">
              New Post
            </button>
          </Link>
          
            <button onClick={logout} className="bg-red-500 text-white p-2 ml-4 rounded">Logout</button>

        </div>
      )
        :
        (
          <div className="flex flex-row items-center">
            <Link to='/login'>
              <button className="bg-indigo-500 px-4 py-1.5 rounded text-white mr-2 hover:bg-indigo-700 duration-200">
                Login
              </button>
            </Link>
          </div>
        )
      }
    </div>
  );
}

export default Navbar;
