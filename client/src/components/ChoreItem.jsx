import React from 'react';

let ChoreItem = ({ chore }) => {
  return (
    <div className='choreitem-container'>
      <form>
        <label>created by: {chore.createdBy}</label>
        <br></br>
        <label>date: {chore.date}</label>
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