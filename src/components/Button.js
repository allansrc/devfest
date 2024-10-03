import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacings.medium};
  border-radius: ${({ theme }) => theme.borders.radius};
  font-size: ${({ theme }) => theme.fonts.size.medium};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.halftone.blue};
  }
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
