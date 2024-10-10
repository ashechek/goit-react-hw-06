import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",
  initialState: {
    contacts: {
      items: [
      ],
    },
  },
  reducers: {
    deleteContact(state, action) {
      state.contacts.items = state.contacts.items.filter(
        (item) => item.id !== action.payload
      );
    },
    addContact(state, action) {
      state.contacts.items.push(action.payload);
    },
  },
});

export const selectContacts = (state) => state.contacts.contacts.items;

export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;
