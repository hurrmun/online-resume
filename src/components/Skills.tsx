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
import { skills } from '../data/content';
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
    >
      <Text fontSize={{ base: 'lg', lg: '2xl' }}>{name}</Text>
    </Box>
  );
};

export default function Skills() {
  return (
    <Box marginTop={{ base: 12, lg: 20 }}>
      <Heading
        fontSize={{ base: '4xl', lg: '7xl' }}
        paddingX={5}
        marginY={20}
        textAlign='center'
        textTransform='uppercase'
        fontWeight='black'
      >
        Skills
      </Heading>
      <ChakraBox
        variants={container}
        initial='hidden'
        animate='show'
        exit='exit'
      >
        <ChakraBox marginY={10} paddingX={2} variants={item}>
          <Heading
            fontSize={{ base: '3xl', lg: '5xl' }}
            lineHeight={1}
            marginBottom={6}
          >
            Programming Languagues
          </Heading>
          <Flex flexWrap='wrap' gap={[2, 4]}>
            {skills.languages.map((el) => (
              <Box key={el}>
                <SkillCard name={el} />
              </Box>
            ))}
          </Flex>
        </ChakraBox>
        <Divider />
        <ChakraBox marginY={10} paddingX={2} variants={item}>
          <Heading
            fontSize={{ base: '3xl', lg: '5xl' }}
            lineHeight={1}
            marginBottom={6}
          >
            Technologies
          </Heading>
          <Flex flexWrap='wrap' gap={[2, 4]}>
            {skills.technologies.map((el) => (
              <Box key={el}>
                <SkillCard name={el} />
              </Box>
            ))}
          </Flex>
        </ChakraBox>
        <Divider />
        <ChakraBox marginY={10} paddingX={2} variants={item}>
          <Heading
            fontSize={{ base: '3xl', lg: '5xl' }}
            lineHeight={1}
            marginBottom={6}
          >
            Other Skills
          </Heading>
          <Flex flexWrap='wrap' gap={[2, 4]}>
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
