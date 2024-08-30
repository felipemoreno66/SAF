import React from 'react';
import styled from 'styled-components';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const ChartContainer = styled.div`
  background-color: ${(props) => (props.isDarkMode ? '#1f2937' : '#ffffff')};
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 550px;
  max-width: 850px;
  height: 100%; /* Ajusta la altura al 100% del contenedor padre */
  color: ${(props) => (props.isDarkMode ? '#ffffff' : '#000000')};
  position: relative;
`;

const SalesAnalytics = ({ isDarkMode }) => {
  const data = [
    { name: 'Jan', Carros: 35, Buses: 40, Vans: 38, SUVs: 37, Camiones: 36 },
    { name: 'Feb', Carros: 34, Buses: 39, Vans: 37, SUVs: 36, Camiones: 35 },
    { name: 'Mar', Carros: 36, Buses: 41, Vans: 39, SUVs: 38, Camiones: 37 },
    { name: 'Apr', Carros: 37, Buses: 42, Vans: 40, SUVs: 39, Camiones: 38 },
    { name: 'May', Carros: 35, Buses: 40, Vans: 38, SUVs: 37, Camiones: 36 },
    { name: 'Jun', Carros: 36, Buses: 41, Vans: 39, SUVs: 38, Camiones: 37 },
    { name: 'Jul', Carros: 37, Buses: 42, Vans: 40, SUVs: 39, Camiones: 38 },
  ];

  return (
    <ChartContainer isDarkMode={isDarkMode}>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#6b7280' : '#ccc'} /> {/* Color del grid */}
          <XAxis dataKey="name" stroke={isDarkMode ? '#ffffff' : '#000000'} /> {/* Color del texto en el eje X */}
          <YAxis 
            stroke={isDarkMode ? '#ffffff' : '#000000'} 
            domain={['dataMin - 5', 'dataMax + 5']} /* Ajusta el dominio automáticamente */
          /> 
          <Tooltip
            contentStyle={{
              backgroundColor: isDarkMode ? '#374151' : '#ffffff', /* Color de fondo del tooltip */
              color: isDarkMode ? '#ffffff' : '#000000', /* Color del texto del tooltip */
            }}
          />
          <Legend
            wrapperStyle={{
              color: isDarkMode ? '#ffffff' : '#000000', /* Color del texto de la leyenda */
            }}
          />
          <Line type="monotone" dataKey="Carros" stroke="#8884d8" />
          <Line type="monotone" dataKey="Buses" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Vans" stroke="#FFBB28" />
          <Line type="monotone" dataKey="SUVs" stroke="#FF8042" />
          <Line type="monotone" dataKey="Camiones" stroke="#0088FE" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default SalesAnalytics;
