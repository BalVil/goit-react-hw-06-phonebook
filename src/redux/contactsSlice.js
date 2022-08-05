import { createSlice } from '@reduxjs/toolkit';

// const initialItems = [{ id: 'id-1', name: 'user', number: '000-00-00' }];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], filter: '' },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    delContact(state, action) {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addContact, delContact, changeFilter } = contactsSlice.actions;
