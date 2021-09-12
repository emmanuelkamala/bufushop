import { EmailOutlined, Facebook, Instagram, LinkedIn, Phone, RoomOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  background-color: #fff8f5;
  ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1`

`
const Desc = styled.p`
  margin: 20px 0;
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
`
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`
const Title = styled.h3`
  margin-bottom: 30px;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#eee" })}
`
const ContactItem = styled.p`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`
const Span = styled.span`
  margin-left: 10px;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>BufuShop</Logo>
        <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.Debitis laborum, non deleniti reiciendis deserunt laboriosam sit tempore.</Desc>
        <SocialContainer>
          <SocialIcon color="3b5999">
           <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon> 
          <SocialIcon color="0077b5">
            <LinkedIn />
          </SocialIcon> 
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Cylinder</ListItem>
          <ListItem>Headlamp</ListItem>
          <ListItem>Spare parts</ListItem>
          <ListItem>Check Order</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Policy</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomOutlined /> <Span>Sikukuu Street, Kariakoo, DSM</Span>
        </ContactItem>
        <ContactItem>
          <Phone /> <Span>+255713827012</Span>
        </ContactItem>
        <ContactItem>
          <EmailOutlined /> <Span>info@bufushop.co.tz</Span>
        </ContactItem>
      </Right>
    </Container>
  )
}

export default Footer;
