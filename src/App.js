import React from 'react';
import { UserForm } from './components/UserForm';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className='nav'></div>
      <h1>Application Form</h1>
      <UserForm />
    </div>
  );
}

export default App;
