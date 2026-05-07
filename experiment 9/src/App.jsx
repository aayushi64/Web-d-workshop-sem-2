import React, { useState } from 'react';
import './App.css';
import RegistrationList from './assets/RegistrationList';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = [];

    if (!email.includes('@')) {
      newErrors.push('A valid email address is required.');
    }
    if (password.length < 6) {
      newErrors.push('Password must contain at least 6 characters.');
    }
    if (!name.trim()) {
      newErrors.push('Full name field cannot be empty.');
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    setUsers([...users, { name, email }]);
    setErrors([]);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="card">
      <h2>Registration Form</h2>
      
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Full Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          placeholder="Email Address" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        
        {errors.length > 0 && (
          <div className="error-container">
            {errors.map((err, i) => (
              <p key={i} className="error-text">• {err}</p>
            ))}
          </div>
        )}
        
        <button type="submit" className="btn">Register</button>
      </form>

      {users.length > 0 && <RegistrationList userArray={users} />}
    </div>
  );
}

export default App;