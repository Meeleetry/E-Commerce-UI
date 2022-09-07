import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';
import {ToastContainer} from 'react-toastify';

function App() {
  return ( 
  <div className="App">
    <Router>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route exact path='/cart' element={<Cart/>} />
        <Route path='/not-found' element={<NotFound/>} />
        <Route exact path='/'element={<Home/>} />
        <Route path='/' element={<Navigate replace to="/not-found" />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
