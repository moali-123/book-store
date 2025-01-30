import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "mainLoader",
  initialState: {
    categories: localStorage.getItem("categoriesItems")
      ? JSON.parse(localStorage.getItem("categoriesItems"))
      : [],
  },
  reducers: {
    setAllCategories: (state, action) => {
      console.log("test", action);

      state.categories = action?.payload;
      localStorage?.setItem(
        "categoriesItems",
        JSON?.stringify(action?.payload)
      );
    },
  },
});

export const { setAllCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
