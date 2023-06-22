import React, { useState } from 'react';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Add new user to list
    // When the form is submitted, it just logs the new user data and resets the form.
    // In a real app, you would probably want to send the new user data to a server
    console.log({ name, email, password });
    // Reset form
    setStep(1);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 ? (
        <>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <button type="button" onClick={() => setStep(2)}>
            Next
          </button>
        </>
      ) : (
        <>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="button" onClick={() => setStep(1)}>
            Back
          </button>
          <button type="submit">Submit</button>
        </>
      )}
    </form>
  );
};

export default MultiStepForm;