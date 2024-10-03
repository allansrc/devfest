import React from 'react';
import styled from 'styled-components';

const InfoWrapper = styled.section`
  padding: 2rem;
  text-align: center;
  background-color: #f4f4f4;
`;

const EventInfo = () => (
  <InfoWrapper id="info">
    <h2>Sobre o Evento</h2>
    <p>Descrição do evento, onde será, data, etc.</p>
  </InfoWrapper>
);

export default EventInfo;
