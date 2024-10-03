import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Wrapper para o header
const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
`;

const Topbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  width: 100%;
  background-color: ${({ scrolled, theme }) => scrolled ? theme.colors.offWhite : 'transparent'};
  transition: background-color 0.3s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;


const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    margin-left: 24px;
    font-size: ${({ theme }) => theme.fonts.size.medium};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};

    &:hover {
      color: ${({ theme }) => theme.colors.halftone.blue};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Muda para coluna em telas pequenas */
    margin-top: 10px;

    a {
      margin-left: 0;
      margin-bottom: 10px; /* Espaçamento entre os itens */
    }
  }
`;

const ImageSection = styled.div`
  width: 100%;
  height: 400px;
  background: url('https://via.placeholder.com/1500x400') no-repeat center center;
  background-size: cover;
  margin-top: 80px;
`;

const MenuNavSection = styled.div`
  margin-right: 80px;
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderWrapper>
      <Topbar scrolled={scrolled}>
        <Logo>DevFest 2024</Logo>
        <MenuNavSection>
          <Nav>
            <a href="#home">Home</a>
            <a href="#speakers">Speakers</a>
            <a href="#info">Info</a>
            <a href="#agenda">Agenda</a>
            <a href="#footer">Footer</a>
          </Nav>
        </MenuNavSection>
      </Topbar>

      {/* Imagem de fundo */}
      <ImageSection />
    </HeaderWrapper>
  );
};

export default Header;
