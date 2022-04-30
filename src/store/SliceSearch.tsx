import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IinitialState {
  value: string;
}

const initialState: IinitialState = {
  value: "",
};

export const SliceSearch = createSlice({
  name: "SliceSearch",
  initialState,
  reducers: {
    changeSearch(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { changeSearch } = SliceSearch.actions;

export default SliceSearch.reducer;
