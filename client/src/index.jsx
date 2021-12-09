import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles.css';
import axios from 'axios';
import AddChore from './components/AddChore.jsx';
import ChoresPending from './components/ChoresPending.jsx';
import Bank from './components/Bank.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      choresPending: [],
      bank: [
        {
          name: 'Christina',
          totalPoints: 20
        },
        {
          name: 'Michelle',
          totalPoints: 36
        }
      ]
    };

    this.getPendingChores = this.getPendingChores.bind(this);
  }

  componentDidMount() {
    this.getPendingChores();
  }

  getPendingChores() {
    axios.get('/getPendingChores')
      .then(result => {
        console.log(result);
        this.setState({ choresPending: result.data });
      })
      .catch(err => {
        console.log('err in getPendingChores: ', err);
      });
  }

  render() {
    return (
      <div>
        <h1 className='title'>Chore Bank</h1>
        <div className='container-1'>
          <div className='container-2'>
            <h2>container 2</h2>
            <div className='addchore-container'>
              <AddChore getPendingChores={this.getPendingChores} />
            </div>
            <div className='chorespending-container'>
              <ChoresPending choresPending={this.state.choresPending} />
            </div>
          </div>
          <div className='container-3'>
            <h2>container 3</h2>
            <div className='bank-container'>
              <Bank bank={this.state.bank} />
            </div>
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