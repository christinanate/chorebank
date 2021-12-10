import React from 'react';
import axios from 'axios';

let ChoreItem = ({ chore, getPendingChores }) => {

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit in choreItem invoked!');
    console.log(e.target[0].value);
    let completedBy = e.target[0].value;
    let points = chore.points;
    let createdDate = chore.createdDate;
    let completedDate = new Date().toISOString();
    // console.log(points);

    //create new account in database if account doesn't exist, add points.
    axios.post('/completedBy', { completedBy, points })
      .then(result => {
        console.log(result);
        //update completed by field in Chore
        axios.put('/updateCompletedByField', { createdDate, completedBy, completedDate })
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
        <div className='chore-item-header'>
          <label>{chore.createdBy} asks...</label>
          <br></br>
        </div>
        <label>{chore.chore}</label>
        <br></br>
        <label>${chore.points}</label>
        <br></br>
        <label>
          <input type='text' placeholder='Completed By'></input>
        </label>
        <input type='submit' value='Complete'></input>
      </form>

    </div>
  )

};

export default ChoreItem;