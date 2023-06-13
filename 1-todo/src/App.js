import React from 'react';

import './App.css';
import NavBar from './ui/NavBar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import TodoList from "./components/TodoList";
import CompletedTodos from "./components/CompletedTodos";

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <main>
          <Routes>
            <Route path='/' element={<TodoList />} />
            <Route path='/completed' element={<CompletedTodos />} />
          </Routes>
      </main>
    </BrowserRouter>
    </>
  );
}

export default App;
