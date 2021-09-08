import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === 'left' && '10px'};
  right: ${props => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
`
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg}
`
const Image = styled.img`
  height: 80%;
`

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`
const Title = styled.h1`
  font-size: 70px;
`
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`


const Slider = () => {
  return (
    <Container>
      <Arrow direction='left'>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide bg='f5fafd'>
          <ImgContainer>
            <Image src='https://siamagazin.com/wp-content/uploads/2021/03/34h5t22rereerer-min.jpg' />
          </ImgContainer>
          <InfoContainer>
            <Title>Ofa Mpya</Title>
            <Desc>Bidhaa bora kabisa za spare zapatikana BufuShop</Desc>
            <Button>Nunua Sasa</Button>
          </InfoContainer>
        </Slide>
        <Slide bg='fcf1ed'>
          <ImgContainer>
            <Image src='https://www.bikesmedia.in/uploads/image/reviews/2014/dec/clutch-assembly.jpg' />
          </ImgContainer>
          <InfoContainer>
            <Title>Bidhaa Inayouza Sana</Title>
            <Desc>BufuShop inakupa punguzo zuri la bei</Desc>
            <Button>Nunua Sasa</Button>
          </InfoContainer>
        </Slide>
        <Slide bg='fbf0f4'>
          <ImgContainer>
            <Image src='https://wp.bikebandit.com/wp-content/uploads/2019/06/Depositphotos_19208081_l-2015-1024x680.jpg' />
          </ImgContainer>
          <InfoContainer>
            <Title>Bidhaa Maradufu</Title>
            <Desc>Sehemu pekee ya kupata ubora ni BufuShop</Desc>
            <Button>Nunua Sasa</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction='right'>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider;
