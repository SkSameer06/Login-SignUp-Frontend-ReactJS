import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>

          <Route exact path="/" element={<SignUp />}></Route>
          <Route exact path="/login" element={<Login />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;