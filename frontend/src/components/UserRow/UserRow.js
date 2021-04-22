import { useSearch } from '../../context/SearchContext';

const UserRow = ({ user }) => {
  const { queryString } = useSearch();

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
