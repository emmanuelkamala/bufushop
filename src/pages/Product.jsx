import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const Container = styled.div``

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`

const ImgContainer = styled.div`
  flex: 1;
`

const Img = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`

const Title = styled.h1`
  font-weight: 200;
`

const Desc = styled.p`
  margin: 20px 0;
`

const Price = styled.p`
  font-weight: 200;
  font-size: 30px;
`
const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-right: 20px;
`
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0 5px;
  cursor: pointer;
`
const FilterSize = styled.select`
  padding: 5px;
`
const FilterSizeOption = styled.option`

`

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Img src="https://ae01.alicdn.com/kf/H14e21d6f5f88494999b4b3cd62bf8159D/Motorcycle-Clutch-Basket-for-HONDA-CG125-CG-125-Spare-Parts.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>Clutch Basket</Title>
          <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro deleniti, maiores molestias quaerat. Laboriosam quisquam, quasi eum debitis harum assumenda reiciendis architecto!</Desc>
          <Price>20,000/=</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="gray" />
              <FilterColor color="silver" />
            </Filter>
            <Filter>
            <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product;
