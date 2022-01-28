import { HeaderStyle } from './styles';

import Logo from '../../assets/logo.svg';

export const Header = () => {
  return (
    <HeaderStyle>
      <div className="container">
        <img src={Logo} alt="dt money" />
        <button>Nova transação</button>
      </div>
    </HeaderStyle>
  )
}
