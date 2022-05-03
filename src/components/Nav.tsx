import { ReactNode, useEffect } from 'react';
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
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('orange.200', 'gray.700'),
    }}
    href={'#'}
    textTransform='lowercase'
    fontWeight='bold'
  >
    {children}
  </Link>
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
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Text fontSize='xl' casing='uppercase' fontWeight='bold'>
            Herman Loh
          </Text>
          <Show above='md'>
            <Stack direction='row' spacing={[3, 3, 5, 8]}>
              <NavLink children='About Me' />
              <NavLink children='Skills' />
              <NavLink children='Experience' />
              <NavLink children='Projects' />
              <NavLink children='Contact' />
            </Stack>
          </Show>
          <Stack direction='row' spacing={[3, 3, 7]}>
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
                <DrawerHeader>Navigate to</DrawerHeader>
                <DrawerBody>
                  <Stack direction='column' spacing={[3, 3, 7]}>
                    <NavLink children='About Me' />
                    <NavLink children='Skills' />
                    <NavLink children='Experience' />
                    <NavLink children='Projects' />
                    <NavLink children='Contact' />
                  </Stack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Stack>
        </Flex>
      </Box>
    </>
  );
}
