import styles from './MainPage.module.css';
import SearchBar from '../../components/SearchBar';
import UsersContainer from '../../components/UsersContainer';

const MainPage = () => {
  return (
    <>
      <h2 className={styles.heading}>Search for Users</h2>
      <SearchBar />
      <UsersContainer />
    </>
  );
};

export default MainPage;
