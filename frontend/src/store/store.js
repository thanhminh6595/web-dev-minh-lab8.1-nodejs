import { configureStore, createSlice } from "@reduxjs/toolkit";

const editProductSlice = createSlice({
  name: "editProduct",
  initialState: { editing: false },
  reducers: {
    editProduct(state) {
      return { ...state, editing: !state.editing };
    },
  },
});

export const editProductActions = editProductSlice.actions;

const store = configureStore({ reducer: editProductSlice.reducer });

export default store;
