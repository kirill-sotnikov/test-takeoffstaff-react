import { configureStore } from "@reduxjs/toolkit";
import SliceContactsReducer from "./SliceContacts";
import SliceSearchReducer from "./SliceSearch";
import SliceShowHideFormAddReducer from "./SliceShowHideFormAdd";
export const store = configureStore({
  reducer: {
    showHideFormAdd: SliceShowHideFormAddReducer,
    contacts: SliceContactsReducer,
    search: SliceSearchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
