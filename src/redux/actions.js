import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const addContact = createAction('contact/add', ({ name, number }) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));

export const delContact = createAction('contact/delete');

export const changeFilter = createAction('contact/filter');

const actions = {
  addContact,
  delContact,
  changeFilter,
};
export default actions;
