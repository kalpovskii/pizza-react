import React, { useContext, useState, useCallback } from "react";
import debounce from "lodash.debounce";
import styles from "./Search.module.scss";
import { SearchContext } from "../../App";

const Search = () => {
  const [value, setValue] = useState("");
  const { setSearchValue } = useContext(SearchContext);

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 350),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <input
      value={value}
      onChange={onChangeInput}
      className={styles.input}
      placeholder="Поиск пиццы"
    />
  );
};

export default Search;
