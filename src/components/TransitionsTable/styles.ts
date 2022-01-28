import styled from 'styled-components';

export const TransitionsTableStyles = styled.section`
  table {
    width: 100%;
    border-spacing: 0 8px;
    thead {
      th {
        height: 6.4rem;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: #969CB3;
        text-align: left;
        &:first-child {
          padding-left: 3.2rem;
        }
      }
    }
    td {
      height: 6.4rem;
      background-color: var(--shape);
      color: var(--text-body);
      border: 0;
      font-size: 1.6rem;
      border-radius: 4px;
      &.income {
        color: var(--green);
      }
      &.outcome {
        color: var(--red);
      }
      &:first-child {
        padding-left: 3.2rem;
        color: var(--text-title);
      }
    }
  }
`;
