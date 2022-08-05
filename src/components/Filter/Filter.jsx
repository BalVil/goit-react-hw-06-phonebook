import { useSelector, useDispatch } from 'react-redux';
import { Label, LabelTitle } from './Filter.styled';
import { changeFilter } from 'redux/contactsSlice';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const { value } = useSelector(getFilter);

  const dispatch = useDispatch();

  return (
    <Label>
      <LabelTitle>Find contacts by name</LabelTitle>
      <input
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
        name="filter"
      />
    </Label>
  );
};
export default Filter;
