import styled, { keyframes } from 'styled-components';
import Imagem from '../../assets/images/Contact.png';
import { NavLink } from 'react-router-dom';

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
    animation: ${fadeIn} 1s ease-in;
`;

const Background = styled.div`
    border-top: 2px solid #5f018b9b;
    backdrop-filter: blur(100px);
    background-color: #5f018b21;
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

        &:before {
            top: 0;
        }
    }
`;

const Text = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px;
    color: #cccccc;
    font-size: 20px;
    max-width: 100%;
    text-decoration: underline;
`;

const List = styled.ul`
    display: flex;
    margin: 10px;
`;

const Titulo = styled.div`
    margin: 50px;
    color: #ffffff;
`;

const Dev = styled.div`
    margin: 10px;
    color: #ffffff16;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    max-width: 5%;
    opacity: 0.6;
`;


function Contact() {
    return (
        <Container>
          <Background>
            <Titulo>CONTATO</Titulo>
            <Content>
              <List>
                <Link to="https://api.whatsapp.com/send/?phone=5512997812859&text&type=phone_number&app_absent=0"> 
                  Numero
                </Link>
                <Text> 
                  Email: Juanfsouza@gmail.com
                </Text>
                <Link to="https://www.linkedin.com/in/juan-fernando-665204203/"> 
                  Linkedin
                </Link>
              </List>
              <Image src={Imagem} alt="Imagem" />
            </Content>
            <Dev>JuanFS</Dev>
          </Background>
        </Container>
      );
    }
  
  export default Contact;
  