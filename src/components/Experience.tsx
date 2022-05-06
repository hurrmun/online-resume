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
import { workExperience } from '../data/content';
import { container, item } from './animations';

const Card = ({
  companyName,
  duration,
  description,
  imageSrc,
}: {
  companyName: string;
  duration: string;
  description: string;
  imageSrc: string;
}) => {
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
    <Grid
      templateColumns='repeat(4, 1fr)'
      gap={{ base: 2, lg: 4 }}
      alignItems='center'
      bg={useColorModeValue(
        { base: 'orange.100', lg: 'transparent' },
        { base: 'gray.700', lg: 'transparent' }
      )}
      borderRadius='xl'
    >
      <GridItem colSpan={1} justifySelf='center'>
        <Image
          borderRadius='full'
          objectFit='cover'
          src={imageSrc}
          alt={`${companyName} logo`}
          padding={{ base: 3, lg: 8 }}
        />
      </GridItem>
      <GridItem
        colSpan={3}
        display='flex'
        flexDirection='column'
        justifyContent='center'
        gap={2}
        paddingLeft={{ base: 0, md: 4, lg: 8 }}
        paddingRight={{ base: 3, lg: 8 }}
        paddingY={{ base: 6, lg: 8 }}
        bg={useColorModeValue(
          { base: 'transparent', lg: 'orange.100' },
          { base: 'transparent', lg: 'gray.700' }
        )}
        borderRadius='xl'
      >
        <Box>
          <Heading fontSize={{ base: '2xl', lg: '5xl' }}>{companyName}</Heading>
          <Text fontSize={{ base: 'xl', lg: '2xl' }} fontStyle='italic'>
            {duration}
          </Text>
        </Box>
        <Text fontSize={{ base: 'lg', lg: 'xl' }} noOfLines={cardContent.lines}>
          {description}
        </Text>
        <Button
          display={display}
          variant='ghost'
          onClick={() => setSeeMore((prev) => !prev)}
          _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('orange.200', 'gray.600'),
          }}
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
    <ChakraBox variants={container} marginTop={{ base: 20, lg: 32 }}>
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
      <VStack gap={2} paddingRight={{ base: 0, lg: 4 }}>
        {workExperience.map(({ ...props }, index) => (
          <ChakraBox key={props.companyName} variants={item}>
            <Card {...props} />
            {index !== workExperience.length - 1 && <Divider marginTop={4} />}
          </ChakraBox>
        ))}
      </VStack>
    </ChakraBox>
  );
}
