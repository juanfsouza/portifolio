import styled, { keyframes } from 'styled-components';
import ImagemSVG from '../../assets/images/git-original.svg';
import ImagemSVGA from '../../assets/images/javascript-original.svg';
import ImagemSVGB from '../../assets/images/firebase-plain-wordmark.svg';
import ImagemSVGC from '../../assets/images/mongodb-original.svg';
import ImagemSVGE from '../../assets/images/nodejs-original.svg';
import ImagemSVGF from '../../assets/images/react-original.svg';
import ImagemSVGG from '../../assets/images/sass-original.svg';
import ImagemSVGH from '../../assets/images/tailwindcss-plain.svg';
import ImagemSVGI from '../../assets/images/typescript-original.svg';

import { NavLink } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

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

const Container = styled.nav`
    font-size: 30px;
    display: flex;
    justify-content: center;
    backdrop-filter: blur(20px);
    animation: ${fadeIn} 1s ease-in;
    border-top: 2px solid #5f018b9b;
`;

const Background = styled.div`
`;

const Titulo = styled.div`
    margin: 50px;
    color: #ffffff;
`;

const ImagemIcon = styled.img`
    width: 25%;
    cursor: pointer;
    border-radius: 20%;
    animation: ${fadeIn} 1s ease-in;
`;

const Link = styled(NavLink)`
    background-color: #88044a3b;
    text-decoration: none;
    padding: 10px;
    margin: 40px;
    border-radius: 5px;
    border: 2px solid #f2eef3cc;
    display: flex; 
    justify-content: center;
    font-size: 20px;
    color: #f5ebffcf;
    cursor: pointer;
    animation: ${fadeIn} 1s ease-in;


    position: relative;
    overflow: hidden;
    box-shadow: 10px 10px 2px #590034;
    transition: box-shadow 0.3s ease-in-out;

    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 100%;
        left: 0;
        background-color: rgba(255, 255, 255, 0.2);
        transition: top 0.3s ease-in-out;
    }

    &:hover {
        box-shadow: 5px 5px 10px #590034;

        &:before {
            top: 0;
        }
    }
`;

const Col = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
    align-items: center;
    margin: 50px;
`;

const Border = styled.div`
    border-radius: 10%;
    margin: 10px;
    padding-bottom: 10rem;
    padding-top: 1rem;
`;

const Text = styled.div`
    color: #cccccc;
    font-size: 20px;
    margin-bottom: 50px;
`;

const Conquest = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    
  }, []);

  return (
    <Container>
      <Background>
        <Titulo data-aos="fade-up">ACHIEVEMENT</Titulo>
        <Text data-aos="fade-up">Alguns Certificados e Tools que uso.</Text>
        <Col>
          <Border data-aos="fade-up">
            <ImagemIcon src={ImagemSVGF} alt="Imagem" />
            <Link to="https://www.devmedia.com.br/certificado/tecnologia/react/juan-111">CONFERIR</Link>
          </Border>
          <Border data-aos="fade-up">
            <ImagemIcon src={ImagemSVGA} alt="Imagem" />
            <Link to="https://www.devmedia.com.br/certificado/tecnologia/javascript/juan-111">CONFERIR</Link>
          </Border>
          <Border data-aos="fade-up">
            <ImagemIcon src={ImagemSVGI} alt="Imagem" />
            <Link to="https://www.devmedia.com.br/certificado/tecnologia/php/juan-111">CONFERIR</Link>
          </Border>
          <Border data-aos="fade-up">
            <ImagemIcon src={ImagemSVGE} alt="Imagem" />
            <Link to="https://www.devmedia.com.br/certificado/tecnologia/node-js/juan-111">CONFERIR</Link>
          </Border>
          <Border data-aos="fade-up">
            <ImagemIcon src={ImagemSVGC} alt="Imagem" />
            <Link to="">CONFERIR</Link>
          </Border>
          <Border data-aos="fade-up">
            <ImagemIcon src={ImagemSVGG} alt="Imagem" />
            <Link to="">CONFERIR</Link>
          </Border>
          <Border data-aos="fade-up">
            <ImagemIcon src={ImagemSVGH} alt="Imagem" />
            <Link to="">CONFERIR</Link>
          </Border>
          <Border data-aos="fade-up">
            <ImagemIcon src={ImagemSVGB} alt="Imagem" />
            <Link to="">CONFERIR</Link>
          </Border>
          <Border data-aos="fade-up">
            <ImagemIcon src={ImagemSVG} alt="Imagem" />
            <Link to="">CONFERIR</Link>
          </Border>
        </Col>
      </Background>
    </Container>
  );
}

export default Conquest;