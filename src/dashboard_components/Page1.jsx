import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #1a202c;  /* Fondo diferente para identificar */
  color: #ffffff;
  overflow-y: auto;
`;

export const Page1 = () => {
  return (
    <PageContainer>
      <h1>Page 1</h1>
      <p>Content of Page 1.</p>
    </PageContainer>
  );
};
