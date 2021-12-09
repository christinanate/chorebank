import React from 'react';
import BankItem from './BankItem.jsx';

let Bank = ({ bank, handleAccountClick }) => {
  return (
    bank.map((account, index) => <BankItem account={account} handleAccountClick={handleAccountClick} key={index} />)
  )
};

export default Bank;