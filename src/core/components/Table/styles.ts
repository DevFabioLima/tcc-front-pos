import styled from 'styled-components';

interface IColumn {
  width?: string;
}

interface IButton {
  buttonColor?: string;
}

export const Container = styled.div`
min-width: 740px;
`;

export const TableSty = styled.table`
 width: 100%;

  tbody td {
    padding: 20px;
    border-bottom: 1px solid #eee;
    text-align: center;
    white-space: nowrap
  }
  strong {
    color: #000;
    display: block;
  }
  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;
    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }
  .without-line {
    border: 0;
  }
  `;

export const Column = styled.th<IColumn>`
color: #000;
text-align: center;
padding-bottom: 12px;
border-bottom: 1px solid #eee;
`;

export const Button = styled.button<IButton>`
  padding: 10px 15px;
  font-size: 14px;
  background-color: ${(props) => (props.buttonColor ? props.buttonColor : '#0061ff')};
  color: var(--color-tertiary);
  border: none;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    opacity: 0.87;
  }
`;
