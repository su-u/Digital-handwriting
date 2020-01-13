import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const App = () => {
  return (
    <>
      <Button.Red inlineText={'はじめる'} to={'/question/0'} />
      <Link to={'/score'}>score</Link>
    </>
  );
};

export default App;
