import { SendOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 40vh;
  background-color: #f5fbfd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;
`
const Description = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 20px;
`
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid lightgray;
`
const Input = styled.input`
  border: none;
  flex: 9;
  height: 100%;
  outline: none;
  padding-left: 20px;
`
const Button = styled.button`
  flex: 1;
  height: 100%;
  border: none;
  background-color: teal;
  color: whitesmoke;
  cursor: pointer;
`

const Newsletter = () => {
  return (
    <Container>
      <Title>Habari</Title>
      <Description>Pata taarifa zaidi ya bidhaa zako pendwa.</Description>
      <InputContainer>
        <Input placeholder="Andika barua pepe" />
        <Button>
          <SendOutlined />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter;
