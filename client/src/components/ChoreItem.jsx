import React from 'react';
import axios from 'axios';

let ChoreItem = ({ chore, getPendingChores }) => {

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit in choreItem invoked!');
    console.log(e.target[0].value);
    let completedBy = e.target[0].value;
    let points = chore.points;
    let task = chore.chore;
    // console.log(points);

    //create new account in database if account doesn't exist, add points.
    axios.post('/completedBy', { completedBy, points })
      .then(result => {
        console.log(result);
        console.log('task: ', task);
        //update completed by field in Chore
        axios.put('/updateCompletedByField', { task, completedBy })
          .then(result => {
            console.log('updated completedby field in chores!');
            console.log(result);
            //rerender pending chores
            getPendingChores();
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className='choreitem-container'>
      <form onSubmit={handleSubmit}>
        <label>created by: {chore.createdBy}</label>
        <br></br>
        <label>date: {chore.createdDate}</label>
        <br></br>
        <label>chore: {chore.chore}</label>
        <br></br>
        <label>${chore.points}</label>
        <br></br>
        <label>completed by:
          <input type='text'></input>
        </label>
        <input type='submit' value='Submit'></input>
      </form>

    </div>
  )

};

export default ChoreItem;