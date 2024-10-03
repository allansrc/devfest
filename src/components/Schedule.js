import React from 'react';
import styled from 'styled-components';

const ScheduleWrapper = styled.section`
  padding: 2rem;
  background-color: #f4f4f4;
  text-align: center;
`;

const ScheduleItem = styled.div`
  margin: 1rem 0;
`;

const Schedule = () => (
  <ScheduleWrapper id="schedule">
    <h2>Agenda</h2>
    <ScheduleItem>
      <h4>10:00 - Abertura</h4>
      <p>Descrição da sessão</p>
    </ScheduleItem>
    {/* Repita para mais itens da agenda */}
  </ScheduleWrapper>
);

export default Schedule;
