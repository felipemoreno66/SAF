import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import HomeIcon from '@mui/icons-material/Home';
import LayersIcon from '@mui/icons-material/Layers';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

const SidebarContainer = styled.div`
  width: ${(props) => (props.isCollapsed ? '80px' : '250px')}; 
  height: 100vh;
  background-color: ${(props) => (props.isDarkMode ? '#1f2937' : '#ffffff')}; /* Fondo del sidebar según el modo */
  padding: 20px;
  color: ${(props) => (props.isDarkMode ? '#ffffff' : '#000000')}; /* Color del texto según el modo */
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isCollapsed ? 'center' : 'start')};
  transition: width 0.3s ease;
`;

const SidebarItem = styled.div`
  width: 100%;
  padding: 15px 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? '#4f46e5' : 'transparent')};
  color: ${(props) => (props.isDarkMode ? (props.active ? '#ffffff' : '#9ca3af') : '#000000')};
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isCollapsed ? 'center' : 'flex-start')};
  
  &:hover {
    background-color: #4f46e5;
    color: #ffffff;
  }
`;

const IconContainer = styled.div`
  margin-right: ${(props) => (props.isCollapsed ? '0' : '10px')}; 
`;

const SidebarTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: ${(props) => (props.isDarkMode ? '#ffffff' : '#000000')};
  display: ${(props) => (props.isCollapsed ? 'none' : 'block')}; 
`;

const CollapseButton = styled.div`
  margin-top: auto;
  cursor: pointer;
  display: flex;
  justify-content: ${(props) => (props.isCollapsed ? 'center' : 'flex-start')};
`;

export const Sidebar = ({ items, activeItem, onItemSelect, isDarkMode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleItemClick = (item) => {
    onItemSelect(item);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const iconMap = {
    Dashboard: <HomeIcon />,
    Pages: <LayersIcon />,
    Logout: <MeetingRoomIcon />,
  };

  return (
    <SidebarContainer isCollapsed={isCollapsed} isDarkMode={isDarkMode}>
      <SidebarTitle isCollapsed={isCollapsed} isDarkMode={isDarkMode}>Dashboard</SidebarTitle>
      {items.map((item, index) => (
        <SidebarItem 
          key={index} 
          active={item === activeItem} 
          onClick={() => handleItemClick(item)}
          isCollapsed={isCollapsed}
          isDarkMode={isDarkMode}
        >
          <IconContainer isCollapsed={isCollapsed}>
            {iconMap[item]}
          </IconContainer>
          {!isCollapsed && item}
        </SidebarItem>
      ))}
      <CollapseButton onClick={toggleCollapse} isCollapsed={isCollapsed}>
        <ArrowLeftIcon />
      </CollapseButton>
    </SidebarContainer>
  );
};
