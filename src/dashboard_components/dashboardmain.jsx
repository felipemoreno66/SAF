import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';
import { EarningCard } from './EarningCard';
import { BarChartCard } from './BarChartCard';
import SalesAnalytics from './SalesAnalytics'; // Importa el componente
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MovingIcon from '@mui/icons-material/Moving';

const DashboardContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: ${(props) => (props.isDarkMode ? '#111827' : '#f7f8fa')};  /* Fondo cambia según el modo */
  color: ${(props) => (props.isDarkMode ? '#ffffff' : '#000000')};  /* Texto cambia según el modo */
  overflow-y: hidden; /* Desactiva el scroll vertical adicional */
  height: 100vh; /* Forza que el contenedor principal ocupe exactamente la altura visible */
  display: flex;
  flex-direction: column; /* Asegura que el contenido se apile en columna */
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); /* Cambié el tamaño mínimo a 350px */
  gap: 20px;  /* Añadir más espacio entre las tarjetas */
  margin-bottom: 20px; /* Espacio entre las tarjetas y la gráfica de "Earning" */
`;

const EarningContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Dos columnas de igual tamaño */
  gap: 20px;
  width: 100%; /* Asegura que ocupe el 100% del ancho del contenedor padre */
  align-items: stretch; /* Estira los elementos para ocupar el mismo espacio */
  height: calc(100% - 200px); /* Ajusta la altura para que ocupe el espacio restante */
`;
const dataVehicleWearIndex = [
  { name: 'Camión A', value: 0.8 },
  { name: 'Bus B', value: 0.7 },
  { name: 'Van C', value: 0.6 },
  { name: 'Carro D', value: 0.5 },
  { name: 'Camión E', value: 0.9 },
  { name: 'Bus F', value: 0.65 },
  { name: 'Van G', value: 0.55 },
  { name: 'Carro H', value: 0.45 },
  { name: 'Camión I', value: 0.85 },
  { name: 'Bus J', value: 0.75 },
];

const dataEngineFailureRisk = [
  { name: 'Camión A', value: 0.15 },
  { name: 'Bus B', value: 0.25 },
  { name: 'Van C', value: 0.10 },
  { name: 'Carro D', value: 0.05 },
  { name: 'Camión E', value: 0.20 },
  { name: 'Bus F', value: 0.30 },
  { name: 'Van G', value: 0.12 },
  { name: 'Carro H', value: 0.08 },
  { name: 'Camión I', value: 0.18 },
  { name: 'Bus J', value: 0.22 },
];

const dataMaintenanceCost = [
  { name: 'Camión A', value: 12500 },
  { name: 'Bus B', value: 18300 },
  { name: 'Van C', value: 7800 },
  { name: 'Carro D', value: 5200 },
  { name: 'Camión E', value: 13700 },
  { name: 'Bus F', value: 17600 },
  { name: 'Van G', value: 8500 },
  { name: 'Carro H', value: 6000 },
  { name: 'Camión I', value: 14800 },
  { name: 'Bus J', value: 16400 },
];

const dataPreventiveMaintenanceFrequency = [
  { name: 'Camión A', value: 2.5 },
  { name: 'Bus B', value: 3.0 },
  { name: 'Van C', value: 1.5 },
  { name: 'Carro D', value: 1.0 },
  { name: 'Camión E', value: 2.8 },
  { name: 'Bus F', value: 2.9 },
  { name: 'Van G', value: 1.8 },
  { name: 'Carro H', value: 1.2 },
  { name: 'Camión I', value: 2.7 },
  { name: 'Bus J', value: 2.4 },
];
const dataKmBuses = [
  { name: 'Enero', value: 12000 },
  { name: 'Febrero', value: 11500 },
  { name: 'Marzo', value: 12500 },
  { name: 'Abril', value: 13000 },
  { name: 'Mayo', value: 12800 },
  { name: 'Junio', value: 13500 },
  { name: 'Julio', value: 14000 },
  { name: 'Agosto', value: 13800 },
  { name: 'Septiembre', value: 14200 },
  { name: 'Octubre', value: 14500 },
];

