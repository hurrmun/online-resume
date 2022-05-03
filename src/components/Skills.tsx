import {
  Box,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';
import { skills } from './data/content';

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
    <Box marginTop={32}>
      <Box marginY={10}>
        <Heading
          fontSize={{ base: '3xl', lg: '5xl' }}
          lineHeight={1}
          paddingX={5}
        >
          Programming Languagues
        </Heading>
        <Flex flexWrap='wrap' marginTop={2}>
          {skills.languages.map((el) => (
            <SkillCard name={el} />
          ))}
        </Flex>
      </Box>
      <Divider />
      <Box marginY={10}>
        <Heading
          fontSize={{ base: '3xl', lg: '5xl' }}
          lineHeight={1}
          paddingX={5}
        >
          Technologies
        </Heading>
        <Flex flexWrap='wrap' marginTop={2}>
          {skills.technologies.map((el) => (
            <SkillCard name={el} />
          ))}
        </Flex>
      </Box>
      <Divider />
      <Box marginY={10}>
        <Heading
          fontSize={{ base: '3xl', lg: '5xl' }}
          lineHeight={1}
          paddingX={5}
        >
          Other Skills
        </Heading>
        <Flex flexWrap='wrap' marginTop={2}>
          {skills.otherSkills.map((el) => (
            <SkillCard name={el} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
