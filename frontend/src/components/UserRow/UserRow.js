import { useLocation } from 'react-router-dom';

const UserRow = ({ user }) => {
  const queryString = new URLSearchParams(useLocation().search).get('q') ?? '';

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
