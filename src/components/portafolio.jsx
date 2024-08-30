import React, { useState } from 'react';
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
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1000;
`;

// Estilos para el título de la barra lateral
const SidebarTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 3rem;
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
    margin-top: 20px;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 2.5rem;
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
  margin-left: 250px;
  margin-top: 80px;
  overflow-y: auto;
`;

// Estilos para la lista de artículos
const ProductList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductItem = styled.div`
  background-color: #fff;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 150px;
  height: auto;
  margin-right: 30px;
  border-radius: 10px;
`;

const ProductDetails = styled.div`
  flex-grow: 1;
`;

const ProductTitle = styled.h3`
  font-size: 2.5rem; /* Aumenta el tamaño del título */
  margin: 0 0 15px;
`;

const ProductPrice = styled.p`
  font-size: 2rem; /* Aumenta el tamaño del precio */
  color: #00a650;
  margin: 0 0 10px;
`;

const ProductDescription = styled.p`
  font-size: 1.8rem; /* Aumenta el tamaño de la descripción */
  margin: 0;
`;

export const Portafolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  // Lista de productos simulada con imágenes locales y categoría asociada
  const products = [
    { category: 'camiones', title: 'Camión A', price: '$50.000.000', description: 'Camión con capacidad de 10 toneladas.', image: './assets/images/camion.jpg' },
    { category: 'vans', title: 'Van B', price: '$30.000.000', description: 'Van con capacidad para 12 personas.', image: './assets/images/van.jpg' },
    { category: 'buses', title: 'Bus C', price: '$80.000.000', description: 'Bus de larga distancia con 50 asientos.', image: './assets/images/bus.jpg' },
    { category: 'suvs', title: 'SUV D', price: '$70.000.000', description: 'SUV de lujo con capacidad para 7 personas.', image: './assets/images/suv.jpg' },
    { category: 'automoviles', title: 'Automóvil E', price: '$25.000.000', description: 'Automóvil compacto con 5 asientos.', image: './assets/images/automovil.jpg' },
  ];

  const handleNavigate = (category) => {
    setSelectedCategory(category); // Actualiza la categoría seleccionada
  };

  const renderProducts = () => {
    // Si no hay categoría seleccionada, muestra todos los productos
    const filteredProducts = selectedCategory ? 
      products.filter(product => product.category === selectedCategory) 
      : products;

    return (
      <ProductList>
        {filteredProducts.map((product, index) => (
          <ProductItem key={index}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductDetails>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>{product.price}</ProductPrice>
              <ProductDescription>{product.description}</ProductDescription>
            </ProductDetails>
          </ProductItem>
        ))}
      </ProductList>
    );
  };

  return (
    <Container>
      <Sidebar>
        <SidebarTitle>Vehículos</SidebarTitle>
        <MenuList>
          <MenuItem><a href="#camiones" onClick={() => handleNavigate('camiones')}>Camiones</a></MenuItem>
          <MenuItem><a href="#vans" onClick={() => handleNavigate('vans')}>Van's</a></MenuItem>
          <MenuItem><a href="#buses" onClick={() => handleNavigate('buses')}>Buses</a></MenuItem>
          <MenuItem><a href="#suvs" onClick={() => handleNavigate('suvs')}>SUV's</a></MenuItem>
          <MenuItem><a href="#automoviles" onClick={() => handleNavigate('automoviles')}>Automóviles</a></MenuItem>
        </MenuList>
      </Sidebar>
      <MainContent>
        {renderProducts()}
      </MainContent>
    </Container>
  );
};
