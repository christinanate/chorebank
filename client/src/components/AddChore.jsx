import React from 'react';

//add chore to the database

let AddChore = () => {
  return (
    <form>
      <label>Chore:
        <input type='text'></input>
      </label>
      <label>Created By:
        <input type='text'></input>
      </label>
      <input type='submit' value='Submit'></input>
    </form>
  )
};

export default AddChore;