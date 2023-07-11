import styled, { keyframes } from 'styled-components';
import Imagem from '../../assets/images/Logo.jpg';
import { NavLink } from 'react-router-dom';

const Navbar = styled.nav`
  position: fixed;
  top: 15px;
  right: 0;
  display: flex;
  align-items: center;
  padding: 0 50px;
  z-index: 1;
  
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  position: fixed;
  left: 50px;
  border-radius: 20%;
  margin-right: 100px;
  
`;

const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 5px #5f0ace;
  }
  50% {
    box-shadow: 0 0 20px 10px #5f0ace;
  }
  100% {
    box-shadow: 0 0 5px #5f0ace;
  }
`;

const Text = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: #dbdbdbcf;
  margin-right: 30px;
  position: relative;
  cursor: pointer;

  &:not(:last-child)::after {
    animation: ${glowAnimation} 2s infinite;
    content: '';
    position: absolute;
    top: 60%;
    right: -20px;
    transform: translateY(-50%);
    width: 10px;
    height: 3px;
    background-color: #5f0ace;
    opacity: 0.4;
  }

  &:hover {
    color: #ffffff;
  }
`;

function NavBar() {
  const scrollToPosition = (offset: number) => {
    window.scrollTo({
      top: offset,
      behavior: 'smooth',
    });
  };

  return (
    <Navbar>
      <Logo src={Imagem} alt="Logo" />
      <Text to="" onClick={() => scrollToPosition(0)}>Home</Text>
      <Text to="" onClick={() => scrollToPosition(500)}>About Me</Text>
      <Text to="" onClick={() => scrollToPosition(1350)}>Achievement</Text>
      <Text to="" onClick={() => scrollToPosition(2500)}>Projects</Text>
      <Text to="" onClick={() => scrollToPosition(6000)}>Contact</Text>
    </Navbar>
  );
}

export default NavBar;