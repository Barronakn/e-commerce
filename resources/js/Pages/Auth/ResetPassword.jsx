import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const ResetPassword = ({ token, email }) => {
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangePasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Inertia.post('/reset-password', { token, email, password, password_confirmation });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Reset Password</h1>
      <form className="w-64" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 font-medium">New Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password_confirmation" className="block mb-2 font-medium">Confirm New Password</label>
          <input
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            value={password_confirmation}
            onChange={handleChangePasswordConfirmation}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 text-white font-bold rounded"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
