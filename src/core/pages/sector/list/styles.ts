import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column; 
  width: 100%; 
  
  @media (min-width: 500px){ 
    border-left: 1px solid var(--outline);
  }
`;

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 120px;
`;

export const StyButton = styled.div`
display: flex;
display: flex;
align-items: center;
justify-content: center;
padding-top: 30px;
button {
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
`;
