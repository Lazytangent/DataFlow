import { fakeUsers } from '../../assets';
import UserCard from '../UserCard';

const UsersContainer = () => {
  return (
    <>
      <h3>Placeholder for UsersContainer</h3>
      <table>
        <thead>
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
