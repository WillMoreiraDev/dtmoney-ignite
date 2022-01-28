import {useState} from 'react'
import { SummaryStyle } from './styles'

import IconUp from '../../assets/income.svg';
import IconDown from '../../assets/outcome.svg'
import IconTotal from '../../assets/total.svg'

export const Summary = () => {
  const [entradas, setEntradas] = useState(17400);
  const [saidas, setSaidas] = useState(1259)
  return (
    <SummaryStyle>
      <div className="container">
        <div className="card">
          <div>
            <span>Entradas</span>
            <img src={IconUp} alt="Up" />
          </div>
          <h3>{entradas.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h3>
        </div>
        <div className="card">
          <div>
            <span>Saídas</span>
            <img src={IconDown} alt="Up" />
          </div>
          <h3>{saidas.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h3>
        </div>
        <div className="card">
          <div>
            <span>Total</span>
            <img src={IconTotal} alt="Up" />
          </div>
          <h3>{(entradas - saidas).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h3>
        </div>
      </div>
    </SummaryStyle>
  )
}
