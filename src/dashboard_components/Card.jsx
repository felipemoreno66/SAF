import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';

const CardContainer = styled.div`
  background-color: ${(props) => (props.isDarkMode ? '#1f2937' : '#ffffff')};  /* Fondo cambia según el modo */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 350px;
  max-width: 400px;
  color: ${(props) => (props.isDarkMode ? '#ffffff' : '#000000')};  /* Texto cambia según el modo */
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconContainer = styled.div`
  font-size: 2rem;
  color: ${(props) => (props.isDarkMode ? '#ffffff' : '#6b7280')}; /* Color del icono */
`;

const ValueContainer = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? '#ffffff' : '#000000')};  /* Cambia el color del valor */
`;

const Description = styled.div`
  color: ${(props) => (props.isDarkMode ? '#ffffff' : '#000000')}; /* Cambia a negro en modo claro */
`;

// Función para personalizar el contenido del tooltip
const CustomTooltip = ({ active, payload, label, isDarkMode }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ 
          backgroundColor: isDarkMode ? '#1f2937' : '#ffffff', 
          color: isDarkMode ? '#ffffff' : '#000000',
          padding: '5px', 
          border: `1px solid ${isDarkMode ? '#444' : '#cccccc'}` 
      }}>
        <p>{`${label} : ${payload[0].value} km`}</p>
      </div>
    );
  }

  return null;
};

export const Card = ({ title, value, description, data, isDarkMode, icon: Icon, bgColor }) => {
  return (
    <CardContainer isDarkMode={isDarkMode} style={{ backgroundColor: bgColor || (isDarkMode ? '#1f2937' : '#ffffff') }}>
      <Header>
        <IconContainer>
          <Icon />
        </IconContainer>
        <div>
          <ValueContainer isDarkMode={isDarkMode}>{value}</ValueContainer>
          <Description isDarkMode={isDarkMode}>{description}</Description>
        </div>
      </Header>
      <ResponsiveContainer width="100%" height={50}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
          <Tooltip content={<CustomTooltip isDarkMode={isDarkMode} />} />
        </LineChart>
      </ResponsiveContainer>
    </CardContainer>
  );
};
