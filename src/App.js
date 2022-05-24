import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Common/Footer/Footer';
import Header from './Pages/Common/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ForgetPassword from './Pages/Login/ForgetPassword/ForgetPassword';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import RequiredAuth from './Pages/Login/RequiredAuth/RequiredAuth';
import Purchase from './Pages/Purchase/Purchase/Purchase';
import Loader from './Pages/Common/Loader/Loader';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import './App.css';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import AddAReview from './Pages/Dashboard/AddAReview/AddAReview';
import Payment from './Pages/Payment/Payment/Payment';
import { Toaster } from 'react-hot-toast';
import ReviewForm from './Pages/Dashboard/ReviewForm/ReviewForm';

function App() {
    const [, loading] = useAuthState(auth);

    if (loading) {
        return <Loader></Loader>;
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
                <Route path="dashboard" element={<Dashboard />}>
                    <Route index element={<MyOrders />}></Route>
                    <Route path="my-orders" element={<MyOrders />}></Route>
                    <Route path="add-a-review" element={<AddAReview />}></Route>
                    <Route path="add-a-review/:id" element={<ReviewForm />}></Route>
                    <Route path="my-profile" element={<MyProfile />}></Route>
                </Route>
                <Route path="payment/:id" element={<Payment />}></Route>
                <Route path="login" element={<Login />}></Route>
                <Route path="register" element={<Register />}></Route>
                <Route
                    path="forget-password"
                    element={<ForgetPassword />}
                ></Route>
            </Routes>
            <Footer></Footer>
            <Toaster position="top-right" reverseOrder={false} />
        </>
    );
}

export default App;
