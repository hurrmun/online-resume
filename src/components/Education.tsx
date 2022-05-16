import {
  Heading,
  chakra,
  Image,
  Text,
  VStack,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { education } from '../misc/content';
import { container, item } from '../misc/animations';

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

const Card = ({
  institution,
  duration,
  certification,
  imageSrc,
}: {
  institution: string;
  duration: string;
  certification: string;
  imageSrc: string;
}) => {
  return (
    <VStack width={{ base: '300px', md: '480px' }} textAlign='center'>
      <Image
        borderRadius='full'
        objectFit='cover'
        src={imageSrc}
        alt=''
        padding={{ base: 3, lg: 8 }}
      />
      <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
        {institution}
      </Heading>
      <Text fontSize={{ base: 'xl', lg: '2xl' }} fontStyle='italic'>
        {duration}
      </Text>
      <Text
        bg={useColorModeValue('orange.100', 'gray.700')}
        fontSize={{ base: 'lg', lg: 'xl' }}
        paddingX={3}
        paddingY={1}
        borderRadius='lg'
      >
        {certification}
      </Text>
    </VStack>
  );
};

export default function Education() {
  return (
    <ChakraBox marginTop={{ base: 20, lg: 32 }}>
      <Heading
        fontSize={{ base: '4xl', lg: '7xl' }}
        paddingX={5}
        marginY={20}
        textAlign='center'
        textTransform='uppercase'
        fontWeight='black'
      >
        Education
      </Heading>
      <Flex
        justifyContent='space-evenly'
        alignItems={{ base: 'center', lg: 'top' }}
        flexDirection={{ base: 'column', lg: 'row' }}
        gap={[8, 8, 8, 0]}
        paddingX={4}
      >
        {education.map(({ ...props }, index) => (
          <ChakraBox key={props.institution} variants={item}>
            <Card {...props} />
          </ChakraBox>
        ))}
      </Flex>
    </ChakraBox>
  );
}
