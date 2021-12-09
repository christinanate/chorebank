import React from 'react';
import BankItem from './BankItem.jsx';

let Bank = ({ bank }) => {
  return (
    bank.map((account, index) => <BankItem account={account} key={index} />)
  )
};

export default Bank;