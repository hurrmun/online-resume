import {
  Heading,
  chakra,
  Image,
  Text,
  VStack,
  Flex,
  Grid,
  useColorModeValue,
  GridItem,
  Box,
  Tag,
  HStack,
} from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { projects } from '../data/content';
import { container, item } from './animations';

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

const TechTag = ({ tag }: { tag: string }) => (
  <Tag bg={useColorModeValue('orange.100', 'gray.800')}>{tag}</Tag>
);
const Card = ({
  name,
  affiliation,
  description,
  imageSrc,
  tags,
  github,
  deployment,
}: {
  name: string;
  affiliation: string;
  description: string;
  tags: string[];
  imageSrc: string;
  github: string;
  deployment: string;
}) => {
  return (
    <GridItem
      colSpan={1}
      bg={useColorModeValue('orange.200', 'gray.700')}
      borderRadius='xl'
      padding={6}
    >
      <Image
        objectFit='cover'
        src={imageSrc}
        alt={`${name} image`}
        borderRadius='xl'
      />
      <Box marginTop={4} marginBottom={2}>
        <Heading fontSize={{ base: 'xl', lg: '3xl' }}>{name}</Heading>
        <Text fontSize={{ base: 'lg', lg: 'xl' }} fontStyle='italic'>
          {affiliation}
        </Text>
        <HStack spacing={1} marginTop={1}>
          {tags.map((tag) => (
            <TechTag tag={tag} />
          ))}
        </HStack>
      </Box>
      <Text fontSize={{ base: 'md', lg: 'lg' }}>{description}</Text>
    </GridItem>
  );
};

export default function Projects() {
  return (
    <ChakraBox variants={container} marginTop={{ base: 20, lg: 32 }}>
      <Heading
        fontSize={{ base: '4xl', lg: '7xl' }}
        paddingX={5}
        marginY={20}
        textAlign='center'
        textTransform='uppercase'
        fontWeight='black'
      >
        Projects
      </Heading>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        gap={{ base: 4, lg: 6 }}
        alignItems='center'
      >
        {projects.map(({ ...props }, index) => (
          <ChakraBox key={props.name} variants={item}>
            <Card {...props} />
          </ChakraBox>
        ))}
      </Grid>
    </ChakraBox>
  );
}
