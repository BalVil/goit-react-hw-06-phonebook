import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const addContact = createAction('contact/add', ({ name, number }) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));

const delContact = createAction('contact/delete');

const changeFilter = createAction('contact/filter');

const actions = {
  addContact,
  delContact,
  changeFilter,
};
export default actions;
