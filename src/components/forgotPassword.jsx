import React, {useState} from "react";
import styled from "styled-components";
import { sendPasswordResetEmail } from "firebase/auth";
import {auth} from "./firebase";

const ForgotPasswordContainer = styled.div`
  padding-top: 100px;
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
  width: 400px;
  max-width: 100%;
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  margin-bottom: 10px;
  color: #666;
`;

const FormGroup = styled.div`
  margin-bottom: 5px;
  text-align: left;
`;

const Label = styled.label`
  font-size: 2rem;
  margin-bottom: 1px;
  display: block;
  color: #000000;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #000;
  font-size: 1.5rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 5px;
  background-color: #6366f1;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 2rem;
  cursor: pointer;
  margin-top: 2px;
`;

const CancelLink = styled.a`
  color: #6366f1;
  text-decoration: none;
  margin-top: 10px;
  display: block;
  &:hover {
    text-decoration: underline;
  }
`;

export const ForgotPassword = ({ onNavigate }) => {

  const [email, setEmail]=useState('')
  const handleSubmit=async(e)=>{
    e.preventDefault()
    sendPasswordResetEmail(auth,email).then(data=>{
      alert("El enlace para restablecer su contraseña fue enviado")
    }).catch(err=>{
      alert("No fue posible enviar enlace de restablecimiento")
    })
  }

  return (
    <ForgotPasswordContainer>
      <Title>¿Olvidaste tu contraseña?</Title>
      <Subtitle>Te enviaremos instrucciones sobre cómo restablecerla.</Subtitle>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Correo</Label>
          <Input type="email" placeholder="you@yourcompany.com" 
          onChange={(e)=>setEmail(e.target.value)}
          required />
        </FormGroup>
        <SubmitButton type="submit">Restablecer Contraseña</SubmitButton>
        <CancelLink href="#" onClick={() => onNavigate('login')}>Cancelar</CancelLink>
      </Form>
    </ForgotPasswordContainer>
  );
};

