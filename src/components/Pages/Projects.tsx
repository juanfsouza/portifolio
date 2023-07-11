import styled from 'styled-components';
import ImagemPNG from '../../assets/images/Netflix.png';
import ImagemPNGA from '../../assets/images/Costs.png';
import ImagemPNGB from '../../assets/images/Pokemon.png';
import ImagemPNGC from '../../assets/images/RickAndMorty.png';

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
`;

const Background = styled.div`
    position: absolute;
    top: 130vw;
    height: 350vh;
    backdrop-filter: blur(50px);
    background-color: #5f018b17;
`;

const Text = styled.div`
    margin: 100px;
    color: #cccccc;
    font-size: 20px;
    max-width: 50%;
    word-wrap: break-word;
    margin-top: -50px;
`;

const Titulo = styled.div`
    margin: 80px;
    color: #ffffff;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
    margin: 7%;
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
    background-color: #5f018b9b;
    display: block;
    left: 0vw;
    height: 1px;
    position: absolute;
    top: 4.5%;
    transform: translateY(-50%);
    width: 55.2vw;
`;

const Lines = styled.div`
    background-color: #5f018b9b;
    content: "";
    display: block;
    left: 54.6vw;
    height: 1px;
    position: absolute;
    top: 4.3%;
    transform: rotate(45deg);
    width: 12px;
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
`;


function Projects() {
  return (
    <Container>
    <Background>
      <Titulo>PROJECTS</Titulo>
      <Line />
      <Lines />
      <Content>
        <Col>
        <ImagemIcon src={ImagemPNG} alt="Imagem" />
            <Row>
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
            <Rows>
            <Link to="https://netflix-jfs.netlify.app/auth">Deploy</Link>
            <Link to="https://github.com/juanfsouza/Netflix">GitHub</Link>
            </Rows>
        </Col>
        <Text>
            Projeto NetFlix: Como eu gosto de assistir filmes resolvir criar um site mais parecido com Netflix, Projeto foi criado Pagina de login com git ou google ate pagina de User, obs: esta em desenvolvimento.
        </Text>
      </Content>
      <Content>
        <Text>
        Projeto Costs: Para ajudar Empresas Gerenciar seus negocios, forma mais facil de organizar qual e orçamento empresa vai gastar e outras coisas emplementados.
        </Text>
        <Col>
        <ImagemIcon src={ImagemPNGA} alt="Imagem" />
            <Row>
            <p>
                Tools:
            </p>
                <Icon src={ImagemSVGF} alt="Imagem" />
                <Icon src={ImagemSVGA} alt="Imagem" />
                <Icon src={ImagemSVGE} alt="Imagem" />
            </Row>
            <Rows>
            <Link to="">Deploy</Link>
            <Link to="https://github.com/juanfsouza/React-Projeto-Cost">GitHub</Link>
            </Rows>
        </Col>
        </Content>
        <Content>
        <Col>
        <ImagemIcon src={ImagemPNGB} alt="Imagem" />
            <Row>
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
            <Rows>
            <Link to="https://pokemon-jfs.netlify.app/pokemon/1">Deploy</Link>
            <Link to="https://github.com/juanfsouza/pokedex-master">GitHub</Link>
            </Rows>
        </Col>
        <Text>
            Projeto Pokemon: Esse Projeto e uma pokedex pokemon utilizando api pokemon e localização, voce pode pesquisar todos tipos de pokemons.
        </Text>
      </Content>
      <Content>
        <Text>
            Projeto Rick And Morty: Quem nunca assistiu aquele desenho na infancia e resolveu criar um projeto, utilizando api do rick and morty vai conseguir ver todos personagem e localização. 
        </Text>
        <Col>
        <ImagemIcon src={ImagemPNGC} alt="Imagem" />
            <Row>
            <p>
                Tools:
            </p>
                <Icon src={ImagemSVGF} alt="Imagem" />
                <Icon src={ImagemSVGA} alt="Imagem" />
                <Icon src={ImagemSVGI} alt="Imagem" />
                <Icon src={ImagemSVGE} alt="Imagem" />
            </Row>
            <Rows>
            <Link to="">Deploy</Link>
            <Link to="https://github.com/juanfsouza/React_Project/tree/master/rick-and-morty-api">GitHub</Link>
            </Rows>
        </Col>
        </Content>
    </Background>
  </Container>
  );
}

export default Projects;
