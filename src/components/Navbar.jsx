import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100px;
  background-color: rgb(1, 117, 117);
  color: whitesmoke;
`

const Wrapper = styled.div`
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const SearchContainer = styled.div`
  border: 0.3px solid lightgray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  cursor: pointer;
`
const Input = styled.input`
  border: none;
  outline: none;
  height: 100%;
  background-color: transparent;
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Logo = styled.h1`
  font-weight: 700;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>SW</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: 'gray', fontSize: 16}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>BufuShop</Logo>
        </Center>
        <Right>
          <MenuItem>Sajili</MenuItem>
          <MenuItem>Ingia</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar;
