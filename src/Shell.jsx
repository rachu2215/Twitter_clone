import React from "react";
import { useState } from "react";
import Home from "./Pages/Home";
import NavBar from "./components/NavBar";
import "./App.css";
import About from "./Pages/About";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Singletweet from "./Pages/Singletweet";
import CreateComment from "./Pages/CreateComment";

const Shell = () => {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tweet/:id" element={<Singletweet />} />
          <Route path="/tweet/:id/:cmnt" element={<CreateComment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Shell;
