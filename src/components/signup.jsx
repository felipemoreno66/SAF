import React, { useState, useContext } from "react";
import styled from "styled-components";
import {auth} from './firebase';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { UserContext } from './UserContext';

const SignupContainer = styled.div`
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

const FormGroup = styled.div`
  margin-bottom: 5px;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  text-align: left;
  font-size: 2rem;
  margin-bottom: 1px;
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

export const Signup = ({ onNavigate }) => {

  const [name, setName]=useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const { setUser } = useContext(UserContext);
  
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(auth.currentUser, { displayName: name });
      setUser({ name, email });
      console.log("Account Created");
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

