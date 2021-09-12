import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5fbfd;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 50%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "80%"})}
`
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 300;
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`
const Input = styled.input`
  flex: 1;
  min-width: 50%;
  margin: 20px 10px 0 0; 
  padding: 10px;
  font-size: 1.2rem;
  ${mobile({ fontSize: "1rem"})}
  
`
const Agreement = styled.p`
  font-size: 0.8rem;
  margin: 20px 0;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin-top: 15px;
  background-color: teal;
  color: #fff;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer
`
const Desc = styled.p`
  font-size: 0.8rem;
  margin: 10px 0;
  text-decoration: none;
`
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an Account</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>Create</Button>
        </Form>
        <Link to="/login">
          <Desc>Have an Account? Login</Desc>
        </Link>
      </Wrapper>
      
    </Container>
  )
}

export default Register;
