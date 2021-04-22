// Import hooks from 'react'. Which hook is meant for causing side effects?
// Import hooks from 'react-redux'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from '../../store/users';
import styles from './UsersContainer.module.css';
import { fakeUsers } from '../../assets';
import UserRow from '../UserRow';

const UsersContainer = () => {
  // Declare variables from hooks
  const dispatch = useDispatch();
  const users = useSelector((state) => Object.values(state.users));

  // Use a 'react' hook and cause a side effect
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>User No.</th>
            <th>User's Name</th>
            <th>User's Email</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {users.map((user) => <UserRow key={user.id} user={user} />)}
        </tbody>
      </table>
    </div>
  );
};

export default UsersContainer;
