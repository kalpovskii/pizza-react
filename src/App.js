import "./scss/app.scss";
import {React, useState, useEffect} from "react";
import Header from "./components/Header.jsx";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import Pizza_block from "./components/Pizza_block";

function App() {
   const [items, setItems] = useState([]);

   useEffect(() => {
      fetch('https://634014c0e44b83bc73c878f9.mockapi.io/items')
          .then((res) => {
             return res.json();
          })
          .then((arr) => {
             setItems(arr);
          })
   }, []);


   return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            {items.map((obj) => (
              <Pizza_block key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
