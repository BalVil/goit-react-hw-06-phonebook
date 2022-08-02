import { nanoid } from 'nanoid';
import types from './types';

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: nanoid(),
    name,
    number,
  },
});

const delContact = id => ({
  type: types.DELETE,
  payload: id,
});

const changeFilter = value => ({
  type: types.FILTER,
  payload: value,
});

export default { addContact, delContact, changeFilter };
