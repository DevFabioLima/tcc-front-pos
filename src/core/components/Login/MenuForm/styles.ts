import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (min-width: 1024px) {
    max-width: 680px;
  }
`;

export const NavigationMobile = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  min-height: 61px;
  > h1 {
    display: flex;
    align-items: center;
    > span {
      color: var(--color-quaternary);
      margin-left: 10px;
      font-size: 29px;
    }
  }
  > button {
    background: none;
    border: none;
    font-weight: bold;
    font-size: 17px;
    outline: 0;
    cursor: pointer;
  }
  @media (min-width: 1024px) {
    justify-content: center;
    > h1 {
      display: none;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 0 32px;
  max-width: 480px;
  margin: 0 auto;

  > .title {
    font-size: 30px;
    font-weight: 900;
    padding-bottom: 20px;
    color: var(--color-primary);
  }

  > span {
    font-size: 50px;
    font-weight: 550;
  }

  p {
    padding-top: 8px;
    padding-left: 8px;
    color: red;
  }
 
  > button {
    margin-top: 18px;
    padding: 13px 18px;
    font-size: 16px;
    background-color: var(--color-blue);
    color: var(--color-tertiary);
    border: none;
    cursor: pointer;
    border-radius: 4px;
    &:hover {
      opacity: 0.87;
    }
  }
  .recover-pwd {
    background-color: var(--orange);
  }
`;
