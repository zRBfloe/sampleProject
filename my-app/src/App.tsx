import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Navbar } from "./components/Navbar";
import Login from "./pages/Login/Login";
import { Recipe } from "./pages/Recipe";
import Ingridients from "./pages/Ingridients/Ingridients";

export function App() {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/ingridients" element={<Ingridients />} />
          <Route path="/recipe" element={<Recipe />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
