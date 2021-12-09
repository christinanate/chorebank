import React from 'react';
import ChoreItem from './ChoreItem.jsx';

let ChoresPending = ({ choresPending, getPendingChores }) => {
  return (
    choresPending.map((chore, index) => <ChoreItem chore={chore} getPendingChores={getPendingChores} key={index} />)
  );

};

export default ChoresPending;