import React, { useContext, useEffect, useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import Pizza_block from "../components/PizzaBlock";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";

const Home = () => {
   const dispatch = useDispatch();
   const categoryId = useSelector((state) => state.filter.categoryId);
   const sortType = useSelector((state) => state.filter.sort.sortProperty);
   const orderType = useSelector((state) => state.filter.sort.orderType);


  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);


  const onChangeCategory = (id) => {
     dispatch(setCategoryId(id));
  }

  const search = searchValue ? `&search=${searchValue}` : "";

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://634014c0e44b83bc73c878f9.mockapi.io/items?page=${currentPage}&limit=4&${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortType}&order=${orderType}${search}`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [categoryId, sortType, orderType, searchValue, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={onChangeCategory}
        />
        <Sort  />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <Pizza_block key={obj.id} {...obj} />)}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;
