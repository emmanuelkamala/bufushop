import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import { mobile } from '../responsive';

const Container = styled.div`

`
const Title = styled.h1`
  margin: 20px;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0 10px", display: "flex", flexDirection: "column" })}
`
const FilterText = styled.span`
  margin-right: 20px;
  font-weight: 500;
  ${mobile({ marginRight: "0" })}
`
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  outline: none;
  border-radius: 5px;
  ${mobile({ margin: "10px 0" })}
`

const Option = styled.option`
  font-size: 1rem;
  ${mobile({ fontSize: "0.7rem" })}
`

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Headlamp</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option>Silver</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Black</Option>
          </Select>
          <Select>
            <Option>Small</Option>
            <Option>Medium</Option>
            <Option>Large</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option>Price (Desc.)</Option>
            <Option>Price (Asc.)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList;
