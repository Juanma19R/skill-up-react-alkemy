// Libraries
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Login from './components/Login';
import List from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';

// Styles
import './css/bootstrap.min.css';

function App() {
  return (
    <div className='container mt-3'>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/list" element={<List />}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;