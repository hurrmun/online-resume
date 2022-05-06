import {
  Box,
  chakra,
  Heading,
  Text,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { TriangleDownIcon } from '@chakra-ui/icons';
import { motion, isValidMotionProp } from 'framer-motion';
import { COPYWRITE } from '../data/copywrite';
import { container, item, itemReverse } from './animations';

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

export default function About() {
  const { about } = COPYWRITE;

  return (
    <Box marginTop={16}>
      <ChakraBox
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        variants={container}
        initial='hidden'
        animate='show'
        exit='exit'
        textAlign='center'
      >
        <ChakraBox variants={item}>
          <Heading
            fontSize={{ base: '6xl', lg: '9xl' }}
            lineHeight={1}
            paddingX={4}
          >
            {about.heading}
          </Heading>
        </ChakraBox>
        <ChakraBox variants={itemReverse}>
          <Text
            marginTop={10}
            paddingX={5}
            fontSize={{ base: '3xl', lg: '5xl' }}
            fontWeight='light'
          >
            {about.description}
          </Text>
        </ChakraBox>
        <ChakraBox
          variants={item}
          bg={useColorModeValue('orange.100', 'gray.700')}
          marginTop={10}
          width='full'
          paddingX={6}
          paddingY={8}
          borderRadius='xl'
        >
          <Text fontSize={{ base: 'lg', lg: '2xl' }} fontWeight='light'>
            {about.introduction}
          </Text>
        </ChakraBox>
      </ChakraBox>
      <ChakraBox
        display='flex'
        justifyContent='center'
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: [0, 24, 0], opacity: [0.5, 1, 0.5] }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{ duration: 3, repeat: Infinity }}
        marginTop={16}
      >
        <IconButton
          aria-label='scroll-down'
          icon={<TriangleDownIcon />}
          borderRadius='full'
          fontSize='3xl'
          variant='ghost'
          paddingY={8}
          padding={4}
          _hover={{
            bg: useColorModeValue('orange.200', 'gray.700'),
          }}
        />
      </ChakraBox>
    </Box>
  );
}
