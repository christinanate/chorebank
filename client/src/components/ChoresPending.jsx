import React from 'react';

let ChoresPending = (props) => {
  console.log(props);
  return (
    props.choresPending.map(chore => {
      console.log('chore: ', chore.chore);
      return <p>{chore.chore}</p>
    })

  )

};

export default ChoresPending;