import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   pageCount: 1,
   categoryId: 0,
   sort: {
      name: 'популярности',
      sortProperty: 'rating',
      orderType: 'asc'
   },
}

const filterSlice = createSlice({
   name: 'filters',
   initialState,
   reducers: {
      setCategoryId(state, action) {
         state.categoryId = action.payload;
      },
      setSort(state, action) {
         state.sort = action.payload;
      },
      setOrder(state, action) {
         state.sort.orderType = action.payload;
      },
      setPageCount(state, action) {
         state.pageCount = action.payload;
      }
   }
});

export const { setCategoryId, setSort, setOrder, setPageCount } = filterSlice.actions;

export default filterSlice.reducer;