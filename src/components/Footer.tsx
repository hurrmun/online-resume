import {
  Box,
  chakra,
  Container,
  Flex,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { ReactNode } from 'react';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target='_blank'
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      textAlign={{ base: 'center', md: 'left' }}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.300', 'whiteAlpha.300'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('orange.300', 'gray.900')}
      color={useColorModeValue('yellow.800', 'white')}
      marginTop={10}
    >
      <Container
        as={Stack}
        maxW={'7xl'}
        py={8}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Flex gap={2}>
          <Text>© 2022 Herman Loh Online Resume</Text>
          <Link
            href='https://github.com/hurrmun/online-resume'
            fontStyle='italic'
            target='_blank'
          >
            github.com/hurrmun/online-resume
          </Link>
        </Flex>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'LinkedIn'} href={'https://github.com/hurrmun'}>
            <FaLinkedin />
          </SocialButton>
          <SocialButton
            label={'GitHub'}
            href={'https://www.linkedin.com/in/hermanlyx/'}
          >
            <FaGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
