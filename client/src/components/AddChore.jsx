import React from 'react';
import axios from 'axios';

//add chore to the database
const getValues = (e) => {
  e.preventDefault();
  console.log('getValues invoked!');
  let chore = e.target[0].value;
  let points = e.target[1].value;
  let createdBy = e.target[2].value;
  console.log(chore, points, createdBy);
  console.log(new Date().toISOString());
  let createdDate = new Date().toISOString();

  axios.post('/addChore', {
    chore, points, createdBy, createdDate
  })
    .then(response => {
      console.log(response);
      //invoke p
    })
    .catch(err => {
      console.log(err);
    });
};

let AddChore = () => {
  return (
    <form onSubmit={getValues}>
      <label>Chore:
        <input type='text'></input>
      </label>
      <label>$
        <input type='text'></input>
      </label>
      <br></br>
      <label>Created By:
        <input type='text'></input>
      </label>
      <input type='submit' value='Submit'></input>
    </form>
  )
};

export default AddChore;