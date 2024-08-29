import React, { useState } from 'react';
import styled from 'styled-components';
import { Sidebar } from '../dashboard_components/Sidebar';
import { DashboardMain } from '../dashboard_components/dashboardmain';
import { Page1 } from '../dashboard_components/Page1';
import { Page2 } from '../dashboard_components/Page2';
import { DashboardHeader } from '../dashboard_components/DashboardHeader';

const DashboardWrapper = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${(props) => (props.isDarkMode ? '#111827' : '#f7f8fa')}; /* Fondo del dashboard según el modo */
  color: ${(props) => (props.isDarkMode ? '#ffffff' : '#000000')}; /* Color del texto según el modo */
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Dashboard = () => {
    const [activeItem, setActiveItem] = useState('Dashboard');
    const [isDarkMode, setIsDarkMode] = useState(false); // Estado para manejar el modo oscuro
  
    const sidebarItems = ['Dashboard', 'Pages', 'Logout'];
  
    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };
  
    const renderContent = () => {
      switch (activeItem) {
        case 'Dashboard':
          return <DashboardMain isDarkMode={isDarkMode} />;
        case 'Page1':
          return <Page1 isDarkMode={isDarkMode} />;
        case 'Page2':
          return <Page2 isDarkMode={isDarkMode} />;
        default:
          return <DashboardMain isDarkMode={isDarkMode} />;
      }
    };
  
    return (
      <DashboardWrapper isDarkMode={isDarkMode}>
        <Sidebar 
          items={sidebarItems} 
          activeItem={activeItem} 
          onItemSelect={setActiveItem} 
          isDarkMode={isDarkMode}
        />
        <ContentWrapper>
          <DashboardHeader 
            title="Dashboard" 
            imageUrl={null} 
            isDarkMode={isDarkMode} 
            toggleDarkMode={toggleDarkMode} 
          />
          {renderContent()}
        </ContentWrapper>
      </DashboardWrapper>
    );
  };
  
