import { useEffect } from 'react';
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
  Link,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { isValidMotionProp, motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import { contactSchema } from '../misc/formValidation';
import emailjs from '@emailjs/browser';
import { item } from '../misc/animations';

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
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Inputs>({
    resolver: yupResolver(contactSchema),
  });

  const toast = useToast();

  type submitData = {
    from_email: string;
    from_name: string;
    from_affiliation?: string;
    from_number?: string;
    subject: string;
    message: string;
  };

  const submitForm = (email: submitData) => {
    // send message
    emailjs
      .send(
        'hurrmundotdev@gmail.com',
        'contact_form',
        email,
        'xtY2mvWUNl29HeDtO'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast({
            title: 'Your Message was Sent.',
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: 'bottom-left',
          });
        },
        (error) => {
          console.log(error.text);
          toast({
            title: 'Something went wrong.',
            status: 'error',
            duration: 5000,
            isClosable: true,
            position: 'bottom-left',
          });
        }
      );
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const transformed = {
      from_email: data.email,
      subject: data.subject,
      from_name: data.name,
      from_affiliation: data.affiliation,
      from_number: data.phone,
      message: data.formMessage,
    };
    submitForm(transformed);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: '',
        affiliation: '',
        email: '',
        phone: '',
        subject: '',
        formMessage: '',
      });
    }
  }, [isSubmitSuccessful, reset, toast]);

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
        variants={item}
        bg={useColorModeValue('orange.100', 'gray.700')}
        marginBottom={8}
        width='full'
        paddingX={6}
        paddingY={8}
        borderRadius='xl'
      >
        <Text
          fontSize={{ base: 'lg', lg: '2xl' }}
          fontWeight='light'
          textAlign='center'
        >
          If you have any enquiries for me or want to have a chat, you can
          either drop me an email at <Text as='b'>hermanlyx@gmail.com</Text>,
          connect with me on{' '}
          <Link
            href='https://www.linkedin.com/in/hermanlyx/'
            textDecoration='underline'
            target='_blank'
          >
            linkedIn
          </Link>{' '}
          or leave a message down below!
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
