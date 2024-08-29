import React from "react";
import styled from "styled-components";

const ForgotPasswordContainer = styled.div`
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  background-color: #fff;
  color: #000;
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

const Subtitle = styled.p`
  margin-bottom: 40px;
  color: #666;
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
`;

const CancelLink = styled.a`
  color: #6366f1;
  text-decoration: none;
  margin-top: 20px;
  display: block;
  &:hover {
    text-decoration: underline;
  }
`;

export const Portafolio = ({ onNavigate }) => {
  return (
    <ForgotPasswordContainer>
      <Title>¿Olvidaste tu contraseña?</Title>
      <Subtitle>Te enviaremos instrucciones sobre cómo restablecerla.</Subtitle>
      <Form>
        <FormGroup>
          <Label>Correo</Label>
          <Input type="email" placeholder="you@yourcompany.com" required />
        </FormGroup>
        <SubmitButton type="submit">Restablecer Contraseña</SubmitButton>
        <CancelLink href="#" onClick={() => onNavigate('login')}>Cancelar</CancelLink>
      </Form>
    </ForgotPasswordContainer>
  );
};

