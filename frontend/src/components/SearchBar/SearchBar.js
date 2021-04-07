import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../../store/search';

const SearchBar = () => {
  const dispatch = useDispatch();
  const queryString = useSelector((state) => state.search.queryString);

  const updateSearch = (e) => {
    dispatch(setSearch(e.target.value))
  };

  return (
    <>
      <h3>Placeholder for SearchBar</h3>
      <input type="search" value={queryString} onChange={updateSearch} />
    </>
  );
};

export default SearchBar;
