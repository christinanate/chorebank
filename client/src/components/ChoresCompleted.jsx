import React from 'react';

let ChoresCompleted = ({ completedChoresForAccount }) => {
  return (
    completedChoresForAccount.map((completedChore, index) => {
      return (
        <div key={index} className='choreitem-container'>
          <p>completed by: {completedChore.completedBy}</p>
          <p>completed date: {completedChore.completedDate}</p>
          <p>chore: {completedChore.chore}</p>
          <p>${completedChore.points}</p>
          <p>created by: {completedChore.createdBy}</p>
          <p>created date: {completedChore.createdDate}</p>
        </div>
      );
    })
  );
};

export default ChoresCompleted;