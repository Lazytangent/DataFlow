// Import hooks from 'react-redux'

import styles from './UsersContainer.module.css';
import { fakeUsers } from '../../assets';
import UserCard from '../UserCard';

const UsersContainer = () => {
  // Declare variables from hooks

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
          {fakeUsers.map((user) => <UserCard key={user.id} user={user} />)}
        </tbody>
      </table>
    </>
  );
};

export default UsersContainer;
