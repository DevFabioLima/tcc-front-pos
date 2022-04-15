import styled, { css } from 'styled-components';

interface IContainerProps {
  isFocused: boolean;
  fontSize: string;
  isFilled: boolean;
  erros?: boolean;
}

export const Container = styled.div<IContainerProps>`
display: flex;
align-items: center;

width: 100%;
padding: 15px;

border: 2px solid;
border-radius: 10px;

color: var(--white);

${(props) => props.isFocused && css`
  border-color: var(--color-blue-light);
  color: var(--color-blue-light);
`}

${(props) => props.isFilled && css`
  color: var(--color-blue-light);
`}

${(props) => !props.isFocused && css`
  border-color: var(--white);
`}

${(props) => props.erros && css`
  border-color: red;
  color: red;
`}

svg {
 margin: 0 10px 0 0;
}

& + div {
  margin-top: 8px;
}

> input {

  flex: 1;
  background: transparent;
  font-size: ${(props) => props.fontSize};
  outline: none;

   &&::placeholder {
    color: #666360;
  }

}

`;
