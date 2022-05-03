import {
  Box,
  chakra,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion, isValidMotionProp, useViewportScroll } from 'framer-motion';
import { COPYWRITE } from './data/copywrite';

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: 200 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    x: -200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
};

const itemReverse = {
  hidden: { opacity: 0, x: -200 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    x: 200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
};

export default function About() {
  const { scrollYProgress } = useViewportScroll();
  const { about } = COPYWRITE;

  return (
    <Box marginTop={10}>
      <ChakraBox
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='space-evenly'
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
            paddingX={5}
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
          bg={useColorModeValue('orange.100', 'gray.900')}
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
    </Box>
  );
}
