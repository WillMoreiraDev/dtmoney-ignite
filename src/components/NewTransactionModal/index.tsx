import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';

import Close from '../../assets/close.svg'
import Income from '../../assets/income.svg';
import Outcome from '../../assets/outcome.svg';
import { useState } from 'react';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose : () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose } :NewTransactionModalProps) {
  const [type, setType] = useState('deposit');
  return (
    <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >

      <Container>
        <button className="close" onClick={onRequestClose}>
          <img src={Close} alt="Botão Fechar" />
        </button>
        <h2>Cadastrar transação</h2>

        <input 
          type="text" 
          placeholder='Título'
        />
        <input 
          type="number" 
          placeholder='Valor'
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {setType('deposit')}}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={Income} alt="Entrada" />
            Entrada
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {setType('withdraw')}}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={Outcome} alt="Saída" />
            Saída
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          type="text" 
          placeholder='Categoria'
        />
        <button type='submit'>Cadastrar</button>
      </Container>

    </Modal>
  )
}