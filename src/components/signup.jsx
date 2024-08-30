import React, {useState} from "react";
import styled from "styled-components";
import {auth} from './firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupContainer = styled.div`
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  background-color: #fff; /* Fondo blanco */
  color: #000; /* Texto negro */
`;

const Form = styled.form`
  width: 360px;
  max-width: 100%;
  background-color: #f9f9f9; /* Fondo ligeramente gris claro */
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  text-align: left;
  font-size: 0.875rem;
  margin-bottom: 5px;
  color: #555; /* Color del texto en los labels */
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  margin-top: 8px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc; /* Borde gris claro */
  background-color: #fff;
  color: #000; /* Texto negro */
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
`;

const StyledLink = styled.a`
  color: #007bff; /* Texto azul */
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Signup = ({ onNavigate }) => {

  const [name, setName]=useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      await createUserWithEmailAndPassword(auth, email, password)
      console.log("Account Created")
      alert("Se ha registrado correctamente")
      onNavigate('dashboard');
    } catch(err){
      console.log(err)
      alert("Ocurrió un error en el registro")
    }
  }

  return (
    <SignupContainer>
      <Title>Conoce todo lo que SAF Mobility tiene para ofrecerte</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Nombre *</Label>
          <Input type="text" placeholder="First and last name" 
          onChange={(e)=>setName(e.target.value)}
          required />
        </FormGroup>
        <FormGroup>
          <Label>Correo *</Label>
          <Input type="email" placeholder="you@yourcompany.com" 
          onChange={(e)=>setEmail(e.target.value)}
          required />
        </FormGroup>
        <FormGroup>
          <Label>Contraseña *</Label>
          <Input type="password" placeholder="Password" 
          onChange={(e)=>setPassword(e.target.value)}
          required />
        </FormGroup>
        <SubmitButton type="submit">Registrar</SubmitButton>
        <p>
          ¿Ya tienes una cuenta? <StyledLink href="#" onClick={() => onNavigate('login')}>Inicia Sesión</StyledLink>
        </p>
      </Form>
    </SignupContainer>
  );
};

