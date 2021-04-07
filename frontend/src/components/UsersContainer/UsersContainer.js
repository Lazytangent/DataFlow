// Import hooks from 'react'. Which hook is meant for causing side effects?
// Import hooks from 'react-redux'

import styles from './UsersContainer.module.css';
import { fakeUsers } from '../../assets';
import UserRow from '../UserRow';

const UsersContainer = () => {
  // Declare variables from hooks

  // Use a 'react' hook and cause a side effect

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
          {fakeUsers.map((user) => <UserRow key={user.id} user={user} />)}
        </tbody>
      </table>
    </div>
  );
};

export default UsersContainer;
