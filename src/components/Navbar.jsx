import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  height: 100px;
  background-color: rgb(1, 117, 117);
  color: whitesmoke;
  ${mobile({ height: "80px" })}
`

const Wrapper = styled.div`
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0" })}
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
  ${mobile({ padding: "0", backgroundColor: "whitesmoke", borderRadius: "2px" })}
`
const Input = styled.input`
  border: none;
  outline: none;
  height: 100%;
  background-color: transparent;
  ${mobile({ width: "50px" })}
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Logo = styled.h1`
  font-weight: 700;
  ${mobile({ fontSize: "1.4rem", marginLeft: "2px" })}
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>SW</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: 'gray', fontSize: 16}} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: "none", color: "#fff"}}>
            <Logo>BufuShop</Logo>
          </Link>
        </Center>
        <Right>
          <MenuItem>
            <Link to="/register" style={{ textDecoration: "none", color: "#fff"}}>
              Register
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login" style={{ textDecoration: "none", color: "#fff"}}>
              Login
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/cart" style={{ textDecoration: "none", color: "#fff"}}>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar;
