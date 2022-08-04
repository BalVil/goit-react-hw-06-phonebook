import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';

const ContactList = () => {
  const getFilteredContacts = (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const { items, filter } = useSelector(state => {
    return state.contacts;
  });

  const visibleContacts = getFilteredContacts(items, filter);

  return (
    <ul>
      {visibleContacts.length > 0 ? (
        visibleContacts.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              name={name}
              number={number}
              id={id}
            ></ContactItem>
          );
        })
      ) : (
        <div>No contacts in the phonebook</div>
      )}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
