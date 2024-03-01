import React, { useState } from 'react';
import './UserForm.css';

const UserForm = ({ onUserSubmit }) => {
  const [user, setUser] = useState({
    firstName: '',
    username: '',
    favouriteColor: '',
    favouriteNumber: '',
    dailyActivity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUserSubmit(user);
    setUser({
      firstName: '',
      username: '',
      favouriteColor: '',
      favouriteNumber: '',
      dailyActivity: '',
    });
  };

  return (
    <div className="user-form-container">
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Username:
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Favourite Color:
          <input
            type="color"
            name="favouriteColor"
            value={user.favouriteColor}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Favourite Number:
          <input
            type="number"
            name="favouriteNumber"
            value={user.favouriteNumber}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Paragraph on Daily Activity:
          <textarea
            name="dailyActivity"
            value={user.dailyActivity}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;