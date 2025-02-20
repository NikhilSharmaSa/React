import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../src/features/user/userSlice.js';

const UsersList = () => {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.users);


  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers()); // Dispatches fetchUsers action, setting the payload when completed
    }
  }, [status, dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>{error}</p>;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.username} {user.fathername}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
