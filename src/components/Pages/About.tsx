import styled from 'styled-components';
import Imagem from '../../assets/images/script.png';

const Container = styled.nav`
  font-size: 30px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 40vw;
  height: 60vh;
  backdrop-filter: blur(50px);
  background-color: #5f018b17;
  border-bottom: 2px solid #5f018b9b;

  @media (max-width: 768px) {
    top: 20vh;
    height: 80vh;
  }
`;

const Text = styled.div`
  margin: 50px;
  color: #cccccc;
  font-size: 20px;
  max-width: 55%;
  word-wrap: break-word;

  @media (max-width: 768px) {
    margin: 20px;
    max-width: 100%;
  }
`;

const Titulo = styled.div`
  margin: 50px;
  color: #ffffff;

  @media (max-width: 768px) {
    margin: 20px;
  }
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

  @media (max-width: 768px) {
    max-width: 50%;
  }
`;

const Line = styled.div`
  background-color: #480079;
  display: block;
  left: 0vw;
  height: 1px;
  position: absolute;
  top: 20%;
  transform: translateY(-50%);
  width: 55.2vw;

  @media (max-width: 768px) {
    top: 10%;
    width: 80%;
    left: 10%;
  }
`;

const Lines = styled.div`
  background-color: #37015a;
  content: "";
  display: block;
  left: 54.6vw;
  height: 1px;
  position: absolute;
  top: 19%;
  transform: rotate(45deg);
  width: 12px;

  @media (max-width: 768px) {
    top: 15%;
    left: 48%;
  }
`;

function About() {
  return (
    <Container>
      <Background>
        <Titulo>ABOUT ME</Titulo>
        <Line />
        <Lines />
        <Content>
          <Image src={Imagem} alt="Imagem" />
          <Text>
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
