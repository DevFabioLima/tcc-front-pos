/* eslint-disable react/jsx-props-no-spreading */
import React, {
  InputHTMLAttributes, useState, useRef, useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
  fontSize: string;
  icon?: React.ComponentType<IconBaseProps>;
  erros?: boolean | undefined,
}

const Input: React.FC<IInputProps> = ({
  name, erros, fontSize, icon: Icon, ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container erros={erros} isFilled={isFilled} isFocused={isFocused} fontSize={fontSize}>
      {Icon && <Icon size={20} /> }
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
        ref={inputRef}
        name={name}
      />
    </Container>
  );
};

export default Input;
