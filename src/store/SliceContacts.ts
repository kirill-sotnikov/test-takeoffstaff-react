import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Contact {
  name: string;
  phone: string;
  id: number | string;
}

interface IinitialState {
  value: Contact[];
}

const initialState: IinitialState = {
  value: [
    { name: "Philip Voronin", phone: "8 911 881 99 00", id: 1 },
    { name: "Andreev Valeriy Anatolievich", phone: "8 917 891 88 00", id: 2 },
  ],
};

function changeContactInValue(state: Contact[], user: Contact): Contact[] {
  const preList = [];
  const postList = [];
  let flag = false;
  let middleValue;
  for (let i of state) {
    if (i.id === user.id) {
      middleValue = { name: user.name, phone: user.phone, id: user.id };
      flag = true;
      continue;
    }
    if (!flag) {
      preList.push(i);
    } else if (flag) {
      postList.push(i);
    }
  }
  console.log(preList);
  console.log(postList);
  console.log(middleValue);

  if (middleValue) {
    return [...preList, middleValue, ...postList];
  }
  return state;
}

export const SliceContacts = createSlice({
  name: "SliceContacts",
  initialState,
  reducers: {
    addContact(state, action: PayloadAction<Contact>) {
      state.value = [...state.value, action.payload];
    },
    deleteContact(state, action: PayloadAction<number | string>) {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    changeContact(state, action: PayloadAction<Contact>) {
      state.value = changeContactInValue(state.value, action.payload);
    },
  },
});

export const { addContact, deleteContact, changeContact } =
  SliceContacts.actions;
// export const selectValue = (state: RootState) => state.SliceContacts.value;

export default SliceContacts.reducer;
