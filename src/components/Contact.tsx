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
  Text,
  Textarea,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { isValidMotionProp, motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import { contactSchema } from '../data/formValidation';
import { itemReverse } from './animations';

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

type Inputs = {
  name: string;
  affiliation: string;
  email: string;
  phone: string;
  subject: string;
  formMessage: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: yupResolver(contactSchema),
  });
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
      <ChakraBox
        variants={itemReverse}
        bg={useColorModeValue('orange.100', 'gray.700')}
        marginBottom={8}
        width='full'
        paddingX={6}
        paddingY={8}
        borderRadius='xl'
      >
        <Text fontSize={{ base: 'lg', lg: '2xl' }} fontWeight='light'>
          If you have any enquiries about me or just want to have a chat, please
          drop me an email at <b>hermanlyx@gmail.com</b> or leave a message down
          below!
        </Text>
      </ChakraBox>
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
                  _placeholder={{
                    color: useColorModeValue('yellow.800', 'white'),
                    opacity: 0.5,
                  }}
                  _hover={{
                    borderColor: useColorModeValue('yellow.500', 'gray.300'),
                  }}
                  borderColor={useColorModeValue('yellow.900', 'gray.600')}
                  focusBorderColor={useColorModeValue('orange.700', 'gray.400')}
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

              <FormControl
                variant='floating'
                isInvalid={Boolean(errors.affiliation)}
              >
                <Input
                  id='affiliation'
                  placeholder='affiliation'
                  _placeholder={{
                    color: useColorModeValue('yellow.800', 'white'),
                    opacity: 0.5,
                  }}
                  _hover={{
                    borderColor: useColorModeValue('yellow.500', 'gray.300'),
                  }}
                  borderColor={useColorModeValue('yellow.900', 'gray.600')}
                  focusBorderColor={useColorModeValue('orange.700', 'gray.400')}
                  {...register('affiliation')}
                />
                <FormLabel
                  htmlFor='affiliation'
                  bg={useColorModeValue('orange.50', 'gray.800')}
                >
                  Affiliation (optional)
                </FormLabel>
                <FormErrorMessage>
                  {errors.affiliation && errors.affiliation.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl variant='floating' isInvalid={Boolean(errors.email)}>
                <Input
                  id='email'
                  placeholder='email'
                  _placeholder={{
                    color: useColorModeValue('yellow.800', 'white'),
                    opacity: 0.5,
                  }}
                  _hover={{
                    borderColor: useColorModeValue('yellow.500', 'gray.300'),
                  }}
                  borderColor={useColorModeValue('yellow.900', 'gray.600')}
                  focusBorderColor={useColorModeValue('orange.700', 'gray.400')}
                  {...register('email')}
                />
                <FormLabel
                  htmlFor='email'
                  bg={useColorModeValue('orange.50', 'gray.800')}
                >
                  Email
                </FormLabel>
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl variant='floating' isInvalid={Boolean(errors.phone)}>
                <Input
                  id='phone'
                  placeholder='phone'
                  _placeholder={{
                    color: useColorModeValue('yellow.800', 'white'),
                    opacity: 0.5,
                  }}
                  _hover={{
                    borderColor: useColorModeValue('yellow.500', 'gray.300'),
                  }}
                  borderColor={useColorModeValue('yellow.900', 'gray.600')}
                  focusBorderColor={useColorModeValue('orange.700', 'gray.400')}
                  {...register('phone')}
                />
                <FormLabel
                  htmlFor='phone'
                  bg={useColorModeValue('orange.50', 'gray.800')}
                >
                  Phone Number (optional)
                </FormLabel>
                <FormErrorMessage>
                  {errors.phone && errors.phone.message}
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
              <FormControl
                variant='floating'
                isInvalid={Boolean(errors.subject)}
              >
                <Input
                  id='subject'
                  placeholder='subject'
                  _placeholder={{
                    color: useColorModeValue('yellow.800', 'white'),
                    opacity: 0.5,
                  }}
                  _hover={{
                    borderColor: useColorModeValue('yellow.500', 'gray.300'),
                  }}
                  borderColor={useColorModeValue('yellow.900', 'gray.600')}
                  focusBorderColor={useColorModeValue('orange.700', 'gray.400')}
                  {...register('subject')}
                  marginBottom='2px'
                />
                <FormLabel
                  htmlFor='subject'
                  bg={useColorModeValue('orange.50', 'gray.800')}
                >
                  Subject
                </FormLabel>
                <FormErrorMessage>
                  {errors.subject && errors.subject.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                variant='floating'
                isInvalid={Boolean(errors.formMessage)}
              >
                <Textarea
                  id='formMessage'
                  placeholder='message'
                  _placeholder={{
                    color: useColorModeValue('yellow.800', 'white'),
                    opacity: 0.5,
                  }}
                  _hover={{
                    borderColor: useColorModeValue('yellow.500', 'gray.300'),
                  }}
                  borderColor={useColorModeValue('yellow.900', 'gray.600')}
                  focusBorderColor={useColorModeValue('orange.700', 'gray.400')}
                  {...register('formMessage')}
                  rows={6}
                />
                <FormLabel
                  htmlFor='formMessage'
                  bg={useColorModeValue('orange.50', 'gray.800')}
                >
                  Message
                </FormLabel>

                <FormErrorMessage>
                  {errors.formMessage && errors.formMessage.message}
                </FormErrorMessage>
              </FormControl>
            </VStack>
          </GridItem>
        </Grid>
        <Button
          marginTop={5}
          bg={useColorModeValue('orange.200', 'gray.700')}
          color={useColorModeValue('yellow.800', 'white')}
          _hover={{ bg: useColorModeValue('orange.300', 'gray.600') }}
          isLoading={isSubmitting}
          isFullWidth
          type='submit'
        >
          Submit
        </Button>
      </form>
    </ChakraBox>
  );
}
