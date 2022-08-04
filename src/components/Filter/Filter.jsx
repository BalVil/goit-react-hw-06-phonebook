import { useSelector, useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { changeFilter } from 'redux/actions';

const Filter = () => {
  const { value } = useSelector(state => {
    return state.contacts.filter;
  });

  const dispatch = useDispatch();

  return (
    <label className={css.label}>
      <p className={css.label__filter}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
        name="filter"
      />
    </label>
  );
};
export default Filter;
