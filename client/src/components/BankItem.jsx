import React from 'react';

let BankItem = ({ account }) => {
  return (
    <div className='bankitem-container'>
      <p>{account.name}</p>
      <p>${account.totalPoints}</p>
    </div>
  )
};

export default BankItem;