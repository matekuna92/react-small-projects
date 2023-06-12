import React from 'react';

import './App.css';
import NavBar from './ui/NavBar';
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
    </>
  );
}

export default App;
