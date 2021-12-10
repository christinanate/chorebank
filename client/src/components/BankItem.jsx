import React from 'react';

let BankItem = ({ account, handleAccountClick }) => {

  return (
    <div className='bankitem-container'>
      <p onClick={handleAccountClick}>{account.name}</p>
      <p>${account.totalPoints}</p>
    </div>
  )
};

export default BankItem;