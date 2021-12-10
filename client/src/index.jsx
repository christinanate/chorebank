import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles.css';
import axios from 'axios';
import AddChore from './components/AddChore.jsx';
import ChoresPending from './components/ChoresPending.jsx';
import Bank from './components/Bank.jsx';
import ChoresCompleted from './components/ChoresCompleted.jsx';

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
    this.handleBackClick = this.handleBackClick.bind(this);
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

  handleBackClick() {
    this.setState({ completedChoresForAccount: [] });
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
        <div className='title-header'>
          <h1 className='title'>Chore Bank</h1>
          <img src='./money-rich-svgrepo-com.svg' className='logo'></img>
        </div>
        <div className='container-1'>
          <div className='container-2'>
            {this.state.completedChoresForAccount.length > 0 ?
              <>
                <button onClick={this.handleBackClick} className='main-btn'>Main</button>
                <ChoresCompleted completedChoresForAccount={this.state.completedChoresForAccount} />
              </>
              :
              <>
                <div className='wrap'>
                  <div className='addchore-container'>
                    <h2>Add A Chore</h2>
                    <AddChore getPendingChores={this.getPendingChores} />
                  </div>
                </div>
                <div className='chorespending-container'>
                  <h2>Pending Chores</h2>
                  <ChoresPending choresPending={this.state.choresPending} getPendingChores={this.getPendingChores} />
                </div>
              </>
            }
          </div>
          <div className='container-3'>
            <h2>Bank</h2>
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