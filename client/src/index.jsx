import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles.css';
import axios from 'axios';
import AddChore from './components/AddChore.jsx';
import ChoresPending from './components/ChoresPending.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      choresPending: [
        {
          createdBy: 'Mom',
          date: '2021',
          chore: 'Wash dishes',
          points: 5,
          completedBy: null
        },
        {
          createdBy: 'Mom',
          date: '2021',
          chore: 'Water the plants please',
          points: 5,
          completedBy: null
        }
      ]
    }
  }


  render() {
    return (
      <div>
        <h1 className='title'>Chore Bank</h1>
        <div className='container-1'>
          <div className='container-2'>
            <h2>container 2</h2>
            <div className='addchore-container'>
              <AddChore />
            </div>
            <div className='chorespending-container'>
              <ChoresPending choresPending={this.state.choresPending} />
            </div>
          </div>
          <div className='container-3'>
            <h2>container 3</h2>
          </div>
        </div>
      </div>

    )
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);