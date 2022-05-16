import React from 'react';
import { Box, useColorModeValue, Container } from '@chakra-ui/react';
import { Element } from 'react-scroll';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Box
      bg={useColorModeValue('orange.50', 'gray.800')}
      color={useColorModeValue('yellow.900', 'white')}
    >
      <Nav />
      <Container maxW='7xl'>
        <Element name='about'>
          <About />
        </Element>
        <Element name='skills'>
          <Skills />
        </Element>
        <Element name='experience'>
          <Experience />
        </Element>
        <Element name='education'>
          <Education />
        </Element>
        <Element name='projects'>
          <Projects />
        </Element>
        <Element name='contact'>
          <Contact />
        </Element>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
