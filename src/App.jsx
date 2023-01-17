import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/Register/Registar-se';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/registrar' element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
