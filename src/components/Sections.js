import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.offWhite}; /* Cor de fundo das seções */
  margin-top: 20px; /* Margem acima para separar da imagem */

  &:nth-of-type(even) {
    background-color: ${({ theme }) => theme.colors.pastel.blue}; /* Altera a cor em seções pares */
  }
`;

const Sections = () => {
  return (
    <>
      <Section id="home">Conteúdo da Home</Section>
      <Section id="speakers">Conteúdo dos Speakers</Section>
      <Section id="info">Conteúdo da Info</Section>
      <Section id="agenda">Conteúdo da Agenda</Section>
      <Section id="footer">Conteúdo do Footer</Section>
    </>
  );
};

export default Sections;
