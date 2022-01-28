import styled from 'styled-components';

export const HeaderStyle = styled.header`
  width: 100%;
  background-color: var(--blue);
  height: 21.2rem;
  padding-top: 3.2rem;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  button {
    line-height: 4.8rem;
    padding: 0 3.2rem;
    background-color: var(--blue-light);
    border-radius: 5px;
    border: none;
    font-weight: 600;
    font-size: 1.6rem;
    color:var(--shape);
    transition: filter .3s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;