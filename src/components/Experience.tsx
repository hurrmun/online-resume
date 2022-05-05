import { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  useColorModeValue,
  Divider,
  chakra,
  Grid,
  GridItem,
  Image,
  Text,
  Button,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { skills } from './data/content';

const Card = () => {
  const display = useBreakpointValue({ base: 'block', lg: 'none' });

  const [seeMore, setSeeMore] = useState(false);
  const [cardContent, setCardContent] = useState({
    lines: 3,
    expandText: 'See More',
  });

  useEffect(() => {
    if (seeMore) {
      setCardContent({ lines: 10, expandText: 'See Less' });
    } else {
      setCardContent({ lines: 3, expandText: 'See More' });
    }
  }, [seeMore]);

  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={4} alignItems='center'>
      <GridItem colSpan={1}>
        <Image
          borderRadius='full'
          objectFit='cover'
          src='https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2011/11/square-format-01.jpg?resize=600%2C600&ssl=1'
          alt='ufinity logo'
          padding={{ base: 2, lg: 8 }}
        />
      </GridItem>
      <GridItem
        colSpan={3}
        display='flex'
        flexDirection='column'
        justifyContent='center'
        gap={2}
        padding={{ base: 6, lg: 8 }}
        bg={useColorModeValue('orange.100', 'gray.700')}
        borderRadius='xl'
      >
        <Box>
          <Heading fontSize={{ base: '2xl', lg: '5xl' }}>Company Name</Heading>
          <Text fontSize={{ base: 'xl', lg: '2xl' }} fontStyle='italic'>
            Mar 22 - Present
          </Text>
        </Box>
        <Text fontSize={{ base: 'lg', lg: 'xl' }} noOfLines={cardContent.lines}>
          Implemented UI using front-end libraries such as React, Redux, Redux
          Toolkit, React Hook Forms, and MUI. Unit, functional testing, and bug
          fixing for various UI components using Jest and React Testing Library.
        </Text>
        <Button
          display={display}
          variant='ghost'
          onClick={() => setSeeMore((prev) => !prev)}
        >
          {cardContent.expandText}
        </Button>
      </GridItem>
    </Grid>
  );
};
// import { container, item } from './animations';

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
      <VStack gap={2}>
        <Card />
        <Card />
        <Card />
        <Card />
      </VStack>
    </Box>
  );
}
