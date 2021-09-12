import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5fbfd;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
`
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 300;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  flex: 1;
  min-width: 50%;
  margin: 10px 0; 
  padding: 10px;
  font-size: 1.2rem;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin: 15px 0;
  background-color: teal;
  color: #fff;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer
`
const Link = styled.a`
  margin: 5px 0;
  font-size: 0.8rem;
  text-decoration: underline;
  cursor: pointer;
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>Login</Button>
          <Link>Forgot password?</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login;
