import React from 'react';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import CardsPage from './CardsPage/CardsPade';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/catalog" element={<CardsPage />} />
      </Routes>
      
      </BrowserRouter>
      



    </div>
  );
}

export default App;
