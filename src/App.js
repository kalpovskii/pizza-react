import "./scss/app.scss";
import { React, useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom";

import Header from "./components/Header.jsx";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">

            <Routes>
               <Route path="/" element={<Home />}></Route>
               <Route path="/cart" element={<Cart />}></Route>
               <Route path="*" element={<NotFound />}></Route>
            </Routes>
      </div>
    </div>
  );
}

export default App;
