import {
  Box,
  chakra,
  Text,
  IconButton,
  useColorModeValue,
  Link,
  Button,
  HStack,
} from '@chakra-ui/react';
import { TriangleDownIcon, DownloadIcon } from '@chakra-ui/icons';
import { motion, isValidMotionProp } from 'framer-motion';
import { COPYWRITE } from '../misc/copywrite';
import { container, item } from '../misc/animations';
import resume from '../files/herman-resume.pdf';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { scroller } from 'react-scroll';
import Feature from './Feature';

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

export default function About() {
  const { about } = COPYWRITE;

  return (
    <Box marginTop={8}>
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
        <ChakraBox
          variants={item}
          width='full'
          height={{ base: '160px', md: '300px', lg: '500px' }}
        >
          <Feature />
        </ChakraBox>
        <ChakraBox variants={item}>
          <Text
            marginTop={10}
            paddingX={5}
            fontSize={{ base: '3xl', lg: '5xl' }}
            fontWeight='light'
          >
            {about.description}
          </Text>
        </ChakraBox>
        <ChakraBox variants={item} marginTop={6}>
          <HStack>
            <Link
              href='https://github.com/hurrmun'
              _hover={{
                textDecoration: 'none',
              }}
              target='_blank'
            >
              <IconButton
                aria-label='github'
                icon={<FaGithub />}
                variant='outline'
                borderColor={useColorModeValue('yellow.900', 'white')}
                _hover={{
                  bg: useColorModeValue('orange.200', 'gray.700'),
                }}
              />
            </Link>
            <Link
              href='https://www.linkedin.com/in/hermanlyx/'
              _hover={{
                textDecoration: 'none',
              }}
              target='_blank'
            >
              <IconButton
                aria-label='linkedIn'
                icon={<FaLinkedinIn />}
                variant='outline'
                borderColor={useColorModeValue('yellow.900', 'white')}
                _hover={{
                  bg: useColorModeValue('orange.200', 'gray.700'),
                }}
              />
            </Link>
            <Link
              href={resume}
              download
              _hover={{
                textDecoration: 'none',
              }}
            >
              <Button
                variant='outline'
                borderColor={useColorModeValue('yellow.900', 'white')}
                rightIcon={<DownloadIcon />}
                _hover={{
                  bg: useColorModeValue('orange.200', 'gray.700'),
                }}
              >
                Download my CV
              </Button>
            </Link>
          </HStack>
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
          onClick={() => {
            scroller.scrollTo('skills', {
              duration: 1000,
              smooth: true,
              offset: -100,
            });
          }}
        />
      </ChakraBox>
    </Box>
  );
}
