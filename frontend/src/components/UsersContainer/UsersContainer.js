import { fakeUsers } from '../../assets';
import UserCard from '../UserCard';

const UsersContainer = () => {
  return (
    <>
      <h3>Placeholder for UsersContainer</h3>
      {fakeUsers.map((user) => <UserCard key={user.id} user={user} />)}
    </>
  );
};

export default UsersContainer;
