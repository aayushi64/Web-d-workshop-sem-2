import React from 'react';

const RegistrationList = ({ userArray }) => {
  return (
    <div className="success-area">
      <p className="success-msg">Registration Successful!</p>
      <div className="list-box">
        <h3>Registered Users</h3>
        <ul>
          {userArray.map((user, index) => (
            <li key={index}>
              {user.name} — {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RegistrationList;