import React from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  background-color: #fff;
  color: #000;
  overflow-y: auto;
`;

const Form = styled.form`
  width: 360px;
  max-width: 100%;
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

const Label = styled.label`
  font-size: 0.875rem;
  margin-bottom: 5px;
  display: block;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  margin-top: 8px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #000;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #6366f1;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
`;

const StyledLink = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ForgotPasswordLink = styled.div`
  margin-top: 10px;
  text-align: center;
`;

export const Login = ({ onNavigate }) => {
  return (
    <LoginContainer>
      <Title>Bienvenido, Nos alegra tenerte de vuelta</Title>
      <Form onSubmit={(e) => {
          e.preventDefault();
        onNavigate('dashboard'); // Cambiar el estado a 'dashboard'
      }}>
        <FormGroup>
          <Label>Correo</Label>
          <Input type="email" placeholder="you@yourcompany.com" required />
        </FormGroup>
        <FormGroup>
          <Label>Contraseña</Label>
          <Input type="password" placeholder="Password" required />
        </FormGroup>
        <SubmitButton type="submit">Iniciar Sesión</SubmitButton>
        <ForgotPasswordLink>
          <StyledLink href="#" onClick={() => onNavigate('forgot-password')}>
            ¿Olvidaste tu contraseña?
          </StyledLink>
        </ForgotPasswordLink>
        <p style={{ marginTop: '20px' }}>
          ¿Aún no tiene una cuenta? <StyledLink href="#" onClick={() => onNavigate('signup')}>Regístrate</StyledLink>
        </p>
      </Form>
    </LoginContainer>
  );
};
