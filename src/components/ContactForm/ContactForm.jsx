import { Form, Button, FormLabel } from './ContactForm.styled';
import { useAddContact } from 'hooks/useAddContact';

const ContactForm = () => {
  const { name, number, handleChange, handleSubmit } = useAddContact();

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="name">
        <FormLabel>Name</FormLabel>
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
        <FormLabel>Number</FormLabel>
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
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
