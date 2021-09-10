import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';

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
`
const FilterText = styled.span`
  margin: 20px;
  font-weight: 500;
`
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  outline: none;
`

const Option = styled.option`
  font-size: 1rem;
`

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Taa</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Chuja bidhaa:</FilterText>
          <Select>
            <Option disabled selected>Rangi</Option>
            <Option>Kijivu</Option>
            <Option>Blu</Option>
            <Option>Njano</Option>
            <Option>Nyeusi</Option>
          </Select>
          <Select>
            <Option disabled selected>Saizi</Option>
            <Option>Ndogo</Option>
            <Option>Kati</Option>
            <Option>Kubwa</Option>
            <Option>Kubwa zaidi</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Panga bidhaa:</FilterText>
          <Select>
            <Option selected>Mpya</Option>
            <Option>Bei (ya chini kwenda juu)</Option>
            <Option>Bei (ya juu kwenda chini)</Option>
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
