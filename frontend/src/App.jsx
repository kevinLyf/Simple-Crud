import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Global } from './styles/global';
import Header from './components/Header';
import Create from './pages/Create';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
      </Routes>
      <Global />
      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        pauseOnHover={false}
        theme='dark'
      />
    </BrowserRouter>
  );
}

export default App;
