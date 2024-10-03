import React from 'react';
import styled from 'styled-components';
import myImage from '../assets/images/home.jpg';

const ImageSectionWrapper = styled.div`
  width: 100%;
  height: 1200px;
  background: url(${myImage}) no-repeat center center;
  background-size: cover;
  z-index: 999;
  position: relative;
  display: flex; /* Alinha os itens dentro do wrapper */
  flex-direction: column; /* Empilha os itens verticalmente */
  justify-content: center; /* Centraliza verticalmente */
  align-items: center; /* Centraliza horizontalmente */
`;

const StackImage = styled.img`
  max-width: 80%; /* Define a largura máxima da imagem */
  margin-bottom: 20px; /* Espaço entre a imagem e o botão */
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.primary}; /* Cor do botão do tema */
  color: white; /* Cor do texto do botão */
  border: none; /* Remove a borda padrão */
  border-radius: 5px; /* Bordas arredondadas */
  font-size: 16px; /* Tamanho da fonte do botão */
  cursor: pointer; /* Cursor em forma de mão ao passar o mouse */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.halftone.blue}; /* Cor ao passar o mouse */
  }
`;

const ImageSection = () => (
  <ImageSectionWrapper id="imagesection">
    <StackImage src={myImage} alt="Descrição da Imagem" /> 
    <StackImage src="https://developers.google.com/static/community/devfest/images/header-banner.png?hl=pt-br" alt="Descrição da Imagem" />
    <Button>Inscreva-se Agora</Button>
  </ImageSectionWrapper>
);

export default ImageSection;
