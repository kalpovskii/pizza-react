import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import Pizza_block from "../components/PizzaBlock";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [orderType, setOrderType] = useState("asc");
  const [sortType, setSortType] = useState({
    name: "популярности",
    sortProperty: "rating",
  });
  console.log(orderType);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://634014c0e44b83bc73c878f9.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortType.sortProperty}&order=${orderType}`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [categoryId, sortType, orderType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(id) => setCategoryId(id)}
        />
        <Sort
          value={sortType}
          onClickSort={(id) => setSortType(id)}
          type={orderType}
          onClickOrderType={(id) => setOrderType(id)}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <Pizza_block key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
