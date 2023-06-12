import React from 'react';

import './App.css';
import NavBar from './ui/NavBar';
import {BrowserRouter} from "react-router-dom";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <TodoList/>
    </BrowserRouter>
    </>
  );
}

export default App;
