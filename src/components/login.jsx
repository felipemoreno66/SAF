import React, { useState, useContext } from "react";
import styled from "styled-components";
import {auth} from './firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from '../UserContext';

const LoginContainer = styled.div`
  padding-top: 100px;
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
const StyledLink = styled.a`
  color: ##6366F1;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const ForgotPasswordLink = styled.div`
  font-size: 2rem;
  margin-top: 10px;
  text-align: center;
`;

export const Login = ({ onNavigate }) => {

  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const { setUser } = useContext(UserContext);
  
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setUser({ name: user.displayName, email: user.email });
      console.log("Login Succesfully")
      alert("Ha iniciado sesión correctamente")
      onNavigate('dashboard');
    } catch(err){
      console.log(err)
      alert("No fue posible iniciar sesión")
    }
  }

  return (
    <LoginContainer>
      <Title>Bienvenido, Nos alegra tenerte de vuelta</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Correo</Label>
          <Input type="email" placeholder="you@yourcompany.com" 
          onChange={(e)=>setEmail(e.target.value)}
          required />
        </FormGroup>
        <FormGroup>
          <Label>Contraseña</Label>
          <Input type="password" placeholder="Password" 
          onChange={(e)=>setPassword(e.target.value)}
          required />
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
