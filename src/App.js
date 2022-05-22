import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Common/Header/Header';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='home' element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
