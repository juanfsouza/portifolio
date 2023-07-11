import styled from 'styled-components';
import ImagemSVG from '../../assets/images/git-original.svg';
import ImagemSVGA from '../../assets/images/javascript-original.svg';
import ImagemSVGB from '../../assets/images/firebase-plain-wordmark.svg';
import ImagemSVGC from '../../assets/images/mongodb-original.svg';
import ImagemSVGD from '../../assets/images/nextjs-line.svg';
import ImagemSVGE from '../../assets/images/nodejs-original.svg';
import ImagemSVGF from '../../assets/images/react-original.svg';
import ImagemSVGG from '../../assets/images/sass-original.svg';
import ImagemSVGH from '../../assets/images/tailwindcss-plain.svg';
import ImagemSVGI from '../../assets/images/typescript-original.svg';

import { NavLink } from 'react-router-dom';

const Container = styled.nav`
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Background = styled.div`
    position: absolute;
    top: 70vw;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50vh;
`;

const Titulo = styled.div`
    margin: 50px;
    color: #ffffff;
`;

const ImagemIcon = styled.img`
    width: 25%;
    cursor: pointer;
    border-radius: 20%;
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

function Conquest() {

  return (
    <Container>
      <Background>
        <Titulo>ACHIEVEMENT</Titulo>
        <Text>Alguns Certificados e Tools que uso.</Text>
        <Col>
          <Border>
            <ImagemIcon src={ImagemSVGF} alt="Imagem" />
            <Link to="https://www.devmedia.com.br/certificado/tecnologia/react/juan-111">CONFERIR</Link>
          </Border>
          <Border>
            <ImagemIcon src={ImagemSVGA} alt="Imagem" />
            <Link to="https://www.devmedia.com.br/certificado/tecnologia/javascript/juan-111">CONFERIR</Link>
          </Border>
          <Border>
            <ImagemIcon src={ImagemSVGI} alt="Imagem" />
            <Link to="https://www.devmedia.com.br/certificado/tecnologia/php/juan-111">CONFERIR</Link>
          </Border>
          <Border>
            <ImagemIcon src={ImagemSVGE} alt="Imagem" />
            <Link to="https://www.devmedia.com.br/certificado/tecnologia/node-js/juan-111">CONFERIR</Link>
          </Border>
          <Border>
            <ImagemIcon src={ImagemSVGC} alt="Imagem" />
            <Link to="">CONFERIR</Link>
          </Border>
          <Border>
            <ImagemIcon src={ImagemSVGG} alt="Imagem" />
            <Link to="">CONFERIR</Link>
          </Border>
          <Border>
            <ImagemIcon src={ImagemSVGH} alt="Imagem" />
            <Link to="">CONFERIR</Link>
          </Border>
          <Border>
            <ImagemIcon src={ImagemSVGB} alt="Imagem" />
            <Link to="">CONFERIR</Link>
          </Border>
          <Border>
            <ImagemIcon src={ImagemSVG} alt="Imagem" />
            <Link to="">CONFERIR</Link>
          </Border>
          <Border>
            <ImagemIcon src={ImagemSVGD} alt="Imagem" />
            <Link to="">CONFERIR</Link>
          </Border>
        </Col>
      </Background>
    </Container>
  );
}

export default Conquest;