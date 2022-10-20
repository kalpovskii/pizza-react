import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import Pizza_block from "../components/PizzaBlock";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setPageCount } from "../redux/slices/filterSlice";

const Home = () => {
   const dispatch = useDispatch();
   const categoryId = useSelector((state) => state.filter.categoryId);
   const sortType = useSelector((state) => state.filter.sort.sortProperty);
   const orderType = useSelector((state) => state.filter.sort.orderType);
   const pageCount = useSelector((state) => state.filter.pageCount);


  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const onChangeCategory = (id) => {
     dispatch(setCategoryId(id));
  }

  const onChangePage = number => {
     dispatch(setPageCount(number));
  }

  const search = searchValue ? `&search=${searchValue}` : "";

  useEffect(() => {
    setIsLoading(true);
    // fetch(
    //   `https://634014c0e44b83bc73c878f9.mockapi.io/items?page=${currentPage}&limit=4&${
    //     categoryId > 0 ? `category=${categoryId}` : ""
    //   }&sortBy=${sortType}&order=${orderType}${search}`
    // )
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((arr) => {
    //     setItems(arr);
    //     setIsLoading(false);
    //   });

     axios.get(`https://634014c0e44b83bc73c878f9.mockapi.io/items?page=${pageCount}&limit=4&${
         categoryId > 0 ? `category=${categoryId}` : ""
     }&sortBy=${sortType}&order=${orderType}${search}`).then(res => {
        setItems(res.data);
        setIsLoading(false);
     });


  }, [categoryId, sortType, orderType, searchValue, pageCount]);

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
      <Pagination value={pageCount} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
