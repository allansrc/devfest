import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #222;
  padding: 1rem;
  color: white;
  text-align: center;
`;

const Footer = () => (
  <FooterWrapper id="footer">
    <p>© 2024 Nome do Evento</p>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
  </FooterWrapper>
);

export default Footer;
