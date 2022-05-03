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

export default function Experience() {
  return (
    <Box marginTop={{ base: 20, lg: 32 }}>
      <Heading
        fontSize={{ base: '4xl', lg: '7xl' }}
        paddingX={5}
        marginY={20}
        textAlign='center'
        textTransform='uppercase'
        fontWeight='black'
      >
        Experience
      </Heading>
    </Box>
  );
}
