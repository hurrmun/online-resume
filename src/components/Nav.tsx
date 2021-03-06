import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  useColorModeValue,
  Stack,
  Text,
  Show,
  useColorMode,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  DrawerCloseButton,
  DrawerFooter,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import resume from '../files/herman-resume.pdf';
import { scroller } from 'react-scroll';

const NavLink = ({
  children,
  section,
  close = () => null,
}: {
  children: ReactNode;
  section: string;
  close?: () => void;
}) => (
  <Button
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('orange.200', 'gray.800'),
    }}
    textTransform='lowercase'
    fontWeight='bold'
    variant='ghost'
    onClick={() => {
      scroller.scrollTo(section, {
        duration: 1000,
        smooth: true,
        offset: -100,
      });
      close();
    }}
  >
    {children}
  </Button>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        px={4}
        bg={useColorModeValue('orange.300', 'gray.900')}
        color={useColorModeValue('yellow.800', 'white')}
        position='sticky'
        top={0}
        width='full'
        zIndex={3}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Text fontSize='xl' casing='uppercase' fontWeight='bold'>
            Herman Loh
          </Text>
          <Show above='md'>
            <Stack
              direction='row'
              spacing={[0, 3, 5, 8]}
              alignItems='center'
              textAlign='center'
            >
              <NavLink children='About Me' section='about' />
              <NavLink children='Skills' section='skills' />
              <NavLink children='Experience' section='experience' />
              <NavLink children='Education' section='education' />
              <NavLink children='Projects' section='projects' />
              <NavLink children='Contact' section='contact' />
            </Stack>
          </Show>
          <Stack direction='row' spacing={3}>
            <Button
              onClick={toggleColorMode}
              variant='outline'
              borderColor={useColorModeValue('orange.900', 'white')}
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('orange.200', 'gray.700'),
              }}
            >
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Show below='md'>
              <Button
                onClick={onOpen}
                variant='ghost'
                fontSize='xl'
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('orange.200', 'gray.700'),
                }}
              >
                <HamburgerIcon />
              </Button>
            </Show>
            <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader
                  bg={useColorModeValue('orange.300', 'gray.900')}
                  marginBottom={4}
                >
                  Navigate to
                </DrawerHeader>
                <DrawerBody>
                  <Stack direction='column' spacing={[4, 4, 7]}>
                    <NavLink
                      children='About Me'
                      section='about'
                      close={onClose}
                    />
                    <NavLink
                      children='Skills'
                      section='skills'
                      close={onClose}
                    />
                    <NavLink
                      children='Experience'
                      section='experience'
                      close={onClose}
                    />
                    <NavLink
                      children='Education'
                      section='education'
                      close={onClose}
                    />
                    <NavLink
                      children='Projects'
                      section='projects'
                      close={onClose}
                    />
                    <NavLink
                      children='Contact'
                      section='contact'
                      close={onClose}
                    />
                  </Stack>
                </DrawerBody>
                <DrawerFooter>
                  <HStack>
                    <Link
                      href='https://github.com/hurrmun'
                      _hover={{
                        textDecoration: 'none',
                      }}
                      target='_blank'
                    >
                      <IconButton
                        aria-label='github'
                        icon={<FaGithub />}
                        variant='outline'
                        borderColor={useColorModeValue('yellow.900', 'white')}
                        _hover={{
                          bg: useColorModeValue('orange.200', 'gray.700'),
                        }}
                      />
                    </Link>
                    <Link
                      href='https://www.linkedin.com/in/hermanlyx/'
                      _hover={{
                        textDecoration: 'none',
                      }}
                      target='_blank'
                    >
                      <IconButton
                        aria-label='linkedIn'
                        icon={<FaLinkedinIn />}
                        variant='outline'
                        borderColor={useColorModeValue('yellow.900', 'white')}
                        _hover={{
                          bg: useColorModeValue('orange.200', 'gray.700'),
                        }}
                      />
                    </Link>
                    <Link
                      href={resume}
                      download
                      _hover={{
                        textDecoration: 'none',
                      }}
                    >
                      <Button
                        variant='outline'
                        borderColor={useColorModeValue('yellow.900', 'white')}
                        rightIcon={<DownloadIcon />}
                        _hover={{
                          bg: useColorModeValue('orange.200', 'gray.700'),
                        }}
                      >
                        Download my CV
                      </Button>
                    </Link>
                  </HStack>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Stack>
        </Flex>
      </Box>
    </>
  );
}
