import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardsPage from './CardsPage/CardsPade';
import MemPage from './MemPage/MemPage';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/catalog" element={<CardsPage />} />
        <Route path="/item" element={<MemPage />} />
      </Routes>
      
      </BrowserRouter>
      



    </div>
  );
}

export default App;
