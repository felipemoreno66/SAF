import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #2d3748;  /* Otro fondo diferente para identificar */
  color: #ffffff;
  overflow-y: auto;
`;

export const Page2 = () => {
  return (
    <PageContainer>
      <h1>Page 2</h1>
      <p>Content of Page 2.</p>
    </PageContainer>
  );
};
