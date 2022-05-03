import React from 'react';
import { Box, Text, useColorModeValue, Container } from '@chakra-ui/react';
import Nav from './components/Nav';

function App() {
  return (
    <Box
      bg={useColorModeValue('orange.100', 'gray.800')}
      color={useColorModeValue('yellow.900', 'white')}
      minH='100vh'
    >
      <Nav />
      <Container maxW='6xl'>
        <Text>Hello</Text>
      </Container>
    </Box>
  );
}

export default App;
