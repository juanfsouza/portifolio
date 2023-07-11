import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImagemPNG from '../assets/images/Up.png';

const ScrollToTopButton = styled.div`
    position: fixed;
    right: 20px;
    bottom: 20px;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    color: #fff;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    opacity: 0.4;
    transition: opacity 1.3s;

  &:hover {
    opacity: 1;
  }
`;

const Image = styled.img`
    max-width: 100%;
    opacity: 0.6;
`;

const ScrollToTop: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showButton && (
        <ScrollToTopButton onClick={scrollToTop}>
           <Image src={ImagemPNG} alt="Imagem" />
        </ScrollToTopButton>
      )}
    </>
  );
};

export default ScrollToTop;
