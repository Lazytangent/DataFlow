import styles from './SearchBar.module.css';
import { useSearch } from '../../context/SearchContext';

const SearchBar = () => {
  const { queryString, setQueryString } = useSearch();

  const updateSearch = (e) => {
    setQueryString(e.target.value);
  };

  return (
    <div className={styles.div}>
      <input placeholder="Search..." className={styles.searchBar} type="search" value={queryString} onChange={updateSearch} />
    </div>
  );
};

export default SearchBar;
