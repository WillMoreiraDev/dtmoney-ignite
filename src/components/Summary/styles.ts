import styled from 'styled-components';

export const SummaryStyle = styled.section`
  margin-top: -6.8rem;
  padding-bottom: 3.2rem;
  .container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .card {
    width: 100%;
    max-width: 35.2rem;
    height: 13.6rem;
    background-color: var(--shape);
    border-radius: 5px;
    padding: 2.4rem 2rem 1.8rem 3.2rem;
    &:last-child {
      background-color: var(--green);
      & > div {
        span {
          color: var(--shape);
        }
      }
      h3 {
        color: var(--shape);
      }
    }
    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 7px;
      span {
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: #363F5F;
      }
    }
    h3 {
      font-size: 3.6rem;
      line-height: 5.4rem;
      color: var(--text-title);
      font-weight: 400;
    }
  }
`;