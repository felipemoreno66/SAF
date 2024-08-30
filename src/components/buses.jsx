import React from 'react';
import styled from 'styled-components';

// Estilos para el contenedor principal
const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f4f4f4;
`;

// Estilos para la barra lateral
const Sidebar = styled.aside`
  width: 250px;
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: fixed; /* Fija el menú en la parte izquierda de la pantalla */
  top: 0;
  bottom: 0;
  z-index: 1000; /* Asegura que el menú esté por encima de otros elementos */
`;

// Estilos para el título de la barra lateral
const SidebarTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 3rem; /* Aumenta el tamaño de la fuente */
  text-align: center;
  color: #ffffff;
`;

// Estilos para la lista de opciones del menú
const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

// Estilos para cada opción del menú
const MenuItem = styled.li`
  margin-bottom: 15px;
  
  &:first-child {
    margin-top: 20px; /* Añade margen superior al primer elemento */
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 2.5rem; /* Aumenta el tamaño de la fuente */
    display: block;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #444;
    }
  }
`;

// Estilos para el contenido principal
const MainContent = styled.main`
  flex-grow: 1;
  padding: 20px;
  background-color: #fff;
  margin-left: 250px; /* Ajusta el margen izquierdo para dejar espacio al menú */
`;

export const Buses = (onNavigate) => {
  return (
    <Container>
      <Sidebar>
        <SidebarTitle>Vehículos</SidebarTitle>
        <MenuList>
          <MenuItem><a href="#camiones" onClick={() => onNavigate('camiones')}>Camiones</a></MenuItem>
          <MenuItem><a href="#vans" onClick={() => onNavigate('vans')}>Van's</a></MenuItem>
          <MenuItem><a href="#buses" onClick={() => onNavigate('buses')}>Buses</a></MenuItem>
          <MenuItem><a href="#suvs" onClick={() => onNavigate('suvs')}>SUV's</a></MenuItem>
          <MenuItem><a href="#automoviles" onClick={() => onNavigate('automoviles')}>Automóviles</a></MenuItem>
        </MenuList>
      </Sidebar>
      <MainContent>
      </MainContent>
    </Container>
  );
};
