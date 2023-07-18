import styled, { keyframes } from 'styled-components';
import ImagemPNG from '../../assets/images/Netflix.jpg';
import ImagemPNGTwo from '../../assets/images/Netflix2.jpg';
import ImagemPNGA from '../../assets/images/Costs.jpg';
import ImagemPNGATwo from '../../assets/images/Costs2.jpg';
import ImagemPNGAThree from '../../assets/images/Costs3.jpg';
import ImagemPNGAFour from '../../assets/images/Costs4.jpg';
import ImagemPNGB from '../../assets/images/Pokemon.jpeg';
import ImagemPNGBTwo from '../../assets/images/Pokemon2.jpeg';
import ImagemPNGBThree from '../../assets/images/Pokemon3.jpeg';
import ImagemPNGC from '../../assets/images/RickAndMorty.jpeg';
import ImagemPNGCTwo from '../../assets/images/RickAndMorty2.jpeg';
import ImagemPNGCThree from '../../assets/images/RickAndMorty3.jpeg';
import ImagemPNGCFour from '../../assets/images/RickAndMorty4.jpeg';
import ImagemPNGRight from '../../assets/images/arrowRight.png';
import ImagemPNGLeft from '../../assets/images/arrowLeft.png';

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
import { useEffect, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";


const fadeIn = keyframes`
0% {
    opacity: 0;
    transform: translateY(80px);
}

100% {
    opacity: 1;
    transform: translateY(0);
}
`;

const Container = styled.nav`
    font-size: 30px;
    display: flex;
    justify-content: center;
    animation: ${fadeIn} 1s ease-in;
`;

const Background = styled.div`
    top: 130vw;
    height: 350vh;
    backdrop-filter: blur(50px);
    border-top: 2px solid #5f018b9b;
`;

const Text = styled.div`
    margin: 100px;
    color: #cccccc;
    font-size: 20px;
    max-width: 50%;
    word-wrap: break-word;
    margin-top: -50px;
    animation: ${fadeIn} 1s ease-in;
`;

const Titulo = styled.div`
    margin: 80px;
    color: #ffffff;
    animation: ${fadeIn} 1s ease-in;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
    margin: 7%;
    animation: ${fadeIn} 1s ease-in;
`;

const ImagemIcon = styled.img`
    width: 550px;
    height: 300px;
    border-radius: 1%;
    border: 1px solid white;
`;

const Icon = styled.img`
    margin: 10px;
    width: 40px;
    height: 40px;
`;

const Line = styled.div`
    background-color: #7808c4;
    display: block;
    left: 0vw;
    height: 1px;
    position: absolute;
    top: 4.5%;
    transform: translateY(-50%);
    width: 55.2vw;
    animation: ${fadeIn} 1s ease-in;
`;

const Lines = styled.div`
    background-color: #7808c4;
    content: "";
    display: block;
    left: 54.6vw;
    height: 1px;
    position: absolute;
    top: 4.3%;
    transform: rotate(45deg);
    width: 12px;
    animation: ${fadeIn} 1s ease-in;
`;

const Col = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;  
`;

const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    

    p {
        display: flex;
        align-items: center;
        font-size: 25px;
        color: white;
    }
`;

const Rows = styled.div`
    display: flex;

    p {
        display: flex;
        align-items: center;
        font-size: 25px;
        color: white;
    }
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

const Arrow = styled.div`
    top: 0%; 
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const NextArrow = styled(Arrow)`
    right: 10px;
    background-color: rgba(0, 0, 0, 0.3);
    margin: 20px;
    border-radius: 20%;

    &:hover {
        transform: scale(1.2);
    }
`;

const PrevArrow = styled(Arrow)`
    left: 10px;
    background-color: rgba(0, 0, 0, 0.3);
    margin: 20px;
    border-radius: 20%;

    &:hover {
        transform: scale(1.2);
    }
`;

const NextArrowIcon = styled(Icon)`
    width: 40px;
    height: 40px;
`;

const images = [
    ImagemPNG,
    ImagemPNGTwo
  ];

const imagesTwo = [
    ImagemPNGA,
    ImagemPNGATwo,
    ImagemPNGAThree,
    ImagemPNGAFour,
  ];

const imagesThree = [
    ImagemPNGB,
    ImagemPNGBTwo,
    ImagemPNGBThree,
  ];

const imagesFour = [
    ImagemPNGC,
    ImagemPNGCTwo,
    ImagemPNGCThree,
    ImagemPNGCFour,
  ];

const Projects = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentImageIndexTwo, setCurrentImageIndexTwo] = useState(0);
    const [currentImageIndexThree, setCurrentImageIndexThree] = useState(0);
    const [currentImageIndexFour, setCurrentImageIndexFour] = useState(0);

    useEffect(() => {
        Aos.init({ duration: 2000 });
        
      }, []);
    

    function nextImage() {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }

    function nextImageTwo() {
        setCurrentImageIndexTwo((prevIndex) => (prevIndex === imagesTwo.length - 1 ? 0 : prevIndex + 1));
      }

    function nextImageThree() {
        setCurrentImageIndexThree((prevIndex) => (prevIndex === imagesThree.length - 1 ? 0 : prevIndex + 1));
      }

    function nextImageFour() {
        setCurrentImageIndexFour((prevIndex) => (prevIndex === imagesFour.length - 1 ? 0 : prevIndex + 1));
      }
      
    function prevImage() {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      }

    function prevImageTwo() {
        setCurrentImageIndexTwo((prevIndex) => (prevIndex === 0 ? imagesTwo.length - 1 : prevIndex - 1));
      }

    function prevImageThree() {
        setCurrentImageIndexThree((prevIndex) => (prevIndex === 0 ? imagesThree.length - 1 : prevIndex - 1));
      }

    function prevImageFour() {
        setCurrentImageIndexFour((prevIndex) => (prevIndex === 0 ? imagesFour.length - 1 : prevIndex - 1));
      }



  return (
    <Container>
    <Background>
      <Titulo data-aos="fade-right">PROJECTS</Titulo>
      <Line />
      <Lines />
      <Content>
        <Col>
            <Arrow>
                <NextArrow onClick={nextImage}>
                    <NextArrowIcon data-aos="fade-up" src={ImagemPNGLeft} alt="Next" />
                </NextArrow>
                <ImagemIcon data-aos="fade-right" src={images[currentImageIndex]} alt="Imagem" />
                <PrevArrow data-aos="fade-up" onClick={prevImage}>
                    <NextArrowIcon src={ImagemPNGRight} alt="Next" />
                </PrevArrow>
            </Arrow>
            <Row data-aos="fade-up">
            <p>
                Tools:
            </p>
                <Icon src={ImagemSVGF} alt="Imagem" />
                <Icon src={ImagemSVGA} alt="Imagem" />
                <Icon src={ImagemSVGI} alt="Imagem" />
                <Icon src={ImagemSVGD} alt="Imagem" />
                <Icon src={ImagemSVGE} alt="Imagem" />
                <Icon src={ImagemSVGH} alt="Imagem" />
                <Icon src={ImagemSVGC} alt="Imagem" />
            </Row>
            <Rows data-aos="fade-up">
            <Link to="https://netflix-jfs.netlify.app/auth">Deploy</Link>
            <Link to="https://github.com/juanfsouza/Netflix">GitHub</Link>
            </Rows>
        </Col>
        <Text>
        <strong>Projeto NetFlix:</strong> Como eu gosto de assistir filmes resolvir criar um site mais parecido com Netflix, Projeto foi criado Pagina de login com git ou google ate pagina de User, obs: esta em desenvolvimento.
        </Text>
      </Content>
      <Content>
        <Text>
        <strong>Projeto Costs:</strong> Para ajudar Empresas Gerenciar seus negocios, forma mais facil de organizar qual e orçamento empresa vai gastar e outras coisas emplementados.
        </Text>
        <Col>
            <Arrow>
                <NextArrow data-aos="fade-up" onClick={nextImageTwo}>
                    <NextArrowIcon src={ImagemPNGLeft} alt="Next" />
                </NextArrow>
                <ImagemIcon data-aos="fade-left" src={imagesTwo[currentImageIndexTwo]} alt="Imagem" />
                <PrevArrow data-aos="fade-up" onClick={prevImageTwo}>
                    <NextArrowIcon src={ImagemPNGRight} alt="Next" />
                </PrevArrow>
            </Arrow>
            <Row data-aos="fade-up">
            <p>
                Tools:
            </p>
                <Icon src={ImagemSVGF} alt="Imagem" />
                <Icon src={ImagemSVGA} alt="Imagem" />
                <Icon src={ImagemSVGE} alt="Imagem" />
            </Row>
            <Rows data-aos="fade-up">
            <Link to="">Deploy</Link>
            <Link to="https://github.com/juanfsouza/React-Projeto-Cost">GitHub</Link>
            </Rows>
        </Col>
        </Content>
        <Content>
        <Col>
            <Arrow>
                <NextArrow data-aos="fade-up" onClick={nextImageThree}>
                    <NextArrowIcon src={ImagemPNGLeft} alt="Next" />
                </NextArrow>
                <ImagemIcon data-aos="fade-right" src={imagesThree[currentImageIndexThree]} alt="Imagem" />
                <PrevArrow data-aos="fade-up" onClick={prevImageThree}>
                    <NextArrowIcon src={ImagemPNGRight} alt="Next" />
                </PrevArrow>
            </Arrow>
            <Row data-aos="fade-up">
            <p>
                Tools:
            </p>
                <Icon src={ImagemSVGF} alt="Imagem" />
                <Icon src={ImagemSVGA} alt="Imagem" />
                <Icon src={ImagemSVGI} alt="Imagem" />
                <Icon src={ImagemSVGB} alt="Imagem" />
                <Icon src={ImagemSVGE} alt="Imagem" />
                <Icon src={ImagemSVGG} alt="Imagem" />
            </Row>
            <Rows data-aos="fade-up">
            <Link to="https://pokemon-jfs.netlify.app/pokemon/1">Deploy</Link>
            <Link to="https://github.com/juanfsouza/pokedex-master">GitHub</Link>
            </Rows>
        </Col>
        <Text>
            <strong>Projeto Pokemon:</strong> Esse Projeto e uma pokedex pokemon utilizando api pokemon e localização, voce pode pesquisar todos tipos de pokemons.
        </Text>
      </Content>
      <Content>
        <Text>
        <strong>Projeto Rick And Morty:</strong> Quem nunca assistiu aquele desenho na infancia e resolveu criar um projeto, utilizando api do rick and morty vai conseguir ver todos personagem e localização. 
        </Text>
        <Col>
            <Arrow>
                <NextArrow data-aos="fade-up" onClick={nextImageFour}>
                    <NextArrowIcon src={ImagemPNGLeft} alt="Next" />
                </NextArrow>
                <ImagemIcon data-aos="fade-left" src={imagesFour[currentImageIndexFour]} alt="Imagem" />
                <PrevArrow data-aos="fade-up" onClick={prevImageFour}>
                    <NextArrowIcon src={ImagemPNGRight} alt="Next" />
                </PrevArrow>
            </Arrow>
            <Row data-aos="fade-up">
            <p>
                Tools:
            </p>
                <Icon src={ImagemSVGF} alt="Imagem" />
                <Icon src={ImagemSVGA} alt="Imagem" />
                <Icon src={ImagemSVGI} alt="Imagem" />
                <Icon src={ImagemSVGE} alt="Imagem" />
            </Row>
            <Rows data-aos="fade-up">
            <Link to="https://rick-and-morty-api-sigma-nine.vercel.app/">Deploy</Link>
            <Link to="https://github.com/juanfsouza/React_Project/tree/master/rick-and-morty-api">GitHub</Link>
            </Rows>
        </Col>
        </Content>
    </Background>
  </Container>
  );
}

export default Projects;
