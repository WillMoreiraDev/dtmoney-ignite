import styled from 'styled-components';

import { darken, transparentize } from 'polished'

export const Container = styled.form`
  h2 {
    margin-bottom: 3.2rem;
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 3.6rem;
    color: #363F5F;
  }
  input {
    display: block;
    background-color: #E7E9EE;
    border: 1px solid #D7D7D7;
    border-radius: 5px;
    height: 6.4rem;
    padding: 0px 2.4rem;
    font-size: 1.6rem;
    line-height: 24px;
    color: #969CB3;
    width: 100%;
    max-width: 48rem;
    margin-bottom: 1.6rem;
    &::placeholder {
      color: #969CB3;
    }
  }
  button[type=submit] {
    margin-top: 0.8rem;
    width: 100%;
    max-width: 48rem;
    height: 6.4rem;
    border: 0;
    background-color: #33CC95;
    font-weight: 600;
    font-size: 1.6rem;
    text-align: center;
    color: #FFFFFF;
    border-radius: 5px;
  }
  .close {
    position: absolute;
    top: 8px;
    right: 8px;
    border: 0px;
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
  }
`;

export const TransactionTypeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.6rem;
`;

interface RadioBoxProps {
  isActive : boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33CC95',
  red: '#E52E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
  width: 100%;
  max-width: 23.6rem;
  height: 6.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid rgba(150, 156, 179, 0.2);
  box-sizing: border-box;
  border-radius: 5px;
  background: ${(props) => props.isActive 
    ? transparentize(0.9, colors[props.activeColor]) 
    : 'transparent'};
  font-size: 1.6rem;
  color: #363F5F;
  transition: border-color .3s;
  img {
    margin-right: 1.8rem;
  }
  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }
`