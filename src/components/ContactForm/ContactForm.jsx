import { useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import contactActions from '../../redux/actions';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import store from '../../redux/store';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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

    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit} className={css.form}>
      <label htmlFor="name">
        <p className={css.label__form}>Name</p>
        <input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          id="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="number">
        <p className={css.label__form}>Number</p>
        <input
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          id="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  onSubmit: data => {
    const contactsState = store.getState().contacts.items;

    const sameName =
      contactsState.findIndex(
        item => item.name.toLowerCase() === data.name.toLowerCase()
      ) !== -1;

    if (sameName) {
      toast.warn(`${data.name} is already in contacts `);
      return;
    }

    dispatch(contactActions.addContact(data));
  },
});

export default connect(null, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
