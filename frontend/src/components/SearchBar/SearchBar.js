import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './SearchBar.module.css';

const SearchBar = () => {
  const history = useHistory();
  const [queryString, setQueryString] = useState(new URLSearchParams(history.location.search).get('q') ?? '');

  const updateSearch = (e) => {
    setQueryString(e.target.value);
    if (e.target.value) {
      history.replace({
        pathname: '/',
        search: `?q=${e.target.value}`,
      });
    } else {
      history.replace({
        pathname: '',
      });
    }
  };

  return (
    <div className={styles.div}>
      <input placeholder="Search..." className={styles.searchBar} type="search" value={queryString} onChange={updateSearch} />
    </div>
  );
};

export default SearchBar;
