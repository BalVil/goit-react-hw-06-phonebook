import { useSelector } from 'react-redux';
import { getItems, getFilter } from 'redux/selectors';

export const useContactList = () => {
  const items = useSelector(getItems);
  const filter = useSelector(getFilter);

  const getFilteredContacts = (allContacts, filteredContacts) => {
    const normalizedFilter = filteredContacts.toLowerCase();

    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getFilteredContacts(items, filter);

  return { visibleContacts };
};
