// Import hooks from 'react'. Which hook is meant for causing side effects?
// Import hooks from 'react-redux'

import styles from './UsersContainer.module.css';
import { fakeUsers } from '../../assets';
import UserRow from '../UserRow';

const UsersContainer = () => {
  // Declare variables from hooks

  // Use a 'react' hook and cause a side effect

  return (
    <>
      <h3 className={styles.heading}>Placeholder for UsersContainer</h3>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>User No.</th>
            <th>User's Name</th>
            <th>User's Email</th>
          </tr>
        </thead>
        <tbody>
          {fakeUsers.map((user) => <UserRow key={user.id} user={user} />)}
        </tbody>
      </table>
    </>
  );
};

export default UsersContainer;
