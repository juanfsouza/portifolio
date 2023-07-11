import styled from 'styled-components';
import Imagem from '../../assets/images/Contact.png';
import { NavLink } from 'react-router-dom';

const Container = styled.nav`
    font-size: 30px;
    display: flex;
    justify-content: center;
`;

const Background = styled.div`
    position: absolute;
    top: 300vw;
    height: 50vh;
    backdrop-filter: blur(50px);
    background-color: #5f018b2b;
    border-top: 2px solid #5f018b9b;
`;

const Link = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px;
    color: #cccccc;
    font-size: 20px;
    max-width: 100%;
    text-decoration: underline;
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
    max-width: 8%;
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
  