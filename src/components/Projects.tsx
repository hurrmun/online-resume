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
  Link,
  IconButton,
} from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { FaGithub, FaLaptopCode } from 'react-icons/fa';
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
  github?: string;
  deployment?: string;
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
        <Flex flexWrap='wrap' gap={1} marginTop={1}>
          {tags.map((tag) => (
            <TechTag tag={tag} />
          ))}
        </Flex>
      </Box>
      <Text
        fontSize={{ base: 'md', lg: 'lg' }}
        overflow='scroll'
        textOverflow='clip'
      >
        {description}
      </Text>
      <HStack paddingY={3}>
        <Link
          href={github}
          _hover={{
            textDecoration: 'none',
          }}
          target='_blank'
          display={Boolean(github) ? 'block' : 'none'}
        >
          <IconButton
            aria-label={`${name} github repository`}
            icon={<FaGithub />}
            variant='outline'
            borderColor={useColorModeValue('yellow.900', 'white')}
            _hover={{
              bg: useColorModeValue('orange.300', 'gray.800'),
            }}
          />
        </Link>
        <Link
          href={deployment}
          _hover={{
            textDecoration: 'none',
          }}
          target='_blank'
          display={Boolean(deployment) ? 'block' : 'none'}
        >
          <IconButton
            aria-label={`${name} website`}
            icon={<FaLaptopCode />}
            variant='outline'
            borderColor={useColorModeValue('yellow.900', 'white')}
            _hover={{
              bg: useColorModeValue('orange.300', 'gray.800'),
            }}
          />
        </Link>
      </HStack>
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
        alignItems='top'
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
