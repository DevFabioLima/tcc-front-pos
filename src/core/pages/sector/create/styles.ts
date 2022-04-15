import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column; 
  width: 100%; 
`;

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 120px;
`;

export const Form = styled.form`

background-color: white;

@media (min-width: 1024px) {
  min-width: 620px;
}

max-width: 300px;

border: thick double #32a1ce;
border-radius: 15px;
padding: 20px 10px;

div:first-child {
  display: flex;
  align-items: center;
  justify-content: center;
 
 > div {
   max-width: 280px;
 }
}

div:last-child {
  display: flex;
  align-items: center;
  justify-content: center;
    > button {
      margin-top: 25px;
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

}

`;
