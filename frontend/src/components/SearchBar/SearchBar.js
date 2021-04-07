import { useDispatch, useSelector } from 'react-redux';

import styles from './SearchBar.module.css';
import { setSearch } from '../../store/search';

const SearchBar = () => {
  const dispatch = useDispatch();
  const queryString = useSelector((state) => state.search.queryString);

  const updateSearch = (e) => {
    dispatch(setSearch(e.target.value))
  };

  return (
    <div className={styles.div}>
      <input placeholder="Search..." className={styles.searchBar} type="search" value={queryString} onChange={updateSearch} />
    </div>
  );
};

export default SearchBar;
