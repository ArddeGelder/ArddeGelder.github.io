import React from 'react';
import './App.css';
import Layout from './pages/Layout';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Blogs from './pages/Blogs';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TicTacToe from './pages/TicTacToe/Game';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="tictactoe" element={<TicTacToe />} />
          <Route path="*" element={<NoPage />} />          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
