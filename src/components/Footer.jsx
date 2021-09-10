import { EmailOutlined, Facebook, Instagram, LinkedIn, Phone, RoomOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
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
`
const Center = styled.div`
  flex: 1;
  padding: 20px;
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
`
const Right = styled.div`
  flex: 1;
  padding: 20px;
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
        <Title>Muhimu</Title>
        <List>
          <ListItem>Nyumbani</ListItem>
          <ListItem>Kikapu</ListItem>
          <ListItem>Cylinder</ListItem>
          <ListItem>Taa za Pikipiki</ListItem>
          <ListItem>Spea</ListItem>
          <ListItem>Fuatilia Oda</ListItem>
          <ListItem>Akaunti Yangu</ListItem>
          <ListItem>Pendekezo</ListItem>
          <ListItem>Masharti</ListItem>
          <ListItem>Kanuni</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Mawasiliano</Title>
        <ContactItem>
          <RoomOutlined /> <Span>Mtaa wa Sikukuu, Kariakoo, DSM</Span>
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
