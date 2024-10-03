import React from 'react';
import styled from 'styled-components';

const SpeakersWrapper = styled.section`
  padding: 2rem;
  background-color: white;
  text-align: center;
`;

const SpeakerCard = styled.div`
  display: inline-block;
  margin: 1rem;
  text-align: center;
`;

const Speakers = () => (
  <SpeakersWrapper id="speakers">
    <h2>Palestrantes</h2>
    <SpeakerCard>
      <img src="/path-to-image.jpg" alt="Speaker" width="150" />
      <h3>Nome do Palestrante</h3>
      <p>Descrição curta</p>
    </SpeakerCard>
    {/* Repita para mais palestrantes */}
  </SpeakersWrapper>
);

export default Speakers;
