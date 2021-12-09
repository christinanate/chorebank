import React from 'react';
import axios from 'axios';

class AddChore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  //add chore to the database
  getValues(e) {
    e.preventDefault();
    console.log('getValues invoked!');
    let chore = e.target[0].value;
    let points = e.target[1].value;
    let createdBy = e.target[2].value;
    console.log(chore, points, createdBy);
    console.log(new Date().toISOString());
    let createdDate = new Date().toISOString();
    let completedBy = '';
    let completedDate = '';

    axios.post('/addChore', {
      chore, points, createdBy, createdDate, completedBy, completedDate
    })
      .then(response => {
        console.log(response);
        //invoke function that gets all null completed chores
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <form onSubmit={this.getValues}>
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
    );
  }
}

export default AddChore;