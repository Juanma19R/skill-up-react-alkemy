import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import List from './components/List';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/list" element={<List />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;