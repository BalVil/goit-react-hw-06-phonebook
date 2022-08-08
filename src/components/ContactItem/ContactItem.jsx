import { useDispatch } from 'react-redux';
import { delContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import {
  Contact,
  ContactName,
  ContactNumber,
  DelButton,
} from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <Contact>
        <ContactName>{name}:</ContactName>
        <ContactNumber>{number}</ContactNumber>
        <DelButton type="button" onClick={() => dispatch(delContact(id))}>
          Delete
        </DelButton>
      </Contact>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
