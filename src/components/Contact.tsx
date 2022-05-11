import {
  Button,
  chakra,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Textarea,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

type Inputs = {
  name: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <ChakraBox>
      <Heading
        fontSize={{ base: '4xl', lg: '7xl' }}
        paddingX={5}
        marginY={20}
        textAlign='center'
        textTransform='uppercase'
        fontWeight='black'
      >
        Contact Me
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid templateColumns='repeat(3, 1fr)' gap={4}>
          <GridItem
            colSpan={{
              base: 3,
              lg: 1,
            }}
          >
            <VStack gap={2}>
              <FormControl variant='floating' isInvalid={Boolean(errors.name)}>
                <Input
                  id='name'
                  placeholder='name'
                  focusBorderColor='#ffffff40'
                  {...register('name')}
                />
                <FormLabel
                  htmlFor='name'
                  bg={useColorModeValue('orange.50', 'gray.800')}
                >
                  Name
                </FormLabel>
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl variant='floating' isInvalid={Boolean(errors.name)}>
                <Input
                  id='name'
                  placeholder='affiliation'
                  focusBorderColor='#ffffff40'
                  {...register('name')}
                />
                <FormLabel
                  htmlFor='name'
                  bg={useColorModeValue('orange.50', 'gray.800')}
                >
                  Affiliation
                </FormLabel>
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl variant='floating' isInvalid={Boolean(errors.name)}>
                <Input
                  id='name'
                  placeholder='email'
                  focusBorderColor='#ffffff40'
                  {...register('name')}
                />
                <FormLabel
                  htmlFor='name'
                  bg={useColorModeValue('orange.50', 'gray.800')}
                >
                  Email
                </FormLabel>
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl variant='floating' isInvalid={Boolean(errors.name)}>
                <Input
                  id='name'
                  placeholder='email'
                  focusBorderColor='#ffffff40'
                  {...register('name')}
                />
                <FormLabel
                  htmlFor='name'
                  bg={useColorModeValue('orange.50', 'gray.800')}
                >
                  Phone Number (optional)
                </FormLabel>
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
            </VStack>
          </GridItem>
          <GridItem
            colSpan={{
              base: 3,
              lg: 2,
            }}
          >
            <VStack gap={2}>
              <FormControl variant='floating' isInvalid={Boolean(errors.name)}>
                <Input
                  id='name'
                  placeholder='email'
                  focusBorderColor='#ffffff40'
                  {...register('name')}
                  marginBottom='2px'
                />
                <FormLabel
                  htmlFor='name'
                  bg={useColorModeValue('orange.50', 'gray.800')}
                >
                  Subject
                </FormLabel>
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl variant='floating' isInvalid={Boolean(errors.name)}>
                <Textarea
                  id='name'
                  placeholder='message'
                  {...register('message')}
                  focusBorderColor='#ffffff40'
                  rows={6}
                />
                <FormLabel
                  htmlFor='name'
                  bg={useColorModeValue('orange.50', 'gray.800')}
                >
                  Message
                </FormLabel>

                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
            </VStack>
          </GridItem>
        </Grid>
        <Button mt={4} isLoading={isSubmitting} isFullWidth type='submit'>
          Submit
        </Button>
      </form>
    </ChakraBox>
  );
}