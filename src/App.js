import "./scss/app.scss";
import {React, useState, useEffect, createContext} from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

export const SearchContext = createContext();

function App() {
   const [searchValue, setSearchValue] = useState('');

   return (
    <div className="wrapper">
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
         <Header />
         <div className="content">
            <Routes>
               <Route path="/" element={<Home/>}></Route>
               <Route path="/cart" element={<Cart />}></Route>
               <Route path="*" element={<NotFound />}></Route>
            </Routes>
         </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
