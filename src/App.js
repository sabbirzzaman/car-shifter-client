import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Common/Footer/Footer';
import Header from './Pages/Common/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ForgetPassword from './Pages/Login/ForgetPassword/ForgetPassword';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import './App.css';

function App() {
  const [,loading] = useAuthState(auth);

  if(loading) {
    return ''
  }

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='forget-password' element={<ForgetPassword />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
