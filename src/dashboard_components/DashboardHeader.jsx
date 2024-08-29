import React from 'react';
import styled from 'styled-components';
import NightlightIcon from '@mui/icons-material/Nightlight';

const HeaderContainer = styled.div`
  width: 100%;
  padding: 10px 20px;
  background-color: ${(props) => (props.isDarkMode ? '#1f2937' : '#ffffff')}; /* Color del fondo según el modo */
  color: ${(props) => (props.isDarkMode ? '#ffffff' : '#000000')}; /* Color del texto según el modo */
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const ImageContainer = styled.div`
  width: 40px;
  height: 40px;
  background-color: #4f46e5;
  border-radius: 50%;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ToggleButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const DashboardHeader = ({ title, imageUrl, isDarkMode, toggleDarkMode }) => {
  return (
    <HeaderContainer isDarkMode={isDarkMode}>
      <Title>{title}</Title>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <ImageContainer>
          {imageUrl ? <Image src={imageUrl} alt="Profile" /> : null}
        </ImageContainer>
        <ToggleButton onClick={toggleDarkMode}>
          <NightlightIcon style={{ color: isDarkMode ? '#ffffff' : '#000000', marginLeft: '20px' }} />
        </ToggleButton>
      </div>
    </HeaderContainer>
  );
};