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
      bank: [],
      completedChoresForAccount: []
    };

    this.getPendingChores = this.getPendingChores.bind(this);
    this.getBankInfo = this.getBankInfo.bind(this);
    this.handleAccountClick = this.handleAccountClick.bind(this);
    this.getCompletedChores = this.getCompletedChores.bind(this);
  }

  componentDidMount() {
    this.getPendingChores();
    this.getBankInfo();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.choresPending.length !== this.state.choresPending.length) {
      this.getBankInfo();
    };
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

  getCompletedChores(accountName) {
    axios.get('/getCompletedChores', { params: { accountName } })
      .then(result => {
        console.log(result);
        this.setState({ completedChoresForAccount: result.data });
      })
      .catch(err => {
        console.log('err in getCompletedChores: ', err);
      });
  }

  getBankInfo() {
    axios.get('/getBankInfo')
      .then(result => {
        console.log(result);
        this.setState({ bank: result.data });
      })
      .catch(err => {
        console.log('err in getBankInfo: ', err);
      })
  }

  handleAccountClick(e) {
    e.preventDefault();
    console.log('clicked!');
    //when clicked should open a modal
    console.log(e.target.innerText);
    this.getCompletedChores(e.target.innerText);
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
              <ChoresPending choresPending={this.state.choresPending} getPendingChores={this.getPendingChores} />
            </div>
          </div>
          <div className='container-3'>
            <h2>container 3</h2>
            <div className='bank-container'>
              <Bank bank={this.state.bank} handleAccountClick={this.handleAccountClick} />
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