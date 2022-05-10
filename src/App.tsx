import React from 'react';
import { Box, Text, useColorModeValue, Container } from '@chakra-ui/react';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';

function App() {
  return (
    <Box
      bg={useColorModeValue('orange.50', 'gray.800')}
      color={useColorModeValue('yellow.900', 'white')}
    >
      <Nav />
      <Container maxW='7xl'>
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
      </Container>
    </Box>
  );
}

export default App;
