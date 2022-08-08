import { ContactItem } from 'components/ContactItem/ContactItem';
import { useContactList } from 'hooks/useContactList';

const ContactList = () => {
  const { visibleContacts } = useContactList();

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
