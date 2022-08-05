import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contactsSlice';
import { getItems } from 'redux/selectors';

export const useAddContact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactsItems = useSelector(getItems);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const sameName =
      contactsItems.findIndex(
        item => item.name.toLowerCase() === name.toLowerCase()
      ) !== -1;

    if (sameName) {
      toast.warn(`${name} is already in contacts `);
      // resetForm();
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return { name, number, handleChange, handleSubmit };
};
