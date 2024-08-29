import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';

const DashboardContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: ${(props) => (props.isDarkMode ? '#111827' : '#f7f8fa')};  /* Fondo cambia según el modo */
  color: ${(props) => (props.isDarkMode ? '#ffffff' : '#000000')};  /* Texto cambia según el modo */
  overflow-y: auto;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const data = [
  { name: 'Jan', value: 3000 },
  { name: 'Feb', value: 2000 },
  { name: 'Mar', value: 2780 },
  { name: 'Apr', value: 1890 },
  { name: 'May', value: 2390 },
  { name: 'Jun', value: 3490 },
];

export const DashboardMain = ({ isDarkMode }) => {
  return (
    <DashboardContainer isDarkMode={isDarkMode}>
      <h1 style={{ marginBottom: '20px' }}>Dashboard</h1>
      <CardsContainer>
        <Card 
          title="Customers" 
          value="12.4k" 
          description="Customers" 
          data={data} 
          isDarkMode={isDarkMode} 
        />
        <Card 
          title="Visits" 
          value="-2.6k" 
          description="Visits" 
          data={data} 
          isDarkMode={isDarkMode} 
        />
        <Card 
          title="Orders" 
          value="34.4k" 
          description="Orders" 
          data={data} 
          isDarkMode={isDarkMode} 
        />
      </CardsContainer>
    </DashboardContainer>
  );
};
