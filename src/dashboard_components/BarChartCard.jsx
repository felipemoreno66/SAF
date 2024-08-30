import React from 'react';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CardContainer = styled.div`
  background-color: ${(props) => (props.isDarkMode ? '#1f2937' : '#ffffff')};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra el contenido en horizontal */
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  text-align: center; /* Centra el texto del título */
  margin-bottom: 10px;
  color: ${(props) => (props.isDarkMode ? '#ffffff' : '#000000')};
`;

export const BarChartCard = ({ title, data, isDarkMode, icon: Icon }) => {
  return (
    <CardContainer isDarkMode={isDarkMode}>
      <Title isDarkMode={isDarkMode}>{title}</Title>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke={isDarkMode ? '#ffffff' : '#000000'} />
          <YAxis stroke={isDarkMode ? '#ffffff' : '#000000'} />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </CardContainer>
  );
};
