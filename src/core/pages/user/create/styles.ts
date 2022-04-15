import styled from 'styled-components';

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 130px;
`;

export const Form = styled.form`
@media (min-width: 1024px) {
  min-width: 620px;
}
background-color: white;
max-width: 300px;

border: thick double #32a1ce;
border-radius: 15px;
padding: 20px 10px;

div {
   max-width: 280px;
 }
`;

export const Erros = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;

p {
  color: red;
}

`;

export const ContentFormProfile = styled.div`
padding-top: 20px;
display: flex;
justify-content: center;
align-items: center;
min-width: 100%;
`;

export const StyleButton = styled.div`
padding-top: 20px;
display: flex;
justify-content: center;
align-items: center;
min-width: 100%;
button {
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

`;

export const ContentForm = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

> div {
  margin: 15px 30px;
}
`;
