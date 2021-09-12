import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
  height: 30px;
  background-color: rgb(2, 165, 165);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
      {/* Ofa! Agiza mzigo wa kwanza, tukutumie bila gharama ya usafirishaji! */}
      Super Deal! Free Shipping on Orders Over 100,000/=
    </Container>
  )
}

export default Announcement;
