import React from 'react';
import { Box, Text, useColorModeValue, Container } from '@chakra-ui/react';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <Box
      bg={useColorModeValue('orange.50', 'gray.800')}
      color={useColorModeValue('yellow.900', 'white')}
      minH=' 200vh'
    >
      <Nav />
      <Container maxW='7xl'>
        <About />
        <Skills />
      </Container>
    </Box>
  );
}

export default App;
