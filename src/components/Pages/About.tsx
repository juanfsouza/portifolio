
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import Imagem from '../../assets/images/script.png';
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    top: 200px;
    left: 300px;
  }
  100% {
    opacity: 1;
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.nav`
    font-size: 30px;
    display: flex;
    backdrop-filter: blur(50px);
    height: 70vh;
    animation: ${fadeIn} 1s ease-in;
`;

const Background = styled.div`

`;

const Text = styled.div`
    margin: 50px;
    color: #cccccc;
    font-size: 20px;
    max-width: 55%;
    word-wrap: break-word;
    animation: ${fadeIn} 1s ease-in;
`;

const Titulo = styled.div`
    margin: 50px;
    color: #ffffff;
    animation: ${fadeIn} 1s ease-in;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
    max-width: 20%;
    opacity: 0.6;
    animation: ${fadeIn} 1s ease-in;

  @media (max-width: 768px) {
    max-width: 50%;
  }
`;

const Line = styled.div`
    background-color: #7808c4;
    display: block;
    left: 0vw;
    height: 1px;
    position: absolute;
    top: 16%;
    transform: translateY(-50%);
    width: 55.2vw;
    animation: ${fadeIn} 1s ease-in;

  @media (max-width: 768px) {
    top: 10%;
    width: 80%;
    left: 10%;
  }
`;

const Lines = styled.div`
    background-color: #7808c4;
    content: '';
    display: block;
    left: 54.6vw;
    height: 1px;
    position: absolute;
    top: 15%;
    transform: rotate(45deg);
    width: 12px;
    animation: ${fadeIn} 1s ease-in;

  @media (max-width: 768px) {
    top: 15%;
    left: 48%;
  }
`;

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    
  }, []);

  return (
    <Container>
      <GlobalStyle />
      <Background>
        <Titulo>ABOUT ME</Titulo>
        <Line />
        <Lines />
        <Content>
          <Image data-aos="fade-right" src={Imagem} alt="Imagem" />
          <Text data-aos="fade-left">
            Começo da Minha trajetória: O Primeiro contato com a programação foi em 2015 onde jogo chamado Tíbia que eu
            jogava naquela época gostava bastante, o fato e que não tinha PC bom :p, enquanto eu jogava conheci um amigo
            que programava tíbia e comecei pegar gosto em criar algo porque no tíbia você pode criar tudo e nisso ele me
            passou site 'XtibiaKing' onde tem vários programadores que fazem mesma coisa que ele, no site conheci C# e
            MySql a estudar e acabei gostando bastaste, anos se passaram até 2022 onde comecei a estudar programação
            para front-end e acabei gostando muito apesar ser diferente de criar um jogo.
          </Text>
        </Content>
      </Background>
    </Container>
  );
}

export default About;
