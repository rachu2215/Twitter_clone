import React from "react";
import { useState } from "react";
import Home from "./Pages/Home";
import NavBar from "./components/NavBar";
import "./App.css";
import About from "./Pages/About";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Singletweet from "./Pages/Singletweet";

const Shell = () => {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tweet/:id" element={<Singletweet />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Shell;