const dataKmVans = [
  { name: 'Enero', value: 10000 },
  { name: 'Febrero', value: 9500 },
  { name: 'Marzo', value: 10500 },
  { name: 'Abril', value: 11000 },
  { name: 'Mayo', value: 10800 },
  { name: 'Junio', value: 11500 },
  { name: 'Julio', value: 11800 },
  { name: 'Agosto', value: 12000 },
  { name: 'Septiembre', value: 12200 },
  { name: 'Octubre', value: 12500 },
];

const dataKmSUVs = [
  { name: 'Enero', value: 11000 },
  { name: 'Febrero', value: 10500 },
  { name: 'Marzo', value: 11500 },
  { name: 'Abril', value: 11800 },
  { name: 'Mayo', value: 12000 },
  { name: 'Junio', value: 12500 },
  { name: 'Julio', value: 13000 },
  { name: 'Agosto', value: 12800 },
  { name: 'Septiembre', value: 13200 },
  { name: 'Octubre', value: 13500 },
];

const dataKmCarros = [
  { name: 'Enero', value: 15000 },
  { name: 'Febrero', value: 14500 },
  { name: 'Marzo', value: 15500 },
  { name: 'Abril', value: 16000 },
  { name: 'Mayo', value: 15800 },
  { name: 'Junio', value: 16500 },
  { name: 'Julio', value: 17000 },
  { name: 'Agosto', value: 17200 },
  { name: 'Septiembre', value: 17500 },
  { name: 'Octubre', value: 17800 },
];
export const DashboardMain = ({ isDarkMode }) => {
  return (
    <DashboardContainer isDarkMode={isDarkMode}>
      <h1 style={{ marginBottom: '20px' }}>Dashboard</h1>
      <CardsContainer>
      <BarChartCard
          title="Índice de Desgaste del Vehículo (0-1)"
          data={dataVehicleWearIndex}
          isDarkMode={isDarkMode}
          icon={PersonOutlineIcon}
        />
        <BarChartCard
          title="Costo Acumulado de Mantenimiento (USD)"
          data={dataMaintenanceCost}
          isDarkMode={isDarkMode}
          icon={MovingIcon}
        />
        <BarChartCard
          title="Riesgo de Avería del Motor (0-1)"
          data={dataEngineFailureRisk}
          isDarkMode={isDarkMode}
          icon={PersonOutlineIcon}
        />
        <BarChartCard
          title="Frecuencia de Mantenimiento Preventivo (por cada 10,000 km)"
          data={dataPreventiveMaintenanceFrequency}
          isDarkMode={isDarkMode}
          icon={MovingIcon}
        />
        <Card 
          title="Kilómetros Recorridos - Buses" 
          value="14,500 km"  // Último valor del array dataKmBuses
          description="Km recorridos por los buses en los ultimos meses" 
          data={dataKmBuses} 
          isDarkMode={isDarkMode} 
          bgColor="#A78BFA"  // Color morado
          icon={PersonOutlineIcon}
        />
        <Card 
          title="Kilómetros Recorridos - Vans" 
          value="12,500 km"  // Último valor del array dataKmVans
          description="Km recorridos por las vans en los ultimos meses" 
          data={dataKmVans } 
          isDarkMode={isDarkMode} 
          bgColor="#06B6D4"  // Color cyan
          icon={MovingIcon}
        />
        <Card 
          title="Kilómetros Recorridos - SUVs" 
          value="13,500 km"  // Último valor del array dataKmSUVs
          description="Km recorridos por los SUVs en los ultimos meses" 
          data={dataKmSUVs} 
          isDarkMode={isDarkMode} 
          bgColor="#A78BFA"  // Color morado
          icon={PersonOutlineIcon}
        />
        <Card 
          title="Kilómetros Recorridos - Carros" 
          value="17,800 km"  // Último valor del array dataKmCarros
          description="Km recorridos por los carros en los ultimos meses" 
          data={dataKmCarros} 
          isDarkMode={isDarkMode} 
          bgColor="#06B6D4"  // Color cyan
          icon={MovingIcon}
        />
      </CardsContainer>
      <EarningContainer>
        <EarningCard isDarkMode={isDarkMode} />
        <SalesAnalytics isDarkMode={isDarkMode} /> {/* Añade la gráfica aquí */}
      </EarningContainer>
    </DashboardContainer>
  );
};