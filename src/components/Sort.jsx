import { React, useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSort, setOrder } from "../redux/slices/filterSlice";

function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);
  const sortRef = useRef();

  const [activeSort, setActiveSort] = useState(false);
  const list = [
    { name: "популярности", sortProperty: "rating" },
    { name: "цене", sortProperty: "price" },
    { name: "алфавиту", sortProperty: "title" },
  ];

  const onClickSortItem = (obj) => {
    dispatch(setSort(obj));
    setActiveSort(false);
  };

  const onClickOrderType = (obj) => {
    dispatch(setOrder(obj));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.path.includes(sortRef.current)) {
        setActiveSort(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <div>
          <button onClick={() => onClickOrderType("asc")}> ↑ </button>
          <button onClick={() => onClickOrderType("desc")}> ↓ </button>
        </div>
        <b>Сортировка по:</b>
        <span onClick={() => setActiveSort(!activeSort)}>{sort.name}</span>
      </div>
      {activeSort && (
        <div className="sort__popup">
          <ul>
            {list.map((obj, index) => (
              <li
                key={index}
                onClick={() => {
                  onClickSortItem(obj);
                }}
                className={
                  sort.sortProperty === obj.sortProperty ? "active" : ""
                }
              >
                {" "}
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
