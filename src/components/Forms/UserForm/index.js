import { useState } from 'react';
import '../styles.css';

import { Button } from '../../Buttons';

const UserForm = ({ onSubmit, submitText }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, password });
  };

  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <div className='form-control'>
        <label htmlFor='username'>Username</label>
        <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className='form-control'>
        <label htmlFor='username'>Password</label>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <Button color='secondary'>{submitText}</Button>
    </form>
  )
}

export default UserForm