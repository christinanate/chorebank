import React from 'react';
import ChoreItem from './ChoreItem.jsx';

let ChoresPending = ({ choresPending }) => {
  return (
    choresPending.map((chore, index) => <ChoreItem chore={chore} key={index} />)
  );

};

export default ChoresPending;