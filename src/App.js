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
import RequiredAuth from './Pages/Login/RequiredAuth/RequiredAuth';
import Purchase from './Pages/Purchase/Purchase/Purchase';
import Loader from './Pages/Common/Loader/Loader';

function App() {
    const [, loading] = useAuthState(auth);

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="home" element={<Home />}></Route>
                <Route
                    path="purchase/:id"
                    element={
                        <RequiredAuth>
                            <Purchase />
                        </RequiredAuth>
                    }
                ></Route>
                <Route path="login" element={<Login />}></Route>
                <Route path="register" element={<Register />}></Route>
                <Route  path="forget-password" element={<ForgetPassword />}></Route>
            </Routes>
            <Footer></Footer>
        </>
    );
}

export default App;
