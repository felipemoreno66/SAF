import React from 'react';
import styled from 'styled-components';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

const CardContainer = styled.div`
  background-color: ${(props) => (props.isDarkMode ? '#1f2937' : '#ffffff')};
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 550px;
  max-width: ${(props) => (props.isSidebarVisible ? '800px' : '100%')}; /* Ajuste dinámico del ancho máximo */
  color: ${(props) => (props.isDarkMode ? '#ffffff' : '#000000')};
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: max-width 0.3s ease; /* Transición suave al cambiar el tamaño */
`;

const EarningContainer = styled.div`
  flex: 1;
`;

const Value = styled.div`
  font-size: 5.5rem; /* Aumenta el tamaño de la fuente */
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? '#10B981' : '#10B981')};
`;

const Description = styled.p`
  font-size: 1.5rem; /* Aumenta el tamaño del texto */
  color: ${(props) => (props.isDarkMode ? '#ffffff' : '#000000')}; /* Cambia a blanco en modo oscuro */
`;

const EarningChart = styled.div`
  width: 500px; /* Cambié el ancho a 500px para asegurar que el gráfico tenga espacio */
  height: 350px;
`;

export const EarningCard = ({ isDarkMode, isSidebarVisible }) => {
  const data = [
    { name: 'Buses', value: 1200 },
    { name: 'Vans', value: 900 },
    { name: 'SUVs', value: 1500 },
    { name: 'Carros', value: 1100 },
    { name: 'Camiones', value: 1300 },
  ];

  const COLORS = ['#A78BFA', '#5EEAD4', '#60A5FA'];

  return (
    <CardContainer isDarkMode={isDarkMode} isSidebarVisible={isSidebarVisible}>
      <EarningContainer>
        <h3 style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>GANANCIAS</h3>
        <Description isDarkMode={isDarkMode}>Ultimo més</Description>
        <Value>$5070.80</Value>
      </EarningContainer>
      <EarningChart>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="40%"
              innerRadius={80}
              outerRadius={140}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </EarningChart>
    </CardContainer>
  );
};
