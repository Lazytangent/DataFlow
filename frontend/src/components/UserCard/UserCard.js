import styles from './UserCard.module.css';

const UserCard = ({ user }) => {
  return (
    <div className={styles.card}>
      <h3>Placeholder for UserCard</h3>
      <h4>User No. {user.id}</h4>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default UserCard;
