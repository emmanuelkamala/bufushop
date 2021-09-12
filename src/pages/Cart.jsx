import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div`

`
const Wrapper = styled.div`
  padding: 20px;
`
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`
const TopButton = styled.button`
  font-weight: 600;
  padding: 10px;
  cursor: pointer;
  border: ${props => props.type === "filled" && "none"};
  border-radius: 5px;
  background-color: ${props => props.type === "filled" ? "black" : "transparent"};
  color: ${props => props.type === "filled" && "white"};
`
const TopTexts = styled.div`

`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`
const Info = styled.div`
  flex: 3;
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProductDetail = styled.div`
  display: flex;
  flex: 2;
`
const Image = styled.img`
  width: 10vw;
  object-fit: cover;
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-around;
`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
`
const ProductSize = styled.span`

`
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
const ProductQuantity = styled.div`
  font-size: 1.5rem;
  margin: 5px;
`
const ProductPrice = styled.div`
  font-size: 1.6rem;
  font-weight: 300;
`
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`
const Summary = styled.div`
  flex: 1;
`
const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Cart Items</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://pyxis.nymag.com/v1/imgs/685/70f/5ab8dd9515505f9f05e0eedc3fb4f57bde-helmet.jpg" />
                <Details>
                  <ProductName><b>Product: </b>Helmet</ProductName>
                  <ProductId><b>ID: </b>768689004</ProductId>
                  <ProductColor color="blue" />
                  <ProductSize><b>Size: </b>22.5</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove />
                  <ProductQuantity>2</ProductQuantity>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>10,000/=</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://pyxis.nymag.com/v1/imgs/685/70f/5ab8dd9515505f9f05e0eedc3fb4f57bde-helmet.jpg" />
                <Details>
                  <ProductName><b>Product: </b>Helmet</ProductName>
                  <ProductId><b>ID: </b>768689004</ProductId>
                  <ProductColor color="blue" />
                  <ProductSize><b>Size: </b>22.5</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove />
                  <ProductQuantity>2</ProductQuantity>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>10,000/=</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>Summary</Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart;
