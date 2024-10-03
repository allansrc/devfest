import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.offWhite};
    color: ${({ theme }) => theme.colors.black02};
    font-family: ${({ theme }) => theme.fonts.primary};
    margin: 0;
    padding: 0;
  }

  h1, h2, h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }

  p {
    font-size: ${({ theme }) => theme.fonts.size.medium};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.black02};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }

  button {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    padding: 10px 20px;
    border-radius: ${({ theme }) => theme.borders.radius};
    border: none;
    cursor: pointer;
    font-size: ${({ theme }) => theme.fonts.size.medium};
    box-shadow: ${({ theme }) => theme.shadows.default};
  }

  button:hover {
    background-color: ${({ theme }) => theme.colors.halftone.blue};
  }
`;

export default GlobalStyles;
