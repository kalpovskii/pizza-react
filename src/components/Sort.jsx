import { React, useState } from "react";

function Sort({value, onClickSort, type, onClickOrderType}) {
  const [activeSort, setActiveSort] = useState(false);
  const list = [
      { name: 'популярности', sortProperty: 'rating' },
      { name: 'цене', sortProperty: 'price' },
      { name: 'алфавиту', sortProperty: 'title' },
  ];

  const onClickSortItem = (index) => {
    onClickSort(index);
    setActiveSort(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <div>
           <button onClick={() => onClickOrderType('asc')}> ↑ </button>
           <button onClick={() => onClickOrderType('desc')}> ↓ </button>
        </div>
        <b>Сортировка по:</b>
        <span onClick={() => setActiveSort(!activeSort)}>{value.name}</span>
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
                className={value.sortProperty === obj.sortProperty ? "active" : ""}
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
