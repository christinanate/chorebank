import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles.css';
import axios from 'axios';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className='title'>Chore Bank</h1>
        <div className='container-1'>
          <div className='container-2'>
            <h2>container 2</h2>
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