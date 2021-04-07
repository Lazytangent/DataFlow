import styles from './App.module.css';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <>
      <h2 className={styles.heading}>Search for Users</h2>
      <MainPage />
    </>
  );
}

export default App;
