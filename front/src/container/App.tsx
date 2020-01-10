import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const App = () => {
  return (
    <>
      <Button.Red inlineText={'textaa'} />
      <Link to={'/score'}>score</Link>a
    </>
  );
};

export default App;
