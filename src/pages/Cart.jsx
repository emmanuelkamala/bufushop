import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';

const Container = styled.div`

`
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
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
${mobile({ display: "none" })}
`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`
const Info = styled.div`
  flex: 3;
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", marginBottom: "30px" })}
`
const ProductDetail = styled.div`
  display: flex;
  flex: 2;
`
const Image = styled.img`
  width: 10vw;
  object-fit: cover;
  ${mobile({ height: "100%", width: "50%" })}
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
  font-size: 1.2rem;
  margin: 5px;
  border: 1px solid teal;
  padding: 3px;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ProductPrice = styled.div`
  font-size: 1.4rem;
  font-weight: 300;
`
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  width: 80%;
`
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid teal;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`
const SummaryTitle = styled.h2`
  font-weight: 500;
`
const SummaryItem = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" && "500"};
  font-size: ${props => props.type === "total" && "1.5rem"};
`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: gray;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 10px;

  &:hover{
    background-color: black;
    transition: all 0.7s ease-in;
  }
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
                <Image src="https://www.baakmotocyclettes.com/6462-large_default/classic-motorcycle-headlight.jpg" />
                <Details>
                  <ProductName><b>Product: </b>Headlamp</ProductName>
                  <ProductId><b>ID: </b>768685959</ProductId>
                  <ProductColor color="black" />
                  <ProductSize><b>Size: </b>M</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove />
                  <ProductQuantity>1</ProductQuantity>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>15,000/=</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>25,000/=</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>5,000/=</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>-5,000/=</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>25,000/=</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart;
