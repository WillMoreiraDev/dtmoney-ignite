import { useState } from 'react';

import { HeaderStyle } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  onOpenNewTransactionModal : () => void;
}


export const Header = ({ onOpenNewTransactionModal } : HeaderProps) => {
  return (
    <HeaderStyle>
      <div className="container">
        <img src={Logo} alt="dt money" />
        <button onClick={onOpenNewTransactionModal}>Nova transação</button>


      </div>
    </HeaderStyle>
  )
}
