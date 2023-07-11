import styled, { keyframes } from 'styled-components';
import ImagemJPG from '../../assets/images/perfil.jpg';
import ImagemSVG from '../../assets/images/linkedin.svg';
import ImagemSVGG from '../../assets/images/facebook.svg';
import ImagemSVGGG from '../../assets/images/github.svg';
import ImagemSVGGGG from '../../assets/images/twitter.svg';
import VideoPath from '../../assets/images/star.mp4';
import { Link } from 'react-router-dom';


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    background-size: cover;
`;

const Text = styled.h1`
    font-size: 2.6rem;
    color: white;
    margin-right: 10px;
    white-space: nowrap;
`;

const SubText = styled.p`
    font-size: 1.2rem;
    color: white;
    max-width: 1000px;
`;

const Video = styled.video`
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -1;
    opacity: 0.5;
    overflow: hidden;
`;

const floatingAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

const FloatingImage = styled.img`
    width: 400px;
    height: 300px;
    border-radius: 50%;
    margin-left: 20vw;
    animation: ${floatingAnimation} 3s ease-in-out infinite;
    opacity: 0.7;
`;

const Ss = styled.div`
    flex-flow: column;
    align-items: center;
    position: absolute;
    right: min(20rem,50px);
    top: calc(50% + -3vw);
    transform: translateY(-50%);
    width: 2.20%;
`;

const Sns = styled.h3`
    color: white;
    font-size: min(2.2rem,20px);
    left: -0.20em;
    line-height: 0.5;
    position: relative;
    writing-mode: vertical-rl;
`;

const Account = styled.ul`
    border-top: 1px solid #ffffff;
    margin-top: min(1rem,10px);
    padding-top: min(0.15rem,15px);
`;

const ImagemIcon = styled.img`
    margin-bottom: min(1.15rem,15px);
    width: 60%;
    background-blend-mode: overlay;
`;

const ImagemIconLink = styled(Link)`
  margin-bottom: min(1.15rem,15px);
  width: 60%;
  background-blend-mode: overlay;
`;

const Content = styled.div`
    display: block;
    align-items: center;
    justify-content: center;
`;



function Home() {

  return (
    <Container>
      <div>
        <Ss>
          <Sns>REDES</Sns>
            <Account />
              <ImagemIconLink to="https://www.linkedin.com/in/juan-fernando-665204203/">
                <ImagemIcon src={ImagemSVG} alt='Imagem' />
                </ImagemIconLink>
                <ImagemIconLink to="/facebook">
                <ImagemIcon src={ImagemSVGG} alt='Imagem' />
                </ImagemIconLink>
                <ImagemIconLink to="https://github.com/juanfsouza">
                <ImagemIcon src={ImagemSVGGG} alt='Imagem' />
                </ImagemIconLink>
                <ImagemIconLink to="https://twitter.com/JuanFer43796479">
                <ImagemIcon src={ImagemSVGGGG} alt='Imagem' />
              </ImagemIconLink>
        </Ss>
        <Content>
          <Text>Desenvolvedor Front End / Designer</Text>
            <SubText>Pleno conhecimento em linguagens como <strong> HTML, CSS, Javascript, ReactJs, TypeScript, NodeJs, Styled-Components, Php, Git, MongoDB e outros</strong>
              (usadas na criação desta landing pages). Uso o GitHub como repositório de meus projetos e estou estudando Nextjs e outras tools para utiliza-los.
            </SubText>
        </Content>
      </div>
          <FloatingImage src={ImagemJPG} alt="Imagem" />
          <Video autoPlay loop muted>
        <source src={VideoPath} type="video/mp4" />
      </Video>
    </Container>
  );
}

export default Home;
