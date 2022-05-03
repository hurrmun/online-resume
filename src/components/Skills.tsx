import {
  Box,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  Divider,
  chakra,
} from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { skills } from './data/content';
import { container, item } from './animations';

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

const SkillCard = ({ name }: { name: string }) => {
  return (
    <Box
      bg={useColorModeValue('orange.200', 'gray.700')}
      borderRadius='xl'
      px={4}
      py={2}
      mx={2}
      my={2}
    >
      <Text fontSize='2xl'>{name}</Text>
    </Box>
  );
};

export default function Skills() {
  return (
    <Box marginTop={{ base: 20, lg: 32 }}>
      <ChakraBox
        variants={container}
        initial='hidden'
        animate='show'
        exit='exit'
      >
        <ChakraBox marginY={10} variants={item}>
          <Heading
            fontSize={{ base: '3xl', lg: '5xl' }}
            lineHeight={1}
            paddingX={5}
            marginBottom={4}
          >
            Programming Languagues
          </Heading>
          <Flex flexWrap='wrap' marginTop={2}>
            {skills.languages.map((el) => (
              <Box key={el}>
                <SkillCard name={el} />
              </Box>
            ))}
          </Flex>
        </ChakraBox>
        <Divider />
        <ChakraBox marginY={10} variants={item}>
          <Heading
            fontSize={{ base: '3xl', lg: '5xl' }}
            lineHeight={1}
            paddingX={5}
            marginBottom={4}
          >
            Technologies
          </Heading>
          <Flex flexWrap='wrap' marginTop={2}>
            {skills.technologies.map((el) => (
              <Box key={el}>
                <SkillCard name={el} />
              </Box>
            ))}
          </Flex>
        </ChakraBox>
        <Divider />
        <ChakraBox marginY={10} variants={item}>
          <Heading
            fontSize={{ base: '3xl', lg: '5xl' }}
            lineHeight={1}
            paddingX={5}
            marginBottom={4}
          >
            Other Skills
          </Heading>
          <Flex flexWrap='wrap' marginTop={2}>
            {skills.otherSkills.map((el) => (
              <Box key={el}>
                <SkillCard name={el} />
              </Box>
            ))}
          </Flex>
        </ChakraBox>
      </ChakraBox>
    </Box>
  );
}
