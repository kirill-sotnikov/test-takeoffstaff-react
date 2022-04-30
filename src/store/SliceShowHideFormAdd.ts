import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
interface IinitialState {
  value: boolean;
}

const initialState: IinitialState = {
  value: false,
};

export const SliceShowHideFormAdd = createSlice({
  name: "SliceShowHideFormAdd",
  initialState,
  reducers: {
    show(state) {
      state.value = true;
    },
    hide(state) {
      state.value = false;
    },
  },
});

export const { show, hide } = SliceShowHideFormAdd.actions;
export const selectCount = (state: RootState) => state.showHideFormAdd.value;

export default SliceShowHideFormAdd.reducer;
