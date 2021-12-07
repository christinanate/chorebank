import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles.css';
import axios from 'axios';

class App extends React.Component {
  render() {
    return <h2>All set up!</h2>
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);