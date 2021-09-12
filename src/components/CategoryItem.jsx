import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 60vh;
  position: relative;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  ${mobile({ height: "30vh" })}
`
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`
const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px;
  background-color: teal;
  color: white;
  font-weight: 700;
  cursor: pointer;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img} alt={item.title} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Nunua Sasa</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem;
