import React from 'react';
import axios from 'axios';

class AddChore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.getValues = this.getValues.bind(this);
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
        this.props.getPendingChores();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <form onSubmit={this.getValues}>
        <label>
          <input type='text' placeholder='Chore'></input>
        </label>
        <label>
          <input type='text' placeholder='$'></input>
        </label>
        <br></br>
        <label>
          <input type='text' placeholder='Created By'></input>
        </label>
        <div className='submit-wrap'>
          <input type='submit' value='Create' className='add-submit-btn'></input>
        </div>
      </form>
    );
  }
}

export default AddChore;