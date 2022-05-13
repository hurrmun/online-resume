import {
  Heading,
  chakra,
  Image,
  Text,
  Flex,
  Grid,
  useColorModeValue,
  GridItem,
  Box,
  Tag,
  HStack,
  Link,
  IconButton,
  AspectRatio,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Container,
} from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaLaptopCode } from 'react-icons/fa';
import { projects } from '../misc/content';
import { container, item } from '../misc/animations';

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

const TechTag = ({ tag }: { tag: string }) => (
  <Tag bg={useColorModeValue('orange.200', 'gray.800')}>{tag}</Tag>
);
const Card = ({
  name,
  affiliation,
  description,
  imageSrc,
  tags,
  github,
  deployment,
  setModalContent,
  onOpen,
}: {
  name: string;
  affiliation: string;
  description: string;
  tags: string[];
  imageSrc: string;
  github?: string;
  deployment?: string;
  setModalContent: Function;
  onOpen: () => void;
}) => {
  return (
    <GridItem
      colSpan={1}
      bg={useColorModeValue('orange.100', 'gray.700')}
      borderRadius='xl'
      padding={6}
      h='100%'
    >
      <AspectRatio ratio={2 / 1} alignSelf='top'>
        <Image
          objectFit='cover'
          src={imageSrc}
          alt={`${name} image`}
          borderRadius='xl'
          _hover={{ cursor: 'pointer' }}
          onClick={() => {
            setModalContent({
              name,
              affiliation,
              description,
              imageSrc,
              tags,
              github,
              deployment,
            });
            onOpen();
          }}
        />
      </AspectRatio>
      <Box marginTop={4} marginBottom={2}>
        <Heading fontSize={{ base: 'xl', lg: '3xl' }}>{name}</Heading>
        <Text fontSize={{ base: 'lg', lg: 'xl' }} fontStyle='italic'>
          {affiliation}
        </Text>
        <Flex flexWrap='wrap' gap={1} marginTop={1}>
          {tags.map((tag) => (
            <TechTag key={tag} tag={tag} />
          ))}
        </Flex>
      </Box>
      <Text fontSize={{ base: 'md', lg: 'lg' }}>{description}</Text>
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
              bg: useColorModeValue('orange.200', 'gray.800'),
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
              bg: useColorModeValue('orange.200', 'gray.800'),
            }}
          />
        </Link>
      </HStack>
    </GridItem>
  );
};

export interface modalContent {
  name: string;
  affiliation: string;
  description: string;
  tags: string[];
  imageSrc: string;
  github?: string;
  deployment?: string;
}

export default function Projects() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalContent, setModalContent] = useState<modalContent>({
    name: 'string',
    affiliation: '',
    description: '',
    tags: [],
    imageSrc: '',
    github: '',
    deployment: '',
  });

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
      >
        {projects.map(({ ...props }, index) => (
          <ChakraBox key={props.name} variants={item}>
            <Card
              {...props}
              setModalContent={setModalContent}
              onOpen={onOpen}
            />
          </ChakraBox>
        ))}
      </Grid>

      <Modal isOpen={isOpen} onClose={onClose} size='full'>
        <ModalOverlay />
        <ModalContent
          bg={useColorModeValue('orange.100', 'gray.700')}
          color={useColorModeValue('yellow.900', 'white')}
        >
          <ModalHeader fontSize={{ base: 'xl', lg: '3xl' }} fontWeight='bold'>
            {modalContent.name}
          </ModalHeader>
          <ModalCloseButton size='lg' />
          <ModalBody>
            <Flex
              justifyContent='center'
              flexDirection='column'
              alignItems='center'
            >
              <Image
                objectFit='cover'
                src={modalContent.imageSrc}
                alt={`${modalContent.name} image`}
                borderRadius='xl'
              />
              <Text
                fontSize={{ base: 'lg', lg: 'xl' }}
                fontStyle='italic'
                marginTop={4}
                marginBottom={2}
              >
                {modalContent.affiliation}
              </Text>
              <Flex flexWrap='wrap' gap={1} marginBottom={2}>
                {modalContent.tags.map((tag) => (
                  <TechTag key={tag} tag={tag} />
                ))}
              </Flex>
              <Container maxW='4xl' paddingX={0}>
                <Text fontSize={{ base: 'md', lg: 'lg' }}>
                  {modalContent.description}
                </Text>
              </Container>
            </Flex>
          </ModalBody>

          <ModalFooter display='flex' justifyContent='space-between'>
            <HStack paddingY={3}>
              <Link
                href={modalContent.github}
                _hover={{
                  textDecoration: 'none',
                }}
                target='_blank'
                display={Boolean(modalContent.github) ? 'block' : 'none'}
              >
                <IconButton
                  aria-label={`${modalContent.name} github repository`}
                  icon={<FaGithub />}
                  variant='outline'
                  borderColor={useColorModeValue('yellow.900', 'white')}
                  _hover={{
                    bg: useColorModeValue('orange.200', 'gray.800'),
                  }}
                />
              </Link>
              <Link
                href={modalContent.deployment}
                _hover={{
                  textDecoration: 'none',
                }}
                target='_blank'
                display={Boolean(modalContent.deployment) ? 'block' : 'none'}
              >
                <IconButton
                  aria-label={`${modalContent.name} website`}
                  icon={<FaLaptopCode />}
                  variant='outline'
                  borderColor={useColorModeValue('yellow.900', 'white')}
                  _hover={{
                    bg: useColorModeValue('orange.200', 'gray.800'),
                  }}
                />
              </Link>
            </HStack>
            <Button
              bg={useColorModeValue('orange.100', 'gray.700')}
              onClick={onClose}
              _hover={{
                bg: useColorModeValue('orange.200', 'gray.800'),
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraBox>
  );
}
