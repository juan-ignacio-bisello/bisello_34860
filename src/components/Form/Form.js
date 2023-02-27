import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Store the collected data in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('number', number);
    localStorage.setItem('email', email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Number:
        <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
