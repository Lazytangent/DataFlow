import { useSelector } from 'react-redux';

const UserRow = ({ user }) => {
  const queryString = useSelector((state) => state.search.queryString);

  if (!(user.name.includes(queryString) || user.email.includes(queryString) || String(user.id).includes(queryString))) {
    return null;
  }

  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>
  );
};

export default UserRow;
