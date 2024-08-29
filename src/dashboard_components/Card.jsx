import React from 'react';
import styled from 'styled-components';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MovingIcon from '@mui/icons-material/Moving';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';

const CardContainer = styled.div`
  background-color: ${(props) => (props.isDarkMode ? '#1f2937' : '#ffffff')};  /* Fondo cambia según el modo */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 200px;
  max-width: 300px;
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
  color: #6b7280; /* Color del icono */
`;

const ValueContainer = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? '#ffffff' : '#000000')};
`;

const Description = styled.div`
  color: #6b7280; /* Gris claro */
`;

export const Card = ({ title, value, description, data, isDarkMode }) => {
  return (
    <CardContainer isDarkMode={isDarkMode}>
      <Header>
        <IconContainer>
          <PersonOutlineIcon />
        </IconContainer>
        <div>
          <ValueContainer>{value}</ValueContainer>
          <Description>{description}</Description>
        </div>
      </Header>
      <ResponsiveContainer width="100%" height={50}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </CardContainer>
  );
};
