import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Post from "./pages/Post";
import axios from 'axios';
import react from 'react';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {

  const [user, setUser] = react.useState(null);
  const [logged , setLogged] = react.useState(false);

  react.useEffect(() => {
    axios.get('http://localhost:5000/auth/login/success', { withCredentials: true })
      .then(res => {
        if (res.status === 200) {
          setUser(res.data.user);
          setLogged(true);
          console.log(res.data.user);
        } else {
          setUser(null);
          setLogged(false);
          console.log('User not logged in');
        }
      })
      .catch(err => {
        setUser(null);
        setLogged(false);
        console.log(err);
      })
  }, []);


  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={user ? <Navigate to='/' /> : <Login />} />
          <Route path="/post/:id" element={user ? <Post /> : <Navigate to='/login' />} />
        </Routes>
      </div>
    </BrowserRouter>
  );

}

export default App;
